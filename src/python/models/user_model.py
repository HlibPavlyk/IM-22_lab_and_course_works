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
