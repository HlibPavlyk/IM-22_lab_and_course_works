# Реалізація інформаційного та програмного забезпечення

## SQL-скрипт для створення на початкового наповнення бази даних

```sql

    -- MySQL dump 10.13  Distrib 8.0.34, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: restful_api_db
-- ------------------------------------------------------
-- Server version	8.2.0

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `dataset_categories`
--

DROP TABLE IF EXISTS `dataset_categories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `dataset_categories` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(50) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`),
  KEY `ix_dataset_categories_id` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `dataset_categories`
--

LOCK TABLES `dataset_categories` WRITE;
/*!40000 ALTER TABLE `dataset_categories` DISABLE KEYS */;
/*!40000 ALTER TABLE `dataset_categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `datasets`
--

DROP TABLE IF EXISTS `datasets`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `datasets` (
  `id` int NOT NULL AUTO_INCREMENT,
  `category_id` int DEFAULT NULL,
  `author_username` varchar(50) DEFAULT NULL,
  `name` varchar(50) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`),
  KEY `category_id` (`category_id`),
  KEY `author_username` (`author_username`),
  KEY `ix_datasets_id` (`id`),
  CONSTRAINT `datasets_ibfk_1` FOREIGN KEY (`category_id`) REFERENCES `dataset_categories` (`id`),
  CONSTRAINT `datasets_ibfk_2` FOREIGN KEY (`author_username`) REFERENCES `users` (`username`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `datasets`
--

LOCK TABLES `datasets` WRITE;
/*!40000 ALTER TABLE `datasets` DISABLE KEYS */;
/*!40000 ALTER TABLE `datasets` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `files`
--

DROP TABLE IF EXISTS `files`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `files` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(50) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `content` varchar(1000) DEFAULT NULL,
  `dataset_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`),
  KEY `dataset_id` (`dataset_id`),
  KEY `ix_files_id` (`id`),
  CONSTRAINT `files_ibfk_1` FOREIGN KEY (`dataset_id`) REFERENCES `datasets` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `files`
--

LOCK TABLES `files` WRITE;
/*!40000 ALTER TABLE `files` DISABLE KEYS */;
/*!40000 ALTER TABLE `files` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(50) NOT NULL,
  `firstname` varchar(50) NOT NULL,
  `lastname` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `password` varchar(50) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `username` (`username`),
  UNIQUE KEY `email` (`email`),
  UNIQUE KEY `password` (`password`),
  KEY `ix_users_id` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-12-18  0:58:11



```

## RESTfull сервіс для управління даними(Python, FastAPI, sqlalchemy)
RESTful сервіс для управління даними розроблено на Python за використанням FastAPI та SQLAlchemy. 
Використання архітектури MVC спрощує взаємодію з базою даних, а FastAPI дозволяє швидко створювати ефективний та 
легкий в управлінні сервіс. SQLAlchemy використовується для об'єктно-реляційного відображення, що полегшує роботу з 
базою даних без прямого використання SQL-скриптів.


### Середовище

#### Database
```python
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from sqlalchemy.ext.declarative import declarative_base

URL_DATABASE = 'mysql+pymysql://root:07082004@localhost:3306/restful_api_db'

engine = create_engine(URL_DATABASE)

SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

Base = declarative_base()

```

#### Dependency
```python
from fastapi import Depends
from typing import Annotated
from sqlalchemy.orm import Session
from src.python.enviroment.database import SessionLocal


def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


db_dependency = Annotated[Session, Depends(get_db)]

```

### Моделі

#### User_model
```python
from sqlalchemy import Column, Integer, String
from pydantic import BaseModel
from sqlalchemy.orm import relationship
from src.python.enviroment.database import Base


class User(Base):
    __tablename__ = 'users'

    id = Column(Integer, primary_key=True, index=True, autoincrement=True)
    username = Column(String(50), unique=True, nullable=False)
    firstname = Column(String(50), nullable=False)
    lastname = Column(String(50), nullable=False)
    email = Column(String(50), unique=True, nullable=False)
    password = Column(String(50), unique=True, nullable=False)

    datasets = relationship("DataSet", back_populates="author")


class UserBase(BaseModel):
    username: str
    firstname: str
    lastname: str
    email: str
    password: str


class UserBaseWithID(UserBase):
    id: int


```

#### Dataset_category_model
```python
from sqlalchemy import Column, Integer, String
from pydantic import BaseModel
from sqlalchemy.orm import relationship
from src.python.enviroment.database import Base


class DataSetCategory(Base):
    __tablename__ = 'dataset_categories'

    id = Column(Integer, primary_key=True, index=True, autoincrement=True)
    name = Column(String(50), unique=True, nullable=True)
    description = Column(String(255), nullable=True)

    datasets = relationship("DataSet", back_populates="category", cascade="all, delete-orphan")


class DataSetCategoryBase(BaseModel):
    name: str
    description: str


class DataSetCategoryBaseWithId(DataSetCategoryBase):
    id: int


```

#### Dataset_model
```python
from sqlalchemy import Column, Integer, String, ForeignKey
from pydantic import BaseModel
from sqlalchemy.orm import relationship
from src.python.enviroment.database import Base


class DataSet(Base):
    __tablename__ = 'datasets'

    id = Column(Integer, primary_key=True, index=True, autoincrement=True)
    category_id = Column(Integer, ForeignKey('dataset_categories.id'))
    author_username = Column(String(50), ForeignKey('users.username'))
    name = Column(String(50), unique=True, nullable=True)
    description = Column(String(255), nullable=True)

    category = relationship("DataSetCategory", back_populates="datasets", cascade="all, delete-orphan",
                            single_parent=True)
    author = relationship("User", back_populates="datasets")
    file = relationship("File", back_populates="dataset", cascade="all, delete-orphan")


class DataSetBase(BaseModel):
    name: str
    description: str
    category_id: int
    author_username: str


class DataSetBaseWithId(DataSetBase):
    id: int

```

#### File_model
```python
from sqlalchemy import Column, Integer, String, ForeignKey
from pydantic import BaseModel
from sqlalchemy.orm import relationship
from src.python.enviroment.database import Base


class File(Base):
    __tablename__ = 'files'

    id = Column(Integer, primary_key=True, index=True, autoincrement=True)
    name = Column(String(50), unique=True, nullable=True)
    description = Column(String(255), nullable=True)
    content = Column(String(1000), nullable=True)
    dataset_id = Column(Integer, ForeignKey('datasets.id'))

    dataset = relationship("DataSet", back_populates="file", cascade="all, delete-orphan", single_parent=True)


class FileBase(BaseModel):
    name: str
    description: str
    content: str
    dataset_id: int


class FileBaseWithId(FileBase):
    id: int



```

### Контролери

#### User_router
```python
from fastapi import APIRouter, HTTPException, status
from typing_extensions import List
from src.python.models import user_model
from src.python.enviroment.dependency import db_dependency
from src.python.enviroment.exceptions import check_field_uniqueness, check_field_nullable

router = APIRouter()


@router.post('/users', status_code=status.HTTP_201_CREATED, response_model=user_model.UserBase)
async def create_user(user: user_model.UserBase, db: db_dependency):

    [check_field_uniqueness(db, user_model.User, {field: getattr(user, field, None)}, field)
     for field in ['username', 'email', 'password']]

    [check_field_nullable(db, user_model.User, {field: getattr(user, field, None)}, field)
     for field in ['username', 'firstname', 'lastname', 'email', 'password']]

    db_user = user_model.User(**user.dict())
    db.add(db_user)
    db.commit()
    db.refresh(db_user)

    return db_user


@router.get('/users/{user_id}', status_code=status.HTTP_200_OK, response_model=user_model.UserBaseWithID)
async def read_user(user_id: int, db: db_dependency):

    user = db.query(user_model.User).filter(user_model.User.id == user_id).first()
    if user is None:
        raise HTTPException(status_code=404, detail="User not found")

    return user


@router.get('/users', status_code=status.HTTP_200_OK, response_model=List[user_model.UserBaseWithID])
async def read_users(db: db_dependency):

    users = db.query(user_model.User).all()
    return users


@router.put("/users/{user_id}", status_code=status.HTTP_200_OK, response_model=user_model.UserBase)
async def update_user(user_id: int, updated_user: user_model.UserBase, db: db_dependency):

    user = db.query(user_model.User).filter(user_model.User.id == user_id).first()
    if user is None:
        raise HTTPException(status_code=404, detail="User not found")

    for field in ['username', 'firstname', 'lastname', 'email', 'password']:
        setattr(user, field, getattr(updated_user, field, None))

    [check_field_uniqueness(db, user_model.User, {field: getattr(user, field, None)}, field)
     for field in ['username', 'email', 'password']]

    [check_field_nullable(db, user_model.User, {field: getattr(user, field, None)}, field)
     for field in ['username', 'firstname', 'lastname', 'email', 'password']]

    db.add(user)
    db.commit()
    db.refresh(user)

    return user


@router.delete('/users/{user_id}', status_code=status.HTTP_204_NO_CONTENT)
async def delete_user(user_id: int, db: db_dependency):

    user = db.query(user_model.User).filter(user_model.User.id == user_id).first()
    if user is None:
        raise HTTPException(status_code=404, detail="User not found")

    db.delete(user)
    db.commit()

    return {"message": f"User with ID {user_id} has been deleted"}



```

#### Dataset_category_router
```python
from fastapi import APIRouter, HTTPException, status
from typing_extensions import List
from src.python.models import dataset_category_model
from src.python.enviroment.dependency import db_dependency
from src.python.enviroment.exceptions import check_field_uniqueness, check_field_nullable

router = APIRouter()


@router.post('/dataset_category', status_code=status.HTTP_201_CREATED,
             response_model=dataset_category_model.DataSetCategoryBase)
async def create_dataset_category(dataset_category: dataset_category_model.DataSetCategoryBase, db: db_dependency):
    [check_field_uniqueness(db, dataset_category_model.DataSetCategory,
                            {field: getattr(dataset_category, field, None)}, field)
     for field in ['name']]

    [check_field_nullable(db, dataset_category_model.DataSetCategory,
                          {field: getattr(dataset_category, field, None)}, field)
     for field in ['name', 'description']]

    db_dataset_category = dataset_category_model.DataSetCategory(**dataset_category.dict())
    db.add(db_dataset_category)
    db.commit()
    db.refresh(db_dataset_category)

    return db_dataset_category


@router.get('/dataset_category/{dataset_category_id}', status_code=status.HTTP_200_OK,
            response_model=dataset_category_model.DataSetCategoryBaseWithId)
async def read_dataset_category(dataset_category_id: int, db: db_dependency):

    db_dataset_category = (db.query(dataset_category_model.DataSetCategory).
                           filter(dataset_category_model.DataSetCategory.id == dataset_category_id).first())

    if db_dataset_category is None:
        raise HTTPException(status_code=404, detail="Dataset category not found")

    return db_dataset_category


@router.get('/dataset_categories', status_code=status.HTTP_200_OK,
            response_model=List[dataset_category_model.DataSetCategoryBaseWithId])
async def read_dataset_categories(db: db_dependency):

    dataset_categories = db.query(dataset_category_model.DataSetCategory).all()
    return dataset_categories

```

#### Dataset_router
```python
from fastapi import APIRouter, HTTPException, status
from typing_extensions import List
from src.python.models import dataset_model, dataset_category_model, user_model
from src.python.enviroment.dependency import db_dependency
from src.python.enviroment.exceptions import check_field_uniqueness, check_field_nullable, check_object_exists

router = APIRouter()


@router.post('/datasets', status_code=status.HTTP_201_CREATED, response_model=dataset_model.DataSetBase)
async def create_dataset(dataset: dataset_model.DataSetBase, db: db_dependency):
    [check_field_uniqueness(db, dataset_model.DataSet, {field: getattr(dataset, field, None)}, field)
     for field in ['name']]

    [check_field_nullable(db, dataset_model.DataSet, {field: getattr(dataset, field, None)}, field)
     for field in ['name', 'description']]

    check_object_exists(db, dataset_category_model.DataSetCategory,
                        {'id': dataset.category_id}, 'Category not found')
    check_object_exists(db, user_model.User, {'username': dataset.author_username}, 'User not found')

    db_dataset = dataset_model.DataSet(**dataset.dict())
    db.add(db_dataset)
    db.commit()
    db.refresh(db_dataset)

    return db_dataset


@router.get('/datasets/{dataset_id}', status_code=status.HTTP_200_OK, response_model=dataset_model.DataSetBaseWithId)
async def read_dataset(dataset_id: int, db: db_dependency):

    db_dataset = db.query(dataset_model.DataSet).filter(dataset_model.DataSet.id == dataset_id).first()
    if db_dataset is None:
        raise HTTPException(status_code=404, detail="Dataset not found")

    return db_dataset


@router.get('/datasets', status_code=status.HTTP_200_OK, response_model=List[dataset_model.DataSetBaseWithId])
async def read_datasets(db: db_dependency):

    db_dataset = db.query(dataset_model.DataSet).all()
    return db_dataset


@router.put("/datasets/{dataset_id}", status_code=status.HTTP_200_OK, response_model=dataset_model.DataSetBase)
async def update_dataset(dataset_id: int, updated_dataset: dataset_model.DataSetBase, db: db_dependency):

    db_dataset = db.query(dataset_model.DataSet).filter(dataset_model.DataSet.id == dataset_id).first()
    if db_dataset is None:
        raise HTTPException(status_code=404, detail="Dataset not found")

    for field in ['category_id', 'author_username', 'name', 'description']:
        setattr(db_dataset, field, getattr(updated_dataset, field, None))

    [check_field_uniqueness(db, dataset_model.DataSet, {field: getattr(db_dataset, field, None)}, field)
     for field in ['name']]

    [check_field_nullable(db, dataset_model.DataSet, {field: getattr(db_dataset, field, None)}, field)
     for field in ['name', 'description']]

    check_object_exists(db, dataset_category_model.DataSetCategory,
                        {'id': db_dataset.category_id}, 'Category not found')
    check_object_exists(db, user_model.User, {'username': db_dataset.author_username}, 'User not found')

    db.add(db_dataset)
    db.commit()
    db.refresh(db_dataset)

    return db_dataset


@router.delete('/datasets/{dataset_id}', status_code=status.HTTP_204_NO_CONTENT)
async def delete_user(datasets_id: int, db: db_dependency):

    db_dataset = db.query(dataset_model.DataSet).filter(dataset_model.DataSet.id == datasets_id).first()
    if db_dataset is None:
        raise HTTPException(status_code=404, detail="Dataset not found")

    db.delete(db_dataset)
    db.commit()

    return {"message": f"Dataset with ID {datasets_id} has been deleted"}



```

#### File_router
```python
from fastapi import APIRouter, HTTPException, status
from typing_extensions import List
from src.python.models import file_model, dataset_model
from src.python.enviroment.dependency import db_dependency
from src.python.enviroment.exceptions import check_field_uniqueness, check_field_nullable, check_object_exists

router = APIRouter()


@router.post('/files', status_code=status.HTTP_201_CREATED, response_model=file_model.FileBase)
async def create_file(file: file_model.FileBase, db: db_dependency):
    [check_field_uniqueness(db, file_model.File, {field: getattr(file, field, None)}, field)
     for field in ['name']]

    [check_field_nullable(db, file_model.File, {field: getattr(file, field, None)}, field)
     for field in ['name', 'description', 'content']]

    check_object_exists(db,  dataset_model.DataSet, {'id': file.dataset_id}, 'DataSet not found')

    file = file_model.File(**file.dict())
    db.add(file)
    db.commit()
    db.refresh(file)

    return file


@router.get('/files/{file_id}', status_code=status.HTTP_200_OK, response_model=file_model.FileBaseWithId)
async def read_file(file_id: int, db: db_dependency):

    file = db.query(file_model.File).filter(file_model.File.id == file_id).first()
    if file is None:
        raise HTTPException(status_code=404, detail="File not found")

    return file


@router.get('/files', status_code=status.HTTP_200_OK, response_model=List[file_model.FileBaseWithId])
async def read_files(db: db_dependency):

    files = db.query(file_model.File).all()
    return files


@router.delete('/files/{file_id}', status_code=status.HTTP_204_NO_CONTENT)
async def delete_file(file_id: int, db: db_dependency):

    file = db.query(file_model.File).filter(file_model.File.id == file_id).first()
    if file is None:
        raise HTTPException(status_code=404, detail="File not found")

    db.delete(file)
    db.commit()

    return {"message": f"File with ID {file_id} has been deleted"}



```

### Файл запуску програми 

#### main
```python
from fastapi.responses import RedirectResponse
from fastapi import FastAPI
from src.python.routers import user_router, file_router, dataset_router, dataset_category_router
from src.python.enviroment.database import Base,  engine


app = FastAPI(title='Open data management system RESTful API')

app.include_router(user_router.router, tags=["Users"])
app.include_router(file_router.router, tags=["Files"])
app.include_router(dataset_router.router, tags=["Datasets"])
app.include_router(dataset_category_router.router, tags=["Dataset categories"])


Base.metadata.create_all(bind=engine)


@app.get("/", include_in_schema=False)
async def redirect_to_docs():
    return RedirectResponse("/docs")

```

### Інше

#### Exceptions
```python
from fastapi import HTTPException, status
from sqlalchemy.orm import Session, DeclarativeMeta
from typing_extensions import Type
from src.python.enviroment.database import Base


def check_field_uniqueness(db: Session, model: DeclarativeMeta, data: dict, field: str):
    field_value = data.get(field)

    if field_value is None:
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail=f"{field.capitalize()} is required")

    existing_entry = db.query(model).filter(getattr(model, field) == field_value).first()

    if existing_entry:
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail=f"{field.capitalize()} already registered")


def check_field_nullable(db: Session, model: DeclarativeMeta, data: dict, field: str):
    field_value = data.get(field)

    if field_value is None or field_value == '':
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail=f"{field.capitalize()} is empty")


def check_object_exists(db: Session, model: Type[Base], condition: dict, detail: str):
    existing_object = db.query(model).filter_by(**condition).first()

    if existing_object is None:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail=detail)



```
