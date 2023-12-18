# Тестування працездатності системи (Swagger)

У цьому розділі продемонстроване повне тестування системи і взаємодії її між собою.


## Users

### Post

#### Успішне виконання
<p>
    <img src="./resources/user/user_created_success.jpg">
</p>

#### Username вже використаний раніше
<p>
    <img src="./resources/user/user_created_register_error_username.jpg">
</p>

#### Пошта вже використана раніше
<p>
    <img src="./resources/user/user_created_register_error_email.png">
</p>

#### Пароль вже використаний раніше
<p>
    <img src="./resources/user/user_created_register_error_password.png">
</p>

#### Поле username порожнє
<p>
    <img src="./resources/user/user_created_empty_error_username.png">
</p>

#### Поле і'мя порожнє
<p>
    <img src="./resources/user/user_created_empty_error_firstname.png">
</p>

#### Поле прізвища порожнє
<p>
    <img src="./resources/user/user_created_empty_error_lastname.png">
</p>

#### Поле пошти порожнє
<p>
    <img src="./resources/user/user_created_empty_error_email.png">
</p>

#### Поле паролю порожнє
<p>
    <img src="./resources/user/user_created_empty_error_password.png">
</p>

### Get all

#### Успішне виконання
<p>
    <img src="./resources/user/user_get_success.png">
</p>

### Get by id

#### Успішне виконання
<p>
    <img src="./resources/user/user_get_id_success.png">
</p>

#### Зверення до неіснуючого id
<p>
    <img src="./resources/user/user_get_id_success.png">
</p>

### Put

#### Успішне виконання
<p>
    <img src="./resources/user/user_put_success.png">
</p>

#### Зверення до неіснуючого id
<p>
    <img src="./resources/user/user_put_key_error.png">
</p>

#### Username вже використаний раніше
<p>
    <img src="./resources/user/user_put_register_error_username.png">
</p>

#### Пошта вже використана раніше
<p>
    <img src="./resources/user/user_put_register_error_email.png">
</p>

#### Пароль вже використаний раніше
<p>
    <img src="./resources/user/user_put_register_error_password.png">
</p>

#### Поле username порожнє
<p>
    <img src="./resources/user/user_put_empty_error_username.png">
</p>

#### Поле і'мя порожнє
<p>
    <img src="./resources/user/user_put_empty_error_firstname.png">
</p>

#### Поле прізвища порожнє
<p>
    <img src="./resources/user/user_put_empty_error_lastname.png">
</p>

#### Поле пошти порожнє
<p>
    <img src="./resources/user/user_put_empty_error_email.png">
</p>

#### Поле паролю порожнє
<p>
    <img src="./resources/user/user_put_empty_error_password.png">
</p>

### Delete

#### Успішне видалення
<p>
    <img src="./resources/user/user_delete_success.png">
</p>

#### Зверення до неіснуючого id
<p>
    <img src="./resources/user/user_delete_key_error.png">
</p>


## DataSet categories

### Post

#### Успішне виконання
<p>
    <img src="./resources/dataset_category/dataset_category_created_success.png">
</p>

#### І'мя категорії вже використане раніше
<p>
    <img src="./resources/dataset_category/dataset_category_register_error_name.png">
</p>

#### Поле і'мя категорії порожнє
<p>
    <img src="./resources/dataset_category/dataset_category_empty_error_name.png">
</p>

#### Поле опису категорії порожнє
<p>
    <img src="./resources/dataset_category/dataset_category_empty_error_description.png">
</p>

### Get all

#### Успішно вивелись всі категорії
<p>
    <img src="./resources/dataset_category/dataset_category_get_success.png">
</p>

### Get by id

#### Успішно вивелась категорія за id
<p>
    <img src="./resources/dataset_category/dataset_category_get_id_success.png">
</p>

#### Зверення до неіснуючого id
<p>
    <img src="./resources/dataset_category/dataset_category_get_id_key_error.png">
</p>

## Datasets

### Post

#### Успішно створився запис
<p>
    <img src="./resources/dataset/dataset_created_success.png">
</p>

#### Назва вже використана раніше
<p>
    <img src="./resources/dataset/dataset_created_register_error_name.png">
</p>

#### Поле назви порожнє
<p>
    <img src="./resources/dataset/dataset_created_empty_error_name.png">
</p>

#### Поле опису порожнє
<p>
    <img src="./resources/dataset/dataset_created_empty_error_description.png">
