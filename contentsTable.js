const contTable = document.createElement('template');
let ct = document.getElementById("contentsTable");
const header = document.querySelector('header-hero');
let section = document.querySelectorAll('section'), i;
const presentaionJS = document.querySelector('present-js');
const contentsButt = document.querySelector('cont-button');
let flag = 1;

contTable.innerHTML = `
    <style>
    * {
        margin: 0;
        padding: 0;
    }
    #closeOff {
        display: flex;
        justify-content: end;
    }
    #closeOff img {
        width: 30px;
        margin-right: 5%;
    }
    #closeOff img:hover {
        cursor: pointer;
        opacity: 0.7;
    }
    .contentLine {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        
    }
    .contentLine p {
        width: 80%;
        margin: 0 2%;
        paddding-top: 5px;
        font-weight: 400;
    }
    .contentLine img {
        margin: 0 2%;
        width: 30px;
        height: 30px;
        transform: rotate(-90deg);
    }
    .contentLine img:hover {
        cursor: pointer;
        opacity: 0.7;
    }
    
    ul li {
        list-style-type: none;
        padding-left: 2%;
    }
    li a {
        text-decoration: none;
    }
    h1 {
        color: #7005FC;
        margin: 2%;
        font-size: 3em;
    }

    
    
        .blocks {
                /*border: solid blue;*/
            }
            #col1 {
                grid-area: 1 / 1 / 30 /1;
            }
            #col2 {
                grid-area: 1 / 2 / 30 /2;
            }
            #col3 {
                grid-area: 1 / 3 / 30 /3;
            }
            #col4 {
                grid-area: 1 / 4 / 30 /4;
            }
            #col5 {
                grid-area: 1 / 5 / 30 /5;
            }
            #col6 {
                grid-area: 1 / 6 / 30 /6;
            }
            #col7 {
                grid-area: 1 / 7 / 30 /7;
            }
            #col8 {
                grid-area: 1 / 8 / 30 /8;
            }
            #col9 {
                grid-area: 1 / 9 / 30 /9;
            }
            #col10 {
                grid-area: 1 / 10 / 30 /10;
            }
            #col11 {
                grid-area: 1 / 11 / 30 /11;
            }
            #col12 {
                grid-area: 1 / 12 / 30 /12;
            }
            #col13 {
                grid-area: 1 / 13 / 30 /13;
            }
            #col14 {
                grid-area: 1 / 14 / 30 /14;
            }
            #col15 {
                grid-area: 1 / 15 / 30 /15;
            }

            #col16 {
                grid-area: 1 / 16 / 30 /16;
            }

            #contentsField {
                display: grid;
                grid-template: fit-content repeat(18, 1fr) / repeat(16, 1fr);
                grid-column-gap: 10px;
                grid-row-gap: 3px;   
                grid-auto-rows: fit-content;
                margin-bottom: 5%;          
            }

            .contentLine {
                grid-column: 2 / 16;
            }
            .CTTitles:hover {
                cursor: pointer;
            }
            .contentLineRoll {
                grid-column: 3 / 14;
            }
            .contentLineRoll li, h3 {
                margin: .5%;
            }
    </style>
    
    <div id = "contentsField">
    <!--Service cols and rows
    <div class = "blocks" id = "col1">1</div>
    <div class = "blocks" id = "col2">2</div>
    <div class = "blocks" id = "col3">3</div>
    <div class = "blocks" id = "col4">4</div>
    <div class = "blocks" id = "col5">5</div>
    <div class = "blocks" id = "col6">6</div>
    <div class = "blocks" id = "col7">7</div>
    <div class = "blocks" id = "col8">8</div>
    <div class = "blocks" id = "col9">9</div>
    <div class = "blocks" id = "col10">10</div>
    <div class = "blocks" id = "col11">11</div>
    <div class = "blocks" id = "col12">12</div>
    <div class = "blocks" id = "col13">13</div>
    <div class = "blocks" id = "col14">14</div>
    <div class = "blocks" id = "col15">15</div>
    <div class = "blocks" id = "col16">16</div>-->

        <div id = "closeOff" >
            <style>
                #closeOff {
                    grid-area: 1 / 1 / 1 / 17;
                }
                h1 {
                    grid-area: 2 / 2 / 2 / 16;
                }
            </style>
                
            <img src = "img/closeOff.png" alt = "close">
        </div>
        <h1>СОДЕРЖАНИЕ</h1>

        <!-- ***********************************************************************************************************-->
            <div class = "contentLine" id = "contLine1">
                <style>

                #contLine1 {
                    grid-row: 3 / 3;
                }
                
                #CLRollOut1 {
                    display: none;
                    grid-row: 4 / 4;
                }
    
                </style>
                <p class = "CTTitles" id = "rollOutTitle"> ОСНОВЫ WEB РАЗРАБОТКИ </p>
                <img src ="img/expand-button.png" alt = "expand" id = "rollOut" class = "expandButton">
            </div>
            <div class = "contentLineRoll" id = "CLRollOut1">
                <ul>
                    <h3>Семантический HTML</h3>
                    <li><a href="#">Введение в семантический HTML</a></li>
                    <li><a href="#">Элементы Header и Nav</a></li>
                    <li><a href="#">Элементы Main и Footer</a></li>
                    <li><a href="#">Элементы Article и Section</a></li>
                    <li><a href="#">Элементы Figure и Figcaption</a></li>
                    <li><a href="#">Элементы Audio и Attributes</a></li>
                    <li><a href="#">Элементы Video и Embed</a></li>
                    <h3>Селекторы и правила CSS</h3>
                    <li><a href="#">Анатомия CSS</a></li>
                    <li><a href="#">Встроенные стили, тэг inline</a></li>
                    <li><a href="#">Привязка внешнего файла стилей</a></li>
                    <li><a href="#">Типовые селекторы</a></li>
                    <li><a href="#">Универсальный селектор</a></li>
                    <li><a href="#">Класс</a></li>
                    <li><a href="#">Множественные классы</a></li>
                    <li><a href="#">Идентификатор ID</a></li>
                    <li><a href="#">Атрибут</a></li>
                    <li><a href="#">Псевдо классы</a></li>
                    <li><a href="#">Классы и идентификаторы</a></li>
                    <li><a href="#">Специфика</a></li>
                    <li><a href="#">Сцепление</a></li>
                    <li><a href="#">Селектор дочерних элементов</a></li>
                    <li><a href="#">Сцепление и специфика</a></li>
                    <li><a href="#">Множественные селекторы</a></li>
                    <h3>Правила визуализации текста</h3>
                    <li><a href="#">Свойство font-family</a></li>
                    <li><a href="#">Свойство font-size</a></li>
                    <li><a href="#">Свойство font-weight</a></li>
                    <li><a href="#">Свойство text-align</a></li>
                    <li><a href="#">Свойства Color и Background Color</a></li>
                    <li><a href="#">Свойство прозрачности Opacity</a></li>
                    <li><a href="#">Свойство фоновой картинки Background Image</a></li>
                    <li><a href="#">Свойство приоритета !important</a></li>
                </ul>
            </div>

        <!-- ***********************************************************************************************************-->
            <div class = "contentLine" id = "contLine2">
                <style>
                    #contLine2 {
                        grid-row: 5 / 5;
                        
                    }
                    #CLRollOut2 {
                        display: none;
                        grid-row: 6 / 6;  
                    }
                </style>
                <p class = "CTTitles" id = "rollOutTitle2"> ВЕРСТКА СТРАНИЦ С ПОМОЩЬЮ CSS </p>
                <img src ="img/expand-button.png" alt = "expand" id = "rollOut2" class = "expandButton">
            </div>
            <div class = "contentLineRoll" id = "CLRollOut2">
                <ul>
                    <h3>Бокс модель</h3>
                    <li><a href="#">Высота и ширина</a></li>
                    <li><a href="#">Границы</a></li>
                    <li><a href="#">Внутреннее пространство padding</a></li>
                    <li><a href="#">Внешние поля margin</a></li>
                    <li><a href="#">Свойство автоматического определения полей auto</a></li>
                    <li><a href="#">Нахлест полей друг на друга</a></li>
                    <li><a href="#">Максимальная и минимальная длина / ширина</a></li>
                    <li><a href="#">Переток элементов, свойство overflow</a></li>
                    <li><a href="#">Сброс браузера до значений по умолчанию</a></li>
                    <li><a href="#">Видимость элементов</a></li>
                    <h3>Изменение бокс модели</h3>
                    <li><a href="#">Зачем менять бокс модель?</a></li>
                    <li><a href="#">Свойство content-box</a></li>
                    <li><a href="#">Свойство border-box</a></li>
                    <h3>Свойство display и расположение элементов</h3>
                    <li><a href="#">Расположение элементов</a></li>
                    <li><a href="#">Поток html</a></li>
                    <li><a href="#">Свойство position</a></li>
                    <li><a href="#">Относительное расположение relative</a></li>
                    <li><a href="#">Абсолютное расположение absolute</a></li>
                    <li><a href="#">Фиксированное расположение fixed</a></li>
                    <li><a href="#">"Липкое" расположение sticky</a></li>
                    <li><a href="#">Z-index</a></li>
                    <li><a href="#">Свойство display: inline</a></li>
                    <li><a href="#">Свойство display: block</a></li>
                    <li><a href="#">Свойство display: inline-block</a></li>
                    <li><a href="#">Свойство float</a></li>
                    <li><a href="#">Свойство clear</a></li>
                </ul>
            </div>

        <!-- ***********************************************************************************************************-->
            <div class = "contentLine" id = "contLine3">
                <style>
                    #contLine3 {
                        grid-row: 7 / 7;
                        
                    }
                    #CLRollOut3 {
                        display: none;
                        grid-row: 8 / 8;  
                    }
                </style>
                <p class = "CTTitles" id = "rollOutTitle3"> АДАПТИВНЫЙ ДИЗАЙН СТРАНИЦ </p>
                <img src ="img/expand-button.png" alt = "expand" id = "rollOut3" class = "expandButton">
            </div>
            <div class = "contentLineRoll" id = "CLRollOut3">
                <ul>
                    <h3>Размерность элементов</h3>
                    <li><a href="#">Относительные единицы измерения</a></li>
                    <li><a href="#">Em</a></li>
                    <li><a href="#">Rem</a></li>
                    <li><a href="#">Проценты: высота и ширина</a></li>
                    <li><a href="#">Проценты: padding и margin</a></li>
                    <li><a href="#">Ширина: минимум и максимум</a></li>
                    <li><a href="#">Высота: минимум и максимум</a></li>
                    <li><a href="#">Масштабирование картинок и видео</a></li>
                    <li><a href="#">Масштабирование фоновых картинок</a></li>
                    <h3>Медиа запросы</h3>
                    <li><a href="#">Адаптивный дизайн</a></li>
                    <li><a href="#">Медиа запросы</a></li>
                    <li><a href="#">Диапазон</a></li>
                    <li><a href="#">Точки на дюйм (DPI)</a></li>
                    <li><a href="#">Оператор And</a></li>
                    <li><a href="#">Список, разделяемый запятой</a></li>
                    <li><a href="#">Точки установки медиа запросов</a></li>
                    <h3>Верстка с Flex</h3>
                    <li><a href="#">Что такое Flexbox?</a></li>
                    <li><a href="#">Свойство display: flex</a></li>
                    <li><a href="#">Свойство inline-flex</a></li>
                    <li><a href="#">Свойство justify-content</a></li>
                    <li><a href="#">Свойство flex-grow</a></li>
                    <li><a href="#">Свойство flex-shrink</a></li>
                    <li><a href="#">Свойство flex-basis</a></li>
                    <li><a href="#">Свойство flex</a></li>
                    <li><a href="#">Свойство flex-wrap</a></li>
                    <li><a href="#">Свойство align-content</a></li>
                    <li><a href="#">Свойство flex-direction</a></li>
                    <li><a href="#">Свойство flex-flow</a></li>
                    <li><a href="#">Вложенные flex-boxы</a></li>
                    <h3>Сетка CSS</h3>
                    <li><a href="#">Сетка CSS: Введение</a></li>
                    <li><a href="#">Строение Сетки</a></li>
                    <li><a href="#">Столбцы Сетки</a></li>
                    <li><a href="#">Строки Сетки</a></li>
                    <li><a href="#">Адаптивные зазоры</a></li>
                    <li><a href="#">Адаптивная сетка</a></li>
                    <li><a href="#">Буферное пространство</a></li>
                    <li><a href="#">Активное буферное пространство</a></li>
                    <li><a href="#">Пассивное буферное пространство</a></li>
                    <li><a href="#">Создаем сетку</a></li>
                    <li><a href="#">Создаем столбцы</a></li>
                    <li><a href="#">Создаем строки</a></li>
                    <li><a href="#">Свойство grid-template</a></li>
                    <li><a href="#">Единица измерения fr</a></li>
                    <li><a href="#">Функция Repeat()</a></li>
                    <li><a href="#">Функция minmax()</a></li>
                    <li><a href="#">Свойство grid-gap</a></li>
                    <li><a href="#">Элементы сетки</a></li>
                    <li><a href="#">Элементы на несколько строк</a></li>
                    <li><a href="#">Свойство grid-row</a></li>
                    <li><a href="#">Свойство grid-column</a></li>
                    <li><a href="#">Свойство grid-area</a></li>
                    <h3>Сетка CSS: Продвинутый уровень</h3>
                    <li><a href="#">Сетка CSS Продвинутый уровень: Введение</a></li>
                    <li><a href="#">Свойство grid-template-areas</a></li>
                    <li><a href="#">Наложение элементов</a></li>
                    <li><a href="#">Свойство justify-items</a></li>
                    <li><a href="#">Свойство justify-content</a></li>
                    <li><a href="#">Свойство align-items</a></li>
                    <li><a href="#">Свойство align-content</a></li>
                    <li><a href="#">Свойства justify-self и align-self</a></li>
                    <li><a href="#">Ручное и автоматическое определение параметров сетки</a></li>
                    <li><a href="#">Свойства grid-auto-rows и grid-auto-columns</a></li>
                    <li><a href="#">Свойство grid-auto-flow</a></li>
                </ul>
            </div>

        <!-- ***********************************************************************************************************-->
            <div class = "contentLine" id = "contLine4">
                <style>
                    #contLine4 {
                        grid-row: 9 / 9;
                        
                    }
                    #CLRollOut4 {
                        display: none;
                        grid-row: 10 / 10;  
                    }
                </style>
                <p class = "CTTitles" id = "rollOutTitle4"> СИНТАКИС JAVASCRIPT, ЧАСТЬ I </p>
                <img src ="img/expand-button.png" alt = "expand" id = "rollOut4" class = "expandButton">
            </div>
            <div class = "contentLineRoll" id = "CLRollOut4">
                <ul>
                    <h3>Введение в JavaScript</h3>
                    <li><a href="#">Что такое JavaScript?</a></li>
                    <li><a href="#">Ключевое слово console</a></li>
                    <li><a href="#">Коментарии</a></li>
                    <li><a href="#">Типы данных</a></li>
                    <li><a href="#">Арифметические операторы</a></li>
                    <li><a href="#">Сцепление строк</a></li>
                    <li><a href="#">Свойства</a></li>
                    <li><a href="#">Методы</a></li>
                    <li><a href="#">Встроенные объекты</a></li>
                    <h3>Переменные</h3>
                    <li><a href="#">Переменные</a></li>
                    <li><a href="#">Переменная var</a></li>
                    <li><a href="#">Переменная let</a></li>
                    <li><a href="#">Переменная const</a></li>
                    <li><a href="#">Математические операторы</a></li>
                    <li><a href="#">Повышающие и понижающие операторы</a></li>
                    <li><a href="#">Сцепление строк при помощи переменных</a></li>
                    <li><a href="#">Вставка переменных в строку</a></li>
                    <li><a href="#">Оператор typeof</a></li>
                    <h3>Условные выражения</h3>
                    <li><a href="#">Что такое условные выражения?</a></li>
                    <li><a href="#">Выражение if</a></li>
                    <li><a href="#">Выражение else</a></li>
                    <li><a href="#">Операторы сравнения</a></li>
                    <li><a href="#">Логические операторы</a></li>
                    <li><a href="#">Булевы выражения true и false</a></li>
                    <li><a href="#">Тернарный оператор</a></li>
                    <li><a href="#">Выражение else if</a></li>
                    <li><a href="#">Ключевое слово switch</a></li>
                    <h3>Функции</h3>
                    <li><a href="#">Что такое функция?</a></li>
                    <li><a href="#">Объявление фунции</a></li>
                    <li><a href="#">Вызов функции</a></li>
                    <li><a href="#">Параметры и аргументы</a></li>
                    <li><a href="#">Параметры по умолчанию</a></li>
                    <li><a href="#">Ключевое слово return</a></li>
                    <li><a href="#">Вспомогательные функции</a></li>
                    <li><a href="#">Функциональные выражения</a></li>
                    <li><a href="#">Стрелочные функции</a></li>
                    <li><a href="#">Сжатая запись стрелочных функций</a></li>
                    <h3>Область переменной</h3>
                    <li><a href="#">Область</a></li>
                    <li><a href="#">Блок и область</a></li>
                    <li><a href="#">Глобальная область</a></li>
                    <li><a href="#">Блочная область</a></li>
                    <li><a href="#">Загрязнение области</a></li>
                    <li><a href="#">Лучшие практики</a></li>
                </ul>
            </div>

        <!-- ***********************************************************************************************************-->
            <div class = "contentLine" id = "contLine5">
                <style>
                    #contLine5 {
                        grid-row: 11 / 11;
                        
                    }
                    #CLRollOut5 {
                        display: none;
                        grid-row: 12 / 12;  
                    }
                </style>
                <p class = "CTTitles" id = "rollOutTitle5"> СИНТАКИС JAVASCRIPT, ЧАСТЬ II </p>
                <img src ="img/expand-button.png" alt = "expand" id = "rollOut5" class = "expandButton">
            </div>
            <div class = "contentLineRoll" id = "CLRollOut5">
                <ul>
                    <h3>Массивы</h3>
                    <li><a href="#">Массивы</a></li>
                    <li><a href="#">Создаем массив</a></li>
                    <li><a href="#">Доступ к элементам массива</a></li>
                    <li><a href="#">Изменяем элементы массива</a></li>
                    <li><a href="#">Массивы через let и const</a></li>
                    <li><a href="#">Свойство .length</a></li>
                    <li><a href="#">Метод .push()</a></li>
                    <li><a href="#">Метод .pop()</a></li>
                    <li><a href="#">Еще методы работы с массивом</a></li>
                    <li><a href="#">Массивы и функции</a></li>
                    <li><a href="#">Вложенные массивы</a></li>
                    <h3>Петли</h3> 
                    <li><a href="#">Петли</a></li>
                    <li><a href="#">Петля for</a></li>
                    <li><a href="#">Итерация по петле в обратную сторону</a></li>
                    <li><a href="#">Итерация по массиву</a></li>
                    <li><a href="#">Вложенные петли</a></li>
                    <li><a href="#">Петля while</a></li>
                    <li><a href="#">Петля do...while</a></li>
                    <li><a href="#">Петля for...of</a></li>
                    <h3>Объекты</h3>
                    <li><a href="#">Введение в объекты</a></li>
                    <li><a href="#">Создаем объекты</a></li>
                    <li><a href="#">Доступ к свойствам объекта через точку</a></li>
                    <li><a href="#">Доступ к свойствам объекта через скобки</a></li>
                    <li><a href="#">Назначаем свойства</a></li>
                    <li><a href="#">Методы</a></li>
                    <li><a href="#">Вложенные объекты</a></li>
                    <li><a href="#">Передача по ссылке</a></li>
                    <h3>Объекты. Продвинутый уровень</h3>
                    <li><a href="#">Ключевое слово this</a></li>
                    <li><a href="#">Стрелочные функции и this</a></li>
                    <li><a href="#">Защита от изменений</a></li>
                    <li><a href="#">Метод Getter</a></li>
                    <li><a href="#">Метод Setter</a></li>
                    <li><a href="#">Функции производители</a></li>
                    <li><a href="#">Короткая запись назначения свойств объекту</a></li>
                    <li><a href="#">Деструктурное назначение свойств</a></li>
                    <li><a href="#">Встроенные методы</a></li>
                    <h3>Итераторы</h3>
                    <li><a href="#">Функции высшего порядка</a></li>
                    <li><a href="#">Функции как данные</a></li>
                    <li><a href="#">Функции как параметры</a></li>
                    <li><a href="#">Введение в итераторы</a></li>
                    <li><a href="#">Метод .forEach()</a></li>
                    <li><a href="#">Метод .map()</a></li>
                    <li><a href="#">Метод .filter()</a></li>
                    <li><a href="#">Метод .findIndex()</a></li>
                    <li><a href="#">Метод .reduce()</a></li>
                    <li><a href="#">Выбираем правильный итератор</a></li>
                </ul>
            </div>

        <!-- ***********************************************************************************************************-->
            <div class = "contentLine" id = "contLine6">
                <style>
                    #contLine6 {
                        grid-row: 13 / 13;
                        
                    }
                    #CLRollOut6 {
                        display: none;
                        grid-row: 14 / 14;  
                    }
                </style>
                <p class = "CTTitles" id = "rollOutTitle6"> СИНТАКИС JAVASCRIPT, ЧАСТЬ III </p>
                <img src ="img/expand-button.png" alt = "expand" id = "rollOut6" class = "expandButton">
            </div>
            <div class = "contentLineRoll" id = "CLRollOut6">
                <ul>
                    <h3>Классы</h3>
                    <li><a href="#">Конструктор</a></li>
                    <li><a href="#">Экземпляр класса</a></li>
                    <li><a href="#">Методы</a></li>
                    <li><a href="#">Вызов методов</a></li>
                    <li><a href="#">Наследственность I</a></li>
                    <li><a href="#">Наследственность II</a></li>
                    <li><a href="#">Наследственность III</a></li>
                    <li><a href="#">Наследственность IV</a></li>
                    <li><a href="#">Наследственность V</a></li>
                    <li><a href="#">Статичные методы</a></li>
                    <h3>Исправление ошибок</h3>
                    <li><a href="#">Введение</a></li>
                    <li><a href="#">Ошибки в runtime</a></li>
                    <li><a href="#">Создаем ошибку</a></li>
                    <li><a href="#">Ключевое слово throw</a></li>
                    <li><a href="#">Выражение try...catch</a></li>
                    <li><a href="#">Дебаг с try...catch</a></li>
                </ul>
            </div>

        <!-- ***********************************************************************************************************-->
            <div class = "contentLine" id = "contLine7">
                <style>
                    #contLine7 {
                        grid-row: 15 / 15;
                        
                    }
                    #CLRollOut7 {
                        display: none;
                        grid-row: 16 / 16;  
                    }
                </style>
                <p class = "CTTitles" id = "rollOutTitle7"> СОЗДАНИЕ ИНТЕРАКТИВНЫХ САЙТОВ </p>
                <img src ="img/expand-button.png" alt = "expand" id = "rollOut7" class = "expandButton">
            </div>
            <div class = "contentLineRoll" id = "CLRollOut7">
                <ul>
                    <h3>Интерактивные сайты с JavaScript</h3>
                    <li><a href="#">JavaScript и HTML</a></li>
                    <li><a href="#">Тэг script</a></li>
                    <li><a href="#">Атрибут src</a></li>
                    <li><a href="#">Как загружаются скрипты</a></li>
                    <li><a href="#">Атрибут defer</a></li>
                    <li><a href="#">Атрибут async</a></li>
                    <h3>JS и DOM</h3>
                    <li><a href="#">Что такое DOM?</a></li>
                    <li><a href="#">Взаимосвязь узлов в DOM</a></li>
                    <li><a href="#">Узлы и элементы в DOM</a></li>
                    <li><a href="#">Атрибуты элементов DOM</a></li>
                    <li><a href="#">Ключевое слово document</a></li>
                    <li><a href="#">Изменяем элемент</a></li>
                    <li><a href="#">Выбораем и измененяем элементы</a></li>
                    <li><a href="#">Меняем стиль элемента</a></li>
                    <li><a href="#">Создаем и вставляем элементы</a></li>
                    <li><a href="#">Удаляем элемент</a></li>
                    <li><a href="#">Интерактив с атрибутом onlclick</a></li>
                    <li><a href="#">Свойство .firstChild</a></li>
                    <h3>События DOM с JS</h3>
                    <li><a href="#">Что такое Event?</a></li>
                    <li><a href="#">Наступление события</a></li>
                    <li><a href="#">Обработчик событий</a></li>
                    <li><a href="#">Добавление обработчика событий</a></li>
                    <li><a href="#">Типы событий</a></li>
                    <li><a href="#">События мыши</a></li>
                    <li><a href="#">События клавиатуры</a></li>
                    <h3>Формы HTML</h3>
                    <li><a href="#">Введение</a></li>
                    <li><a href="#">Зачем проверять формы?</a></li>
                    <li><a href="#">Регулярные выражения</a></li>
                    <li><a href="#">Проверка с клиентской стороны: HTML</a></li>
                    <li><a href="#">Проверка с клиентской стороны: JavaScript</a></li>
                    <li><a href="#">Проверка со стороны сервера</a></li>
                    <h3>Формы HTML 2</h3>
                    <li><a href="#">Введение</a></li>
                    <li><a href="#">Как работает форма?</a></li>
                    <li><a href="#">Элемент input с атрибутом "text"</a></li>
                    <li><a href="#">Добавляем элемент "label"</a></li>
                    <li><a href="#">Вводим пароль, тип "password"</a></li>
                    <li><a href="#">Вводим числа, тип "number"</a></li>
                    <li><a href="#">Минимальные и максимальные значения с типом "range"</a></li>
                    <li><a href="#">Ставим галки, тип "checkbox"</a></li>
                    <li><a href="#">Радиокнопка</a></li>
                    <li><a href="#">Выпадающий список</a></li>
                    <li><a href="#">Атрибут "datalist"</a></li>
                    <li><a href="#">Поле ввода текста "textarea"</a></li>
                    <li><a href="#">Отправление формы</a></li>
                    <h3>Проверка форм HTML</h3>
                    <li><a href="#">Введение</a></li>
                    <li><a href="#">Обязательные к заполнению поля</a></li>
                    <li><a href="#">Устанавливаем минимум и максимум</a></li>
                    <li><a href="#">Проверяем длину текста</a></li>
                    <li><a href="#">Сопоставление с образцом</a></li>
                </ul>
            </div>

        <!-- ***********************************************************************************************************-->
            <div class = "contentLine" id = "contLine8">
                <style>
                    #contLine8 {
                        grid-row: 17 / 17;
                    }
                    #CLRollOut8 {
                        display: none;
                        grid-row: 18 / 18;  
                    }
                </style>
                <p class = "CTTitles" id = "rollOutTitle8"> CSS ПЛАВНЫЕ ПЕРЕХОДЫ И АНИМАЦИЯ </p>
                <img src ="img/expand-button.png" alt = "expand" id = "rollOut8" class = "expandButton">
            </div>
            <div class = "contentLineRoll" id = "CLRollOut8">
                <ul>
                    <h3>Введение в переходы и анимацию</h3>
                    <li><a href="#">Переходы CSS</a></li>
                    <li><a href="#">Продолжительность</a></li>
                    <li><a href="#">Функция тайминга</a></li>
                    <li><a href="#">Задержка</a></li>
                    <li><a href="#">Короткая запись</a></li>
                    <li><a href="#">Комбинирование</a></li>
                    <li><a href="#">Короткая запись всех свойств "All"</a></li>
                </ul>
            </div>

        <!-- ***********************************************************************************************************-->
            <div class = "contentLine" id = "contLine9">
                <style>
                    #contLine9 {
                        grid-row: 19 / 19;
                        
                    }
                    #CLRollOut9 {
                        display: none;
                        grid-row: 20 / 20;  
                    }
                </style>
                <p class = "CTTitles" id = "rollOutTitle9"> КОМАНДНАЯ СТРОКА GIT, GitHub </p>
                <img src ="img/expand-button.png" alt = "expand" id = "rollOut9" class = "expandButton">
            </div>
            <div class = "contentLineRoll" id = "CLRollOut9">
                <ul>
                    <h3>Навигация</h3>
                    <li><a href="#">Введение</a></li>
                    <li><a href="#">Файловая система</a></li>
                    <li><a href="#">Команда ls</a></li>
                    <li><a href="#">Команда pwd</a></li>
                    <li><a href="#">Команда cd 1 уровня</a></li>
                    <li><a href="#">Команда cd 2 уровня</a></li>
                    <li><a href="#">Команда mkdir</a></li>
                    <li><a href="#">Команда touch</a></li>
                    <li><a href="#">Вспомогательные команды</a></li>
                    <li><a href="#">Список всех команд</a></li>
                    <h3>Процесс работы с Git</h3>
                    <li><a href="#">Hello Git</a></li>
                    <li><a href="#">Команда init</a></li>
                    <li><a href="#">Работаем с git</a></li>
                    <li><a href="#">Команда git status</a></li>
                    <li><a href="#">Команда git add</a></li>
                    <li><a href="#">Команда git diff</a></li>
                    <li><a href="#">Команда git commit</a></li>
                    <li><a href="#">Команда git log</a></li>
                    <li><a href="#">Обзор всех команд git</a></li>
                    <h3>Введение в GitHub</h3>
                    <li><a href="#">Что такое GitHub?</a></li>
                </ul>
            </div>

        
        <!-- ***********************************************************************************************************-->
            <div class = "contentLine" id = "contLine10">
                <style>
                    #contLine10 {
                        grid-row: 21 / 21;
                        
                    }
                    #CLRollOut10 {
                        display: none;
                        grid-row: 22 / 22;  
                    }
                </style>
                <p class = "CTTitles" id = "rollOutTitle10"> АСИНХРОННЫЙ JAVASCRIPT И ЗАПРОСЫ HTTP </p>
                <img src ="img/expand-button.png" alt = "expand" id = "rollOut10" class = "expandButton">
            </div>
            <div  class = "contentLineRoll" id = "CLRollOut10">
                <ul>
                    <h3>Асинхронный JavaScript и запросы HTTP</h3>
                    <li><a href="#">Введение</a></li>
                    <h3>JavaScript промисы</h3>
                    <li><a href="#">Что такое промис?</a></li>
                    <li><a href="#">Создаем промис объект</a></li>
                    <li><a href="#">Функция setTimeout()</a></li>
                    <li><a href="#">Используем промисы</a></li>
                    <li><a href="#">Рабочие и нерабочие функции обратного вызова</a></li>
                    <li><a href="#">Используем функцию catch() с промисами</a></li>
                    <li><a href="#">Сцепляем множественные промисы</a></li>
                    <li><a href="#">Избегаем обычные ошибки</a></li>
                    <li><a href="#">Используем промис .all()</a></li>
                    <h3>Async Await</h3>
                    li><a href="#">Введение</a></li>
                    <li><a href="#">Ключевое слово async</a></li>
                    <li><a href="#">Оператор await</a></li>
                    <li><a href="#">Функции с async</a></li>
                    <li><a href="#">Работаем с зависимыми промисами</a></li>
                    <li><a href="#">Работаем с ошибками</a></li>
                    <li><a href="#">Работаем с независимыми промисами</a></li>
                    <li><a href="#">Запуск await с promise.all()</a></li>
                    <h3>Запросы HTTP</h3>
                    <li><a href="#">Что такое JSON?</a></li>
                    <li><a href="#">Работаем с JSON в JavaScript</a></li>
                    <li><a href="#">Введение в запросы</a></li>
                    <li><a href="#">Запросы HTTP</a></li>
                    <li><a href="#">Запросы XHR GET Часть I</a></li>
                    <li><a href="#">Запросы XHR GET Часть II</a></li>
                    <li><a href="#">Запросы XHR GET Часть III</a></li>
                    <li><a href="#">Запросы XHR GET Часть IV</a></li>
                    <li><a href="#">Запросы XHR POST Часть I</a></li>
                    <li><a href="#">Запросы XHR POST Часть II</a></li>
                    <li><a href="#">Запросы XHR POST Часть III</a></li>
                    <h3>Введение в запросы с ES6</h3>
                    <li><a href="#">Запросы fetch() GET Часть I</a></li>
                    <li><a href="#">Запросы fetch() GET Часть II</a></li>
                    <li><a href="#">Запросы fetch() GET Часть III</a></li>
                    <li><a href="#">Запросы fetch() GET Часть IV</a></li>
                    <li><a href="#">Запросы fetch() POST Часть I</a></li>
                    <li><a href="#">Запросы fetch() POST Часть II</a></li>
                    <li><a href="#">Запросы fetch() POST Часть III</a></li>
                    <li><a href="#">Запросы fetch() POST Часть IV</a></li>
                    <li><a href="#">Запросы fetch() POST Часть V</a></li>
                    <li><a href="#">Запросы async GET Часть I</a></li>
                    <li><a href="#">Запросы async GET Часть II</a></li>
                    <li><a href="#">Запросы async GET Часть III</a></li>
                    <li><a href="#">Запросы async POST Часть I</a></li>
                    <li><a href="#">Запросы async POST Часть II</a></li>
                    <li><a href="#">Запросы async POST Часть III</a></li>
                    <h3>Запросы II</h3>
                    <li><a href="#">Запросы async GET Часть I</a></li>
                    <li><a href="#">Запросы async GET Часть II</a></li>
                    <li><a href="#">Запросы async GET Часть III</a></li>
                    <li><a href="#">Запросы async POST Часть I</a></li>
                    <li><a href="#">Запросы async POST Часть II</a></li>
                    <li><a href="#">Запросы async POST Часть III</a></li>
                    <h3>Введение в web безопасность</h3>
                    <li><a href="#">Топ 10 рисков для безопасности приложений</a></li>
                    <li><a href="#">Идентификация</a></li>
                    <li><a href="#">Что такое CORS?</a></li>
                </ul>
            </div>

        <!-- ***********************************************************************************************************-->
            <div class = "contentLine" id = "contLine11">
                <style>
                    #contLine11 {
                        grid-row: 23 / 23;
                        
                    }
                    #CLRollOut11 {
                        display: none;
                        grid-row: 24 / 24;  
                    }
                </style>
                <p class = "CTTitles" id = "rollOutTitle11">REACT, ЧАСТЬ I </p>
                <img src ="img/expand-button.png" alt = "expand" id = "rollOut11" class = "expandButton">
            </div>
            <div class = "contentLineRoll" id = "CLRollOut11">
                <ul>
                    <h3>Введение в React</h3>
                    <li><a href="#">Деструктуризация с JS</a></li>
                    <li><a href="#">Что такое react?</a></li>
                    <li><a href="#">React: виртуальный DOM</a></li>
                    <h3>JSX</h3>
                    <li><a href="#">1</a></li>
                    <li><a href="#">1</a></li>
                    <h3>Продвинутый JSX</h3>
                    <li><a href="#">1</a></li>
                    <li><a href="#">1</a></li>
                    <h3>Компоненты React</h3>
                    <li><a href="#">1</a></li>
                    <li><a href="#">1</a></li>
                </ul>
            </div>

        <!-- ***********************************************************************************************************-->
            <div class = "contentLine" id = "contLine12">
                <style>
                    #contLine12 {
                        grid-row: 25 / 25;
                        
                    }
                    #CLRollOut12 {
                        display: none;
                        grid-row: 26 / 26;  
                    }
                </style>
                <p class = "CTTitles" id = "rollOutTitle12"> REACT, ЧАСТЬ II </p>
                <img src ="img/expand-button.png" alt = "expand" id = "rollOut12" class = "expandButton">
            </div>
            <div class = "contentLineRoll" id = "CLRollOut12">
                <ul>
                    <li><a href="#">1</a></li>
                    <li><a href="#">1</a></li>
                    <li><a href="#">1</a></li>
                    <li><a href="#">1</a></li>
                    <h3>adsfadsfsd</h3>
                    <li><a href="#">1</a></li>
                    <li><a href="#">1</a></li>
                </ul>
            </div>


        <!-- ***********************************************************************************************************-->
            <div class = "contentLine" id = "contLine13">
                <style>
                    #contLine13 {
                        grid-row: 27 / 27;
                        
                    }
                    #CLRollOut13 {
                        display: none;
                        grid-row: 28 / 28;  
                    }
                </style>
                <p class = "CTTitles" id = "rollOutTitle13"> REDUX </p>
                <img src ="img/expand-button.png" alt = "expand" id = "rollOut13" class = "expandButton">
            </div>
            <div class = "contentLineRoll" id = "CLRollOut13">
                <ul>
                    <li><a href="#">1</a></li>
                    <li><a href="#">1</a></li>
                    <li><a href="#">1</a></li>
                    <li><a href="#">1</a></li>
                    <h3>adsfadsfsd</h3>
                    <li><a href="#">1</a></li>
                    <li><a href="#">1</a></li>
                </ul>
            </div>

        <!-- ***********************************************************************************************************-->
            <div class = "contentLine" id = "contLine14">
                <style>
                    #contLine14 {
                        grid-row: 29 / 29;
                        
                    }
                    #CLRollOut14 {
                        display: none;
                        grid-row: 30 / 30;  
                    }
                   
                </style>
                <p class = "CTTitles" id = "rollOutTitle14"> РЕШЕННЫЕ ЗАДАЧИ </p>
                <img src ="img/expand-button.png" alt = "expand" id = "rollOut14" class = "expandButton">
            </div>
            <div class = "contentLineRoll" id = "CLRollOut14">
                <ul>
                    <li><a href="#">1</a></li>
                    <li><a href="#">1</a></li>
                    <li><a href="#">1</a></li>
                    <li><a href="#">1</a></li>
                    <h3>adsfadsfsd</h3>
                    <li><a href="#">1</a></li>
                    <li><a href="#">1</a></li>
                </ul>
            </div>


    </div>
    <style>
    @media only screen and (max-width: 930px) { 
        #contentsField {
            grid-template-columns: repeat(14, 1fr);
        }
        #closeOff {
            grid-area: 1 / 1 / 1 / 15;
        }
        h1 {
            grid-area: 2 / 2 / 2 / 14;
        }
        .contentLine {
            grid-column: 2 / 14;
        }
        .contentLineRoll {
            grid-column: 3 / 12;
        }
        #col15, #col16 {
            display: none;
        } 
    }

    @media only screen and (max-width: 795px) { 
        #contentsField {
            grid-template-columns: repeat(12, 1fr);
        }
        #closeOff {
            grid-area: 1 / 1 / 1 / 13;
        }
        h1 {
            grid-area: 2 / 2 / 2 / 12;
        }
        .contentLine {
            grid-column: 2 / 12;
        }
        .contentLineRoll {
            grid-column: 3 / 11;
        }
        #col13, #col14 {
            display: none;
        } 
    }

    @media only screen and (max-width: 640px) { 
        #contentsField {
            grid-template-columns: repeat(9, 1fr);
        }
        #closeOff {
            grid-area: 1 / 1 / 1 / 10;
        }
       
        h1 {
            margin: 5% auto;
            text-align: center;
            grid-area: 2 / 1 / 2 / 10;
        }
        .contentLine {
            font-size: 1.5em;
            grid-column: 1 / 10;
        }
        .contentLineRoll {
            font-size: 1.4em;
            grid-column: 1 / 10;
        }
        .contentLineRoll li, h3 {
            margin: 4%;
        }
        
        #col10, #col11, #col12 {
            display: none;
        } 
        .contentLine img {
            width: 50px;
            height: 50px;
            
        }
        .contentLine p {
            padding-top: 2%;
        }
        #contLine10 p {
            padding-top: 0;
        }
    }
    @media only screen and (max-width: 580px) { 
        #contLine8 p {
            padding-top: 0;
        }
    }
    @media only screen and (max-width: 548px) { 
        #contLine7 p {
            padding-top: 0;
        }
    }
    @media only screen and (max-width: 540px) { 
        #contentsField {
            grid-template-columns: repeat(6, 1fr);
            grid-row-gap: 5px;
        }
        #closeOff {
            grid-area: 1 / 1 / 1 / 7;
        }
       
        h1 {
            margin: 5% 0;
            grid-area: 2 / 1 / 2 / 7;
        }
        .contentLine {
            font-size: 1.6em;
            grid-column: 1 / 7;
        }
        #contLine1 p, #contLine3 p, #contLine4 p, #contLine5 p, #contLine6 p, #contLine9 p, #contLine11 p, #contLine12 p, 
        #contLine13 p, #contLine14 p { 
            padding-top: 4%; 
        }
        #contLine2 p, #contLine7 p, #contLine8 p, #contLine10 p {
            padding-top: 1%; 
        }
        .contentLine img {
            width: 50px;
            height: 50px;
            margin: 2% auto;
        }
        .contentLineRoll {
            grid-column: 1 / 7;
        }
        #col7, #col8, #col9 {
            display: none;
        } 
    }

    @media only screen and (max-width: 500px) { 
        .contentLine p { 
            width: 70%;
        }
        
        #contLine3 p, #contLine4 p, #contLine5 p, #contLine6 p, #contLine9 p {
            padding-top: 1%; 
        }
    }
    @media only screen and (max-width: 482px) {
        #contLine1 p {
            padding-top: 1%; 
        }
    }
    @media only screen and (max-width: 420px) {  
        h1 {
            font-size: 2.3em;
        }
        .contentLine {
            font-size: 1.1em;
            
        }
        .contentLine p { 
            width: 80%;
        }
        #contLine1 p {
            padding-top: 5%; 
        }
        .contentLine img {
            width: 30px;
            height: 30px;
            
        }
        
    }

    @media only screen and (max-width: 380px) { 
        #contentsField {
            grid-template-columns: repeat(4, 1fr);
            grid-row-gap: 10px;
        }
        #closeOff {
            grid-area: 1 / 1 / 1 / 5;
        }
       h1 {
            margin: 5% 0;
            grid-area: 2 / 1 / 2 / 5;
        }
        .contentLine {
            font-size: 1.4em;
            grid-column: 1 / 5;
        }
        .contentLine img {
            width: 50px;
            height: 50px;
            margin: 5% auto;
        }
        .contentLineRoll {
            grid-column: 1 / 5;
        }
        #col5, #col6 {
            display: none;
        } 
        #contLine1 p, #contLine2 p, #contLine3 p, #contLine4 p, #contLine5 p, #contLine6 p, #contLine9 p {
            padding-top: 3%; 
        }
        #contLine7 p, #contLine8 p, #contLine10 p {
            padding-top: 0; 
        }
        #contLine11 p, #contLine12 p, #contLine13 p, #contLine14 p {
            padding-top: 8%; 
        }
    }
    @media only screen and (max-width: 361px) { 
        #contLine6 p {
            padding-top: 0;
        }
    }
    @media only screen and (max-width: 343px) {
        #contLine14 p  {
            padding-top: 2%;
        }
    }
    @media only screen and (max-width: 342px) {
        #contLine4 p  {
            padding-top: 0;
        }
        
    } 
    @media only screen and (max-width: 330px) {
        #contentsField {
            grid-template-columns: repeat(3, 1fr);
            grid-row-gap: 10px;
        }
        #closeOff {
            grid-area: 1 / 1 / 1 / 4;
        }
       h1 {
            font-size: 2em;
            grid-area: 2 / 1 / 2 / 4;
        }
        .contentLine {
            font-size: 1.3em;
            grid-column: 1 / 4;
        }
        
        .contentLineRoll {
            grid-column: 1 / 4;
        }
        .contentLineRoll li, h3 {
            margin: 5%;
        }
        #col4 {
            display: none;
        } 
       
    
    }
    </style>
    `;

