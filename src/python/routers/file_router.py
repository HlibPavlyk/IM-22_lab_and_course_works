from fastapi import APIRouter, HTTPException, status
from typing_extensions import List
from src.python.models import file_model, dataset_model
from src.python.enviroment.dependency import db_dependency
from src.python.enviroment.exceptions import check_field_uniqueness, check_field_nullable, check_object_exists

router = APIRouter()


@router.post('/files', status_code=status.HTTP_201_CREATED, response_model=file_model.FileBase)
async def create_file(file: file_model.FileBase, db: db_dependency):
    [check_field_uniqueness(db, file_model.File, {field: getattr(file, field, None)}, field)
     for field in ['name']]

    [check_field_nullable(db, file_model.File, {field: getattr(file, field, None)}, field)
     for field in ['name', 'description', 'content']]

    check_object_exists(db,  dataset_model.DataSet, {'id': file.dataset_id}, 'DataSet not found')

    file = file_model.File(**file.dict())
    db.add(file)
    db.commit()
    db.refresh(file)

    return file


@router.get('/files/{file_id}', status_code=status.HTTP_200_OK, response_model=file_model.FileBaseWithId)
async def read_file(file_id: int, db: db_dependency):

    file = db.query(file_model.File).filter(file_model.File.id == file_id).first()
    if file is None:
        raise HTTPException(status_code=404, detail="File not found")

    return file


@router.get('/files', status_code=status.HTTP_200_OK, response_model=List[file_model.FileBaseWithId])
async def read_files(db: db_dependency):

    files = db.query(file_model.File).all()
    return files


@router.delete('/files/{file_id}', status_code=status.HTTP_204_NO_CONTENT)
async def delete_file(file_id: int, db: db_dependency):

    file = db.query(file_model.File).filter(file_model.File.id == file_id).first()
    if file is None:
        raise HTTPException(status_code=404, detail="File not found")

    db.delete(file)
    db.commit()

    return {"message": f"File with ID {file_id} has been deleted"}


