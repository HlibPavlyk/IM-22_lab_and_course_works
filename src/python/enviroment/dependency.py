from fastapi import FastAPI, HTTPException, Depends, status
from typing import Annotated
from sqlalchemy.orm import Session
from src.python.enviroment.database import SessionLocal


def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


db_dependency = Annotated[Session, Depends(get_db)]