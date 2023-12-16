from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session
from src.python.models import user_model, role_model
from src.python.enviroment.dependency import db_dependency
from typing import Union

router = APIRouter()


@router.post('/users', status_code=status.HTTP_201_CREATED, response_model=user_model.UserBase)
async def create_user(user: user_model.UserBase, db: db_dependency):
    for field in ['username', 'email', 'password']:
        check_field_uniqueness(db, user, field)

    if not db.query(role_model.Role).filter(role_model.Role.id == user.role_id).first():
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Role not found")

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


def check_field_uniqueness(db: Session, user: user_model.UserBase, field: str):

    existing_user = db.query(user_model.User).filter(
        getattr(user, field) == getattr(user_model.User, field)
    ).first()

    if existing_user:
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail=f"{field.capitalize()} already registered")
#
