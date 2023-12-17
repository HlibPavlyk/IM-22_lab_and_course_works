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