</p>

#### Зверення до неіснуючого id категорії
<p>
    <img src="./resources/dataset/dataset_created_key_category_error.png">
</p>

#### Зверення до неіснуючого username користувача
<p>
    <img src="./resources/dataset/dataset_created_key_user_error.png">
</p>

### Get all

#### Успішне виведення усіх наборів даних
<p>
    <img src="./resources/dataset/dataset_get_success.png">
</p>

### Get by id

#### Успішне виведення набору даних за id
<p>
    <img src="./resources/dataset/dataset_get_id_success.png">
</p>

#### Зверення до неіснуючого id набору даних
<p>
    <img src="./resources/dataset/dataset_get_id_key_error.png">
</p>

### Put

#### Успішне редагування набору даних
<p>
    <img src="./resources/dataset/dataset_put_success.png">
</p>

#### Назва вже використана раніше
<p>
    <img src="./resources/dataset/dataset_put_register_error_name.png">
</p>

#### Поле назви порожнє
<p>
    <img src="./resources/dataset/dataset_put_empty_error_name.png">
</p>

#### Поле опису порожнє
<p>
    <img src="./resources/dataset/dataset_put_empty_error_description.png">
</p>

#### Зверення до неіснуючого id категорії
<p>
    <img src="./resources/dataset/dataset_put_key_category_error.png">
</p>

#### Зверення до неіснуючого username користувача
<p>
    <img src="./resources/dataset/dataset_put_key_user_error.png">
</p>

#### Зверення до неіснуючого id набору даних
<p>
    <img src="./resources/dataset/dataset_put_key_error.png">
</p>

### Delete

#### Успішне видалення
<p>
    <img src="./resources/dataset/dataset_delete_success.png">
</p>

#### Зверення до неіснуючого id
<p>
    <img src="./resources/dataset/dataset_delete_key_error.png">
</p>

## Files

### Post

#### Успішно створився файл
<p>
    <img src="./resources/file/file_created_success.png">
</p>

#### Назва файлу вже використовувалась раніше
<p>
    <img src="./resources/file/file_created_register_error_name.png">
</p>

#### Поле назви файлу порожнє
<p>
    <img src="./resources/file/file_created_empty_error_name.png">
</p>

#### Поле опису файлу порожнє
<p>
    <img src="./resources/file/file_created_empty_error_description.png">
</p>

#### Поле вмісту файлу порожнє
<p>
    <img src="./resources/file/file_created_empty_error_content.png">
</p>

#### Зверення до неіснуючого id набору даних
<p>
    <img src="./resources/file/file_created_key_error_dataset.png">
</p>

### Get all

#### Успішне виведення усіх файлів
<p>
    <img src="./resources/file/file_get_success.png">
</p>

### Get by id

#### Успішне виведення файлу за id
<p>
    <img src="./resources/file/file_get_id_success.png">
</p>

#### Зверення до неіснуючого id файлу
<p>
    <img src="./resources/file/file_get_id_key_error.png">
</p>

### Delete

#### Успішне видалення
<p>
    <img src="./resources/file/file_delete_success.png">
</p>

#### Зверення до неіснуючого id
<p>
    <img src="./resources/file/file_delete_key_error.png">
</p>

## Relationship

У системі передбачене автоматчине видалення категорій та наборів даних, якщо вони не використовуються, 
тобто до них не підв'язані жодні дані. Нижче ми розглянемо цей приклад каскадного видалення.

### Get by id

#### Зверення до категорії за  id
<p>
    <img src="./resources/relationship/rel_get_category.png">
</p>

#### Зверення до набору даних за  id
<p>
    <img src="./resources/relationship/rel_get_dataset.png">
</p>

#### Зверення до файлу за  id
<p>
    <img src="./resources/relationship/rel_get_file.png">
</p>

### Delete

#### Видалення всіх файлів
<p>
    <img src="./resources/relationship/rel_delete_file.png">
</p>

### Get by id

#### Зверення до категорії за  id, щоб побачити результат
<p>
    <img src="./resources/relationship/rel_get_category_result.png">
</p>

#### Зверення до набору даних за  id, щоб побачити результат
<p>
    <img src="./resources/relationship/rel_get_dataset_result.png">
</p>

#### Зверення до файлу за  id, щоб побачити результат
<p>
    <img src="./resources/relationship/rel_get_file_result.png">
</p>

