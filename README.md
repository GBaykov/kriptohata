# Getting Started with Create React App

repo for internet-store kriptohata (jj Project)

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

TODO:
1.адаптивность главной страницы
1.1. адаптировать хедер - сделать бургер хедер
1.2. адаптировать блок "Каталог", чтоб при мобилке появлялся слайдер
1.3.адаптировать иные разделы в соответствии с дизайном
1.4. доработать, чтоб все элементы были интерактивными и что-то делали

2. переделать "card"
3. пределать\доделать страницы с товарами
   3.1. сделать адаптивными
   3.2. добавить пэгинацию
   3.3. решить вопрос, как будет оторбражаться в мобильной версии

4. создать компонент со страницей товара
   5.создать страницу корзины
5. создать Поп-апы
   6.1. регистрация, авторизация, заказать звонок
   6.2. оформление заказа, спасибо за покупку
   7.добавить страницу избранного
   8.добавить личный кабинет (для начала простой, чтоб можно было проверять работу с сервером)

ToDo РАЗРАБОТКА ЛОГИКИ 0. создание в глобал стейте необходимых сущностей, полей и тд. Налаживание получения всего с Сервера

1. авторизация, регистрация, изменение данных
   1.1. токены, глобал стейт, использование во всем проекте
2. обратный звонок (с отправкой сообщения на имейл)
3. получение карточек с сервера, сохранение информации в глабал стейте, использование в различных комконентах
4. отправка карточек в изрбанноме
   5.отправка карточек в корзину - предположительно localStorage
   6.логика оформления заказа
