from sqlalchemy import Boolean, Column, Integer, String, ForeignKey
from sqlalchemy.orm import relationship
from pydantic import BaseModel
from src.python.enviroment.database import Base


class Role(Base):
    __tablename__ = 'roles'

    id = Column(Integer, primary_key=True, index=True, autoincrement=True)
    name = Column(String(50), unique=True)
    description = Column(String(255), nullable=True)

    # Визначення відношення до таблиці User
    users = relationship("User", back_populates="role")


class RoleBase(BaseModel):
    name: str
    description: str
