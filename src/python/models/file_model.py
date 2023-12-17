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