function toggleContTable () {
        
        document.body.scrollTop = 0; // For Safari
        window.scrollTo({ top: 0, behavior: 'smooth' });
        
        
        header.style.display = "none";
        for (i = 0; i < section.length; i ++) {
            section[i].style.display = "none";
        }
        
        presentaionJS.style.display = "none";
        contentsButt.style.display = "none";

        ct.style.display = "block";
        ct.style.height = "fit-content";
        //ct.style.border= "solid red";
        ct.style.width = "100%";
        

    class popUp extends HTMLElement {
        
        constructor() {
            super();
            this.attachShadow({mode: 'open'});
            this.shadowRoot.appendChild(contTable.content.cloneNode(true));
        }

        connectedCallback () {
            this.shadowRoot.querySelector('#closeOff').addEventListener('click', () =>this.shutContTable());

            this.shadowRoot.querySelector('#rollOutTitle').addEventListener('click', () => this.rollOut());
            this.shadowRoot.querySelector('#rollOut').addEventListener('click', () => this.rollOut());

            this.shadowRoot.querySelector('#rollOutTitle2').addEventListener('click', () => this.rollOut2());
            this.shadowRoot.querySelector('#rollOut2').addEventListener('click', () => this.rollOut2());

            this.shadowRoot.querySelector('#rollOutTitle3').addEventListener('click', () => this.rollOut3());
            this.shadowRoot.querySelector('#rollOut3').addEventListener('click', () => this.rollOut3());

            this.shadowRoot.querySelector('#rollOutTitle4').addEventListener('click', () => this.rollOut4());
            this.shadowRoot.querySelector('#rollOut4').addEventListener('click', () => this.rollOut4());

            this.shadowRoot.querySelector('#rollOutTitle5').addEventListener('click', () => this.rollOut5());
            this.shadowRoot.querySelector('#rollOut5').addEventListener('click', () => this.rollOut5());

            this.shadowRoot.querySelector('#rollOutTitle6').addEventListener('click', () => this.rollOut6());
            this.shadowRoot.querySelector('#rollOut6').addEventListener('click', () => this.rollOut6());

            this.shadowRoot.querySelector('#rollOutTitle7').addEventListener('click', () => this.rollOut7());
            this.shadowRoot.querySelector('#rollOut7').addEventListener('click', () => this.rollOut7());

            this.shadowRoot.querySelector('#rollOutTitle8').addEventListener('click', () => this.rollOut8());
            this.shadowRoot.querySelector('#rollOut8').addEventListener('click', () => this.rollOut8());

            this.shadowRoot.querySelector('#rollOutTitle9').addEventListener('click', () => this.rollOut9());
            this.shadowRoot.querySelector('#rollOut9').addEventListener('click', () => this.rollOut9());

            this.shadowRoot.querySelector('#rollOutTitle10').addEventListener('click', () => this.rollOut10());
            this.shadowRoot.querySelector('#rollOut10').addEventListener('click', () => this.rollOut10());

            this.shadowRoot.querySelector('#rollOutTitle11').addEventListener('click', () => this.rollOut11());
            this.shadowRoot.querySelector('#rollOut11').addEventListener('click', () => this.rollOut11());

            this.shadowRoot.querySelector('#rollOutTitle12').addEventListener('click', () => this.rollOut12());
            this.shadowRoot.querySelector('#rollOut12').addEventListener('click', () => this.rollOut12());

            this.shadowRoot.querySelector('#rollOutTitle13').addEventListener('click', () => this.rollOut13());
            this.shadowRoot.querySelector('#rollOut13').addEventListener('click', () => this.rollOut13());

            this.shadowRoot.querySelector('#rollOutTitle14').addEventListener('click', () => this.rollOut14());
            this.shadowRoot.querySelector('#rollOut14').addEventListener('click', () => this.rollOut14());

            
            
        }

        shutContTable () {
            ct.style.display = "none";
            header.style.display = "block";
            for (i = 0; i < section.length; i ++) {
                section[i].style.display = "block";
            }
            presentaionJS.style.display = "block";
            contentsButt.style.display = "block";
        }

        rollOut() {
            if(flag ==1) {
                this.shadowRoot.querySelector('#rollOut').style.transition = "all 1s";
                this.shadowRoot.querySelector('#rollOut').style.transform = "rotate(0deg)";
                this.rollout = setTimeout(() => {this.shadowRoot.querySelector('#CLRollOut1').style.display = "block";}, 550 );
                flag = 2;
            } else {
                this.shadowRoot.querySelector('#rollOut').style.transition = "all 1s";
                this.shadowRoot.querySelector('#rollOut').style.transform = "rotate(-90deg)";
                this.rollIn = setTimeout(() => {this.shadowRoot.querySelector('#CLRollOut1').style.display = "none";}, 550 );
                flag = 1;
            }
            
        }

        rollOut2() {
            if(flag ==1) {
                this.shadowRoot.querySelector('#rollOut2').style.transition = "all 1s";
                this.shadowRoot.querySelector('#rollOut2').style.transform = "rotate(0deg)";
                this.rollout = setTimeout(() => {this.shadowRoot.querySelector('#CLRollOut2').style.display = "block";}, 550 );
                flag = 2;
            } else {
                this.shadowRoot.querySelector('#rollOut2').style.transition = "all 1s";
                this.shadowRoot.querySelector('#rollOut2').style.transform = "rotate(-90deg)";
                this.rollIn = setTimeout(() => {this.shadowRoot.querySelector('#CLRollOut2').style.display = "none";}, 550 );
                flag = 1;
            }
            
        }
        
        rollOut3() {
            if(flag ==1) {
                this.shadowRoot.querySelector('#rollOut3').style.transition = "all 1s";
                this.shadowRoot.querySelector('#rollOut3').style.transform = "rotate(0deg)";
                this.rollout = setTimeout(() => {this.shadowRoot.querySelector('#CLRollOut3').style.display = "block";}, 550 );
                flag = 2;
            } else {
                this.shadowRoot.querySelector('#rollOut3').style.transition = "all 1s";
                this.shadowRoot.querySelector('#rollOut3').style.transform = "rotate(-90deg)";
                this.rollIn = setTimeout(() => {this.shadowRoot.querySelector('#CLRollOut3').style.display = "none";}, 550 );
                flag = 1;
            }
            
        }

        rollOut4() {
            if(flag ==1) {
                this.shadowRoot.querySelector('#rollOut4').style.transition = "all 1s";
                this.shadowRoot.querySelector('#rollOut4').style.transform = "rotate(0deg)";
                this.rollout = setTimeout(() => {this.shadowRoot.querySelector('#CLRollOut4').style.display = "block";}, 550 );
                flag = 2;
            } else {
                this.shadowRoot.querySelector('#rollOut4').style.transition = "all 1s";
                this.shadowRoot.querySelector('#rollOut4').style.transform = "rotate(-90deg)";
                this.rollIn = setTimeout(() => {this.shadowRoot.querySelector('#CLRollOut4').style.display = "none";}, 550 );
                flag = 1;
            }
            
        }

        rollOut5() {
            if(flag ==1) {
                this.shadowRoot.querySelector('#rollOut5').style.transition = "all 1s";
                this.shadowRoot.querySelector('#rollOut5').style.transform = "rotate(0deg)";
                this.rollout = setTimeout(() => {this.shadowRoot.querySelector('#CLRollOut5').style.display = "block";}, 550 );
                flag = 2;
            } else {
                this.shadowRoot.querySelector('#rollOut5').style.transition = "all 1s";
                this.shadowRoot.querySelector('#rollOut5').style.transform = "rotate(-90deg)";
                this.rollIn = setTimeout(() => {this.shadowRoot.querySelector('#CLRollOut5').style.display = "none";}, 550 );
                flag = 1;
            }
            
        }

        rollOut6() {
            if(flag ==1) {
                this.shadowRoot.querySelector('#rollOut6').style.transition = "all 1s";
                this.shadowRoot.querySelector('#rollOut6').style.transform = "rotate(0deg)";
                this.rollout = setTimeout(() => {this.shadowRoot.querySelector('#CLRollOut6').style.display = "block";}, 550 );
                flag = 2;
            } else {
                this.shadowRoot.querySelector('#rollOut6').style.transition = "all 1s";
                this.shadowRoot.querySelector('#rollOut6').style.transform = "rotate(-90deg)";
                this.rollIn = setTimeout(() => {this.shadowRoot.querySelector('#CLRollOut6').style.display = "none";}, 550 );
                flag = 1;
            }
            
        }

        rollOut7() {
            if(flag ==1) {
                this.shadowRoot.querySelector('#rollOut7').style.transition = "all 1s";
                this.shadowRoot.querySelector('#rollOut7').style.transform = "rotate(0deg)";
                this.rollout = setTimeout(() => {this.shadowRoot.querySelector('#CLRollOut7').style.display = "block";}, 550 );
                flag = 2;
            } else {
                this.shadowRoot.querySelector('#rollOut7').style.transition = "all 1s";
                this.shadowRoot.querySelector('#rollOut7').style.transform = "rotate(-90deg)";
                this.rollIn = setTimeout(() => {this.shadowRoot.querySelector('#CLRollOut7').style.display = "none";}, 550 );
                flag = 1;
            }
            
        }

        rollOut8() {
            if(flag ==1) {
                this.shadowRoot.querySelector('#rollOut8').style.transition = "all 1s";
                this.shadowRoot.querySelector('#rollOut8').style.transform = "rotate(0deg)";
                this.rollout = setTimeout(() => {this.shadowRoot.querySelector('#CLRollOut8').style.display = "block";}, 550 );
                flag = 2;
            } else {
                this.shadowRoot.querySelector('#rollOut8').style.transition = "all 1s";
                this.shadowRoot.querySelector('#rollOut8').style.transform = "rotate(-90deg)";
                this.rollIn = setTimeout(() => {this.shadowRoot.querySelector('#CLRollOut8').style.display = "none";}, 550 );
                flag = 1;
            }
            
        }

        rollOut9() {
            if(flag ==1) {
                this.shadowRoot.querySelector('#rollOut9').style.transition = "all 1s";
                this.shadowRoot.querySelector('#rollOut9').style.transform = "rotate(0deg)";
                this.rollout = setTimeout(() => {this.shadowRoot.querySelector('#CLRollOut9').style.display = "block";}, 550 );
                flag = 2;
            } else {
                this.shadowRoot.querySelector('#rollOut9').style.transition = "all 1s";
                this.shadowRoot.querySelector('#rollOut9').style.transform = "rotate(-90deg)";
                this.rollIn = setTimeout(() => {this.shadowRoot.querySelector('#CLRollOut9').style.display = "none";}, 550 );
                flag = 1;
            }
            
        }

        rollOut10() {
            if(flag ==1) {
                this.shadowRoot.querySelector('#rollOut10').style.transition = "all 1s";
                this.shadowRoot.querySelector('#rollOut10').style.transform = "rotate(0deg)";
                this.rollout = setTimeout(() => {this.shadowRoot.querySelector('#CLRollOut10').style.display = "block";}, 550 );
                flag = 2;
            } else {
                this.shadowRoot.querySelector('#rollOut10').style.transition = "all 1s";
                this.shadowRoot.querySelector('#rollOut10').style.transform = "rotate(-90deg)";
                this.rollIn = setTimeout(() => {this.shadowRoot.querySelector('#CLRollOut10').style.display = "none";}, 550 );
                flag = 1;
            }
            
        }

        rollOut11() {
            if(flag ==1) {
                this.shadowRoot.querySelector('#rollOut11').style.transition = "all 1s";
                this.shadowRoot.querySelector('#rollOut11').style.transform = "rotate(0deg)";
                this.rollout = setTimeout(() => {this.shadowRoot.querySelector('#CLRollOut11').style.display = "block";}, 550 );
                flag = 2;
            } else {
                this.shadowRoot.querySelector('#rollOut11').style.transition = "all 1s";
                this.shadowRoot.querySelector('#rollOut11').style.transform = "rotate(-90deg)";
                this.rollIn = setTimeout(() => {this.shadowRoot.querySelector('#CLRollOut11').style.display = "none";}, 550 );
                flag = 1;
            }
            
        }

        rollOut12() {
            if(flag ==1) {
                this.shadowRoot.querySelector('#rollOut12').style.transition = "all 1s";
                this.shadowRoot.querySelector('#rollOut12').style.transform = "rotate(0deg)";
                this.rollout = setTimeout(() => {this.shadowRoot.querySelector('#CLRollOut12').style.display = "block";}, 550 );
                flag = 2;
            } else {
                this.shadowRoot.querySelector('#rollOut12').style.transition = "all 1s";
                this.shadowRoot.querySelector('#rollOut12').style.transform = "rotate(-90deg)";
                this.rollIn = setTimeout(() => {this.shadowRoot.querySelector('#CLRollOut12').style.display = "none";}, 550 );
                flag = 1;
            }
            
        }

        rollOut13() {
            if(flag ==1) {
                this.shadowRoot.querySelector('#rollOut13').style.transition = "all 1s";
                this.shadowRoot.querySelector('#rollOut13').style.transform = "rotate(0deg)";
                this.rollout = setTimeout(() => {this.shadowRoot.querySelector('#CLRollOut13').style.display = "block";}, 550 );
                flag = 2;
            } else {
                this.shadowRoot.querySelector('#rollOut13').style.transition = "all 1s";
                this.shadowRoot.querySelector('#rollOut13').style.transform = "rotate(-90deg)";
                this.rollIn = setTimeout(() => {this.shadowRoot.querySelector('#CLRollOut13').style.display = "none";}, 550 );
                flag = 1;
            }
            
        }

        rollOut14() {
            if(flag ==1) {
                this.shadowRoot.querySelector('#rollOut14').style.transition = "all 1s";
                this.shadowRoot.querySelector('#rollOut14').style.transform = "rotate(0deg)";
                this.rollout = setTimeout(() => {this.shadowRoot.querySelector('#CLRollOut14').style.display = "block";}, 550 );
                flag = 2;
            } else {
                this.shadowRoot.querySelector('#rollOut14').style.transition = "all 1s";
                this.shadowRoot.querySelector('#rollOut14').style.transform = "rotate(-90deg)";
                this.rollIn = setTimeout(() => {this.shadowRoot.querySelector('#CLRollOut14').style.display = "none";}, 550 );
                flag = 1;
            }
            
        }


 
    };
    window.customElements.define('pop-up', popUp);
}
    




