from fastapi.responses import RedirectResponse
from fastapi import FastAPI
from src.python.routers import user_router, role_router
from src.python.enviroment.database import Base,  engine


app = FastAPI(title='Open data management system RESTful API')

app.include_router(user_router.router, tags=["Users"])
app.include_router(role_router.router, tags=["Roles"])


Base.metadata.create_all(bind=engine)


@app.get("/", include_in_schema=False)
async def redirect_to_docs():
    return RedirectResponse("/docs")

# class PostBase(BaseModel):
#     title: str
#     content: str
#     user_id: int
#
#
# class UserBase_AdminAccess(BaseModel):
#     username: str


# def get_db():
#     db = SessionLocal()
#     try:
#         yield db
#     finally:
#         db.close()
#
#
# db_dependency = Annotated[Session, Depends(get_db)]

# @app.post("/posts/", status_code=status.HTTP_201_CREATED)
# async def create_post(post:PostBase, db: db_dependency):
#     db_post = models.Post(**post.dict)
#     db.add(db_post)
#     db.commit()
#
#
# @app.post('/users/', status_code=status.HTTP_201_CREATED)
# async def create_user(user: UserBase_AdminAccess, db: db_dependency):
#     db_user = users_model.User(**user.dict())
#     db.add(db_user)
#     db.commit()
#
# @app.get('/users/{user_id}', status_code=status.HTTP_200_OK)
# async def read_user(user_id: int, db:db_dependency):
#     user = db.query(models.User).filter(models.User.id == user_id).first()
#     if user is  None:
#         raise HTTPException(status_code=404, detail="User not found")
#     return user
