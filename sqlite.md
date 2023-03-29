
# SQLite + Node.js

## SQLite
## Типы данных

- INTEGER (целое число)
- REAL (дробное число)
- TEXT (строка)
- BLOB (двоичные данные)
- NULL (отсутствие данных)

# Команды
```sql
-- Создание таблицы
CREATE TABLE IF NOT EXISTS user(id INTEGER PRIMARY KEY, login TEXT, password TEXT)

-- ДОБАВЛЕНИЕ
-- Внести данные в таблицу
INSERT INTO user(id, login, password) VALUES (1, 'Админ', 'Пароль')


-- ЧТЕНИЕ
-- Прочитать всю таблицу
SELECT * FROM user
-- Прочитать данные колонки (column)
SELECT login FROM user
-- Прочитать строку по фильтру (constraint)
SELECT password FROM user WHERE login = "Админ"

-- ИЗМЕНЕНИЕ
-- Изменить все строки 
UPDATE user SET login = 'Эмиль', password = "hello" 
-- Изменить строку по фильтру
UPDATE user SET login = 'Эмиль', password = "hello" WHERE login = 'Админ'


-- УДАЛЕНИЕ
-- Удаление всех строк
DELETE FROM user
-- Удаление определенной строки по фильтру
DELETE FROM user WHERE login = 'Админ'

-- Удалить таблицу
DROP TABLE IF EXISTS user()


-- МЕТАДАННЫЕ
-- Получить метаданные
PRAGMA table_info(user)

```