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
