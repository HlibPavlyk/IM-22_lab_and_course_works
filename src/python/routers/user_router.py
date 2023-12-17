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


