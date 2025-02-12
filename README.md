# Лендинг 

## Описание

Лендинг, сверстанный по предоставленному макету.

## Технологии

Проект написан с использованием React, TypeScript, Vite, TailwindCSS. Для
создания формы использованаа библиотека react-hook-form. Проект был написан с
использованием среды Deno js (альтернатива Node js), поскольку Deno
предоставляет встроенную поддержку TypeScript, линтер и инструмент
форматирования. Проект можно запустить локально и при помощи Node, однако в этом
случае необходимо будет самостоятельно установить необходимые зависимости для
TypeScript, проверки и форматирования кода.

## Развертывание проекта

### Deno

Установка зависимостей

```terminal
deno install
```

Запуск локального сервера для разработки

```terminal
deno task dev
```

Сборка проекта

```terminal
deno task build
```

Проверка TypeScript в проекте (указываем только точку входа в приложение)

```terminal
deno check assets/js/main.tsx
```

Линтер

```terminal
deno lint
```

Форматирование

```
deno fmt
```

### Node

Установка зависимостей

```terminal
npm i
```

Запуск локального сервера для разработки

```terminal
npm run dev
```

Сборка проекта

```terminal
npm run build
```