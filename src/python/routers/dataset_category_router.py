from fastapi import APIRouter, HTTPException, status
from typing_extensions import List
from src.python.models import dataset_category_model
from src.python.enviroment.dependency import db_dependency
from src.python.enviroment.exceptions import check_field_uniqueness, check_field_nullable

router = APIRouter()


@router.post('/dataset_category', status_code=status.HTTP_201_CREATED,
             response_model=dataset_category_model.DataSetCategoryBase)
async def create_dataset_category(dataset_category: dataset_category_model.DataSetCategoryBase, db: db_dependency):
    [check_field_uniqueness(db, dataset_category_model.DataSetCategory,
                            {field: getattr(dataset_category, field, None)}, field)
     for field in ['name']]

    [check_field_nullable(db, dataset_category_model.DataSetCategory,
                          {field: getattr(dataset_category, field, None)}, field)
     for field in ['name', 'description']]

    db_dataset_category = dataset_category_model.DataSetCategory(**dataset_category.dict())
    db.add(db_dataset_category)
    db.commit()
    db.refresh(db_dataset_category)

    return db_dataset_category


@router.get('/dataset_category/{dataset_category_id}', status_code=status.HTTP_200_OK,
            response_model=dataset_category_model.DataSetCategoryBaseWithId)
async def read_dataset_category(dataset_category_id: int, db: db_dependency):

    db_dataset_category = (db.query(dataset_category_model.DataSetCategory).
                           filter(dataset_category_model.DataSetCategory.id == dataset_category_id).first())

    if db_dataset_category is None:
        raise HTTPException(status_code=404, detail="Dataset category not found")

    return db_dataset_category


@router.get('/dataset_categories', status_code=status.HTTP_200_OK,
            response_model=List[dataset_category_model.DataSetCategoryBaseWithId])
async def read_dataset_categories(db: db_dependency):

    dataset_categories = db.query(dataset_category_model.DataSetCategory).all()
    return dataset_categories
