from sqlalchemy import Boolean, Column, Integer, String, ForeignKey
from sqlalchemy.orm import relationship
from pydantic import BaseModel
from src.python.enviroment.database import Base


class User(Base):
    __tablename__ = 'users'

    id = Column(Integer, primary_key=True, index=True, autoincrement=True)
    username = Column(String(50), unique=True)
    firstname = Column(String(50))
    lastname = Column(String(50))
    email = Column(String(50), unique=True)
    password = Column(String(50), unique=True)
    role_id = Column(Integer, ForeignKey('roles.id'))

    # Визначення відношення до таблиці Role
    role = relationship("Role", back_populates="users")


class UserBase(BaseModel):
    username: str
    firstname: str
    lastname: str
    email: str
    password: str
    role_id: int


class UserBaseWithID(UserBase):
    id: int








