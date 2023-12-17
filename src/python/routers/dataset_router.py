from fastapi import APIRouter, HTTPException, status
from typing_extensions import List
from src.python.models import dataset_model, dataset_category_model, user_model
from src.python.enviroment.dependency import db_dependency
from src.python.enviroment.exceptions import check_field_uniqueness, check_field_nullable, check_object_exists

router = APIRouter()


@router.post('/datasets', status_code=status.HTTP_201_CREATED, response_model=dataset_model.DataSetBase)
async def create_dataset(dataset: dataset_model.DataSetBase, db: db_dependency):
    [check_field_uniqueness(db, dataset_model.DataSet, {field: getattr(dataset, field, None)}, field)
     for field in ['name']]

    [check_field_nullable(db, dataset_model.DataSet, {field: getattr(dataset, field, None)}, field)
     for field in ['name', 'description']]

    check_object_exists(db, dataset_category_model.DataSetCategory,
                        {'id': dataset.category_id}, 'Category not found')
    check_object_exists(db, user_model.User, {'username': dataset.author_username}, 'User not found')

    db_dataset = dataset_model.DataSet(**dataset.dict())
    db.add(db_dataset)
    db.commit()
    db.refresh(db_dataset)

    return db_dataset


@router.get('/datasets/{dataset_id}', status_code=status.HTTP_200_OK, response_model=dataset_model.DataSetBaseWithId)
async def read_dataset(dataset_id: int, db: db_dependency):

    db_dataset = db.query(dataset_model.DataSet).filter(dataset_model.DataSet.id == dataset_id).first()
    if db_dataset is None:
        raise HTTPException(status_code=404, detail="Dataset not found")

    return db_dataset


@router.get('/datasets', status_code=status.HTTP_200_OK, response_model=List[dataset_model.DataSetBaseWithId])
async def read_datasets(db: db_dependency):

    db_dataset = db.query(dataset_model.DataSet).all()
    return db_dataset


@router.put("/datasets/{dataset_id}", status_code=status.HTTP_200_OK, response_model=dataset_model.DataSetBase)
async def update_dataset(dataset_id: int, updated_dataset: dataset_model.DataSetBase, db: db_dependency):

    db_dataset = db.query(dataset_model.DataSet).filter(dataset_model.DataSet.id == dataset_id).first()
    if db_dataset is None:
        raise HTTPException(status_code=404, detail="Dataset not found")

    for field in ['category_id', 'author_username', 'name', 'description']:
        setattr(db_dataset, field, getattr(updated_dataset, field, None))

    [check_field_uniqueness(db, dataset_model.DataSet, {field: getattr(db_dataset, field, None)}, field)
     for field in ['name']]

    [check_field_nullable(db, dataset_model.DataSet, {field: getattr(db_dataset, field, None)}, field)
     for field in ['name', 'description']]

    check_object_exists(db, dataset_category_model.DataSetCategory,
                        {'id': db_dataset.category_id}, 'Category not found')
    check_object_exists(db, user_model.User, {'username': db_dataset.author_username}, 'User not found')

    db.add(db_dataset)
    db.commit()
    db.refresh(db_dataset)

    return db_dataset


@router.delete('/datasets/{dataset_id}', status_code=status.HTTP_204_NO_CONTENT)
async def delete_user(datasets_id: int, db: db_dependency):

    db_dataset = db.query(dataset_model.DataSet).filter(dataset_model.DataSet.id == datasets_id).first()
    if db_dataset is None:
        raise HTTPException(status_code=404, detail="Dataset not found")

    db.delete(db_dataset)
    db.commit()

    return {"message": f"Dataset with ID {datasets_id} has been deleted"}


