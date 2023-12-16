# routers/user.py
from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session
from src.python.models import role_model
from src.python.enviroment.database import SessionLocal,  engine
from src.python.enviroment.dependency import db_dependency
from fastapi import Body

router = APIRouter()

@router.post("/roles", status_code=status.HTTP_201_CREATED)
async def create_role(role: role_model.RoleBase, db: db_dependency):
    db_role = role_model.Role(**role.dict())
    db.add(db_role)
    db.commit()
    db.refresh(db_role)
    return db_role

@router.get('/roles/{role_id}', status_code=status.HTTP_200_OK)
async def read_role(role_id: int, db: db_dependency):
    role = db.query(role_model.Role).filter(role_model.Role.id == role_id).first()
    if role is None:
        raise HTTPException(status_code=404, detail="Role not found")
    return role

