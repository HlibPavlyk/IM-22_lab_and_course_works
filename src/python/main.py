from fastapi.responses import RedirectResponse
from fastapi import FastAPI
from src.python.routers import user_router, file_router, dataset_router, dataset_category_router
from src.python.enviroment.database import Base,  engine


app = FastAPI(title='Open data management system RESTful API')

app.include_router(user_router.router, tags=["Users"])
app.include_router(file_router.router, tags=["Files"])
app.include_router(dataset_router.router, tags=["Datasets"])
app.include_router(dataset_category_router.router, tags=["Dataset categories"])


Base.metadata.create_all(bind=engine)


@app.get("/", include_in_schema=False)
async def redirect_to_docs():
    return RedirectResponse("/docs")
