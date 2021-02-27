## RU
Данная папка обычно содержит, всё связанное с генерацией роутинга для приложения.
Главным правилом, для проектов любого масштаба является разделение инициализации роутера и
составления списока роутов.

Если проект разростается, я обычно начинают уже и делить routes.js на более удобный и компактный формат,
дабы следовать Open-Closed и недопускать разростания файлов.

## EN
This folder usually contains everything related to routing generation at application. The main rule here,
for any application size is separating router initialization and routes list construction.

If application gets bigger, I usually begin to separate routes.js in more convenient way to satisfy
Open-Close principle and avoid files-bloat.