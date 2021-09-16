## Клиентская часть для музейного комлекса УГМК на Next.JS

## Файловая стуктура

components - содержит все компоненты
helpers - вспомогательные функции
lib - содержит файл api.js, через который происходит взаимодействие с Backend (запросы GraphQL)
locales - файлы с локациями
models - файлы с typescript типами (для компонентов, секций, state)
pages - файлы страниц с учётом routing
public - шрифты, картинки, favicon
redux - все связанное с redux (actions, reducers, store)
styles - стили проекта

- components - стили для components
- icons - иконки fontawesome
- pages - стили для pages

.env.example - пример конфига

## Как добавить иконку

В файл ./styles/icons/variables.scss добавить переменную с unicode иконки (он берется с сайта FA)
в файл ./styles/icons/icons.scss добавить класс для нужно иконки (он берется с сайта FA)
