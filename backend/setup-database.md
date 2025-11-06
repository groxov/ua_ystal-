# Настройка базы данных PostgreSQL

## Шаг 1: Убедитесь, что PostgreSQL запущен

Проверьте, что служба PostgreSQL запущена:
- Откройте "Службы" (Services) в Windows
- Найдите "postgresql-x64-XX" (где XX - версия)
- Убедитесь, что статус "Выполняется" (Running)

## Шаг 2: Подключитесь к PostgreSQL

### Вариант A: Через psql (командная строка)

Откройте командную строку или PowerShell и выполните:

```bash
psql -U postgres
```

Введите пароль (по умолчанию в коде: `1234`)

### Вариант B: Через pgAdmin (графический интерфейс)

1. Откройте pgAdmin
2. Подключитесь к серверу PostgreSQL
3. Откройте Query Tool (Правой кнопкой на базе данных → Query Tool)

## Шаг 3: Выполните SQL скрипт

Скопируйте содержимое файла `BD` и выполните его в:
- psql (вставьте и нажмите Enter)
- pgAdmin Query Tool (вставьте и нажмите F5 или кнопку Execute)

## Шаг 4: Проверьте подключение

После выполнения скрипта проверьте:

```sql
-- Проверка схемы
SELECT schema_name FROM information_schema.schemata WHERE schema_name = 'resource';

-- Проверка таблиц
SELECT table_name FROM information_schema.tables 
WHERE table_schema = 'resource';

-- Проверка данных
SELECT * FROM resource.card;
```

## Шаг 5: Обновите настройки подключения (если нужно)

Если ваш пароль PostgreSQL отличается от `1234`, обновите файл `backend/index.js`:

```javascript
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'postgres',
    password: 'ВАШ_ПАРОЛЬ',  // Измените здесь
    port: 5432
});
```

## Быстрая проверка через командную строку

Если у вас установлен psql, можно выполнить скрипт напрямую:

```bash
psql -U postgres -d postgres -f BD
```

Введите пароль когда попросит.

