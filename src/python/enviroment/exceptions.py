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

