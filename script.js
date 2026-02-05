const games = [
    {id: 1, name: 'Сенсорные шарики', age_min: 1, age_max: 2, items: ['подушки', 'ничего'], time: '3-5', description: '1. Сложи подушки в кучу. 2. Положи ребёнка на них. 3. Кати его как шарик.', goal: 'Моторика, сенсорика'},
    {id: 2, name: 'Ложечный оркестр', age_min: 1, age_max: 2, items: ['ложки', 'ничего'], time: '3-5', description: '1. Дай ложки в руки. 2. Стучи ими по ладошкам. 3. Повторяй ритм вместе.', goal: 'Координация, слух'},
    {id: 3, name: 'Водные брызги', age_min: 1, age_max: 2, items: ['вода', 'ничего'], time: '3-5', description: '1. Налей воду в миску. 2. Покажи, как брызгать пальцами. 3. Лови брызги руками.', goal: 'Сенсорика, веселье'},
    {id: 4, name: 'Коробочный туннель', age_min: 1, age_max: 2, items: ['коробка', 'ничего'], time: '10', description: '1. Поставь коробку на бок. 2. Ползи через неё. 3. Добавь звуки "ту-ту".', goal: 'Моторика, воображение'},
    {id: 5, name: 'Прищепки на пальцы', age_min: 1, age_max: 2, items: ['прищепки', 'ничего'], time: '3-5', description: '1. Надень прищепки на пальцы. 2. Снимай и надевай. 3. Называй цвета.', goal: 'Мелкая моторика'},
    {id: 6, name: 'Крышечный стук', age_min: 1, age_max: 2, items: ['крышки', 'ложки'], time: '3-5', description: '1. Дай крышки и ложку. 2. Стучи по ним. 3. Слушай звуки.', goal: 'Слух, координация'},
    {id: 7, name: 'Бумажный дождь', age_min: 1, age_max: 2, items: ['бумага', 'ничего'], time: '3-5', description: '1. Разорви бумагу на кусочки. 2. Бросай вверх. 3. Лови падающие.', goal: 'Сенсорика, моторика'},
    {id: 8, name: 'Верёвочный тяни-толкай', age_min: 1, age_max: 2, items: ['верёвка', 'ничего'], time: '3-5', description: '1. Дай конец верёвки. 2. Тяни вместе. 3. Меняй направление.', goal: 'Сила, координация'},
    {id: 9, name: 'Карандашные следы', age_min: 1, age_max: 2, items: ['карандаши/фломастеры', 'бумага'], time: '10', description: '1. Положи бумагу на пол. 2. Дай карандаш в руку. 3. Водите вместе линии.', goal: 'Творчество, моторика'},
    {id: 10, name: 'Подушечный замок', age_min: 1, age_max: 2, items: ['подушки', 'коробка'], time: '10', description: '1. Сложи подушки вокруг коробки. 2. Залезай внутрь. 3. Выходи и заходи.', goal: 'Пространственное мышление'},
    {id: 11, name: 'Ложечные башни', age_min: 1, age_max: 2, items: ['ложки', 'крышки'], time: '3-5', description: '1. Складывай ложки и крышки в стопку. 2. Роняй. 3. Собирай заново.', goal: 'Моторика, баланс'},
    {id: 12, name: 'Ничего-кувырки', age_min: 1, age_max: 2, items: ['ничего'], time: '3-5', description: '1. Лягте на пол. 2. Кувыркайтесь вместе. 3. Хлопайте в ладоши.', goal: 'Физическая активность'},
    {id: 13, name: 'Бумажные самолётики', age_min: 3, age_max: 4, items: ['бумага', 'ничего'], time: '10', description: '1. Сложи бумагу в самолёт. 2. Бросай. 3. Лови или догоняй.', goal: 'Моторика, физика'},
    {id: 14, name: 'Карандашные рисунки', age_min: 3, age_max: 4, items: ['карандаши/фломастеры', 'бумага'], time: '10', description: '1. Нарисуй простую фигуру. 2. Ребёнок обводит. 3. Добавьте цвета.', goal: 'Творчество, мелкая моторика'},
    {id: 15, name: 'Прищепочный зоопарк', age_min: 3, age_max: 4, items: ['прищепки', 'бумага'], time: '10', description: '1. Нарисуй животных на бумаге. 2. Прикрепи прищепки как ноги. 3. Играй в зоопарк.', goal: 'Воображение, речь'},
    {id: 16, name: 'Крышечные пазлы', age_min: 3, age_max: 4, items: ['крышки', 'ничего'], time: '3-5', description: '1. Разложи крышки по размерам. 2. Сортируй по цветам. 3. Собери "картину".', goal: 'Логика, сортировка'},
    {id: 17, name: 'Коробочный дом', age_min: 3, age_max: 4, items: ['коробка', 'подушки'], time: '20+', description: '1. Поставь коробку. 2. Добавь подушки как мебель. 3. Играй в домик.', goal: 'Ролевая игра, социализация'},
    {id: 18, name: 'Ложечные гонки', age_min: 3, age_max: 4, items: ['ложки', 'верёвка'], time: '3-5', description: '1. Привяжи ложку к верёвке. 2. Тяни как машинку. 3. Гоняйся.', goal: 'Координация, веселье'},
    {id: 19, name: 'Верёвочный лабиринт', age_min: 3, age_max: 4, items: ['верёвка', 'ничего'], time: '10', description: '1. Разложи верёвку зигзагами. 2. Ходи по ней. 3. Не сходи с пути.', goal: 'Баланс, внимание'},
    {id: 20, name: 'Подушечные прыжки', age_min: 3, age_max: 4, items: ['подушки', 'ничего'], time: '3-5', description: '1. Разложи подушки как острова. 2. Прыгай по ним. 3. Не падай в "воду".', goal: 'Физическая активность'},
    {id: 21, name: 'Водные эксперименты', age_min: 3, age_max: 4, items: ['вода', 'крышки'], time: '10', description: '1. Налей воду в крышки. 2. Переливай. 3. Смотри, что тонет.', goal: 'Наука, сенсорика'},
    {id: 22, name: 'Ничего-танцы', age_min: 3, age_max: 4, items: ['ничего'], time: '3-5', description: '1. Включи музыку в голове. 2. Танцуй с ребёнком. 3. Копирует движения.', goal: 'Ритм, эмоции'},
    {id: 23, name: 'Прищепки на верёвке', age_min: 3, age_max: 4, items: ['прищепки', 'верёвка'], time: '3-5', description: '1. Натяни верёвку. 2. Вешаем прищепки. 3. Снимаем по порядку.', goal: 'Мелкая моторика'},
    {id: 24, name: 'Ложечные куклы', age_min: 3, age_max: 4, items: ['ложки', 'карандаши/фломастеры'], time: '10', description: '1. Нарисуй лица на ложках. 2. Играй в театр. 3. Придумывай диалоги.', goal: 'Речь, воображение'},
    {id: 25, name: 'Бумажный коллаж', age_min: 3, age_max: 4, items: ['бумага', 'вода'], time: '20+', description: '1. Разорви бумагу. 2. Намочи и приклей. 3. Создай картину.', goal: 'Творчество'},
    {id: 26, name: 'Бумажные цепочки', age_min: 5, age_max: 6, items: ['бумага', 'карандаши/фломастеры'], time: '10', description: '1. Нарежь полоски. 2. Нарисуй узоры. 3. Склей в цепь.', goal: 'Моторика, творчество'},
    {id: 27, name: 'Прищепочный счёт', age_min: 5, age_max: 6, items: ['прищепки', 'бумага'], time: '3-5', description: '1. Напиши числа на бумаге. 2. Прикрепи столько прищепок. 3. Проверь.', goal: 'Математика, внимание'},
    {id: 28, name: 'Крышечные домино', age_min: 5, age_max: 6, items: ['крышки', 'ничего'], time: '10', description: '1. Разложи крышки в ряд. 2. Толкай первую. 3. Смотри цепную реакцию.', goal: 'Физика, логика'},
    {id: 29, name: 'Коробочный лабиринт', age_min: 5, age_max: 6, items: ['коробка', 'верёвка'], time: '20+', description: '1. Вырежь отверстия в коробке. 2. Протяни верёвку внутри. 3. Проведи шарик.', goal: 'Логика, моторика'},
    {id: 30, name: 'Ложечные ритмы', age_min: 5, age_max: 6, items: ['ложки', 'ничего'], time: '3-5', description: '1. Стучи ложками ритм. 2. Ребёнок повторяет. 3. Усложняй.', goal: 'Ритм, память'},
    {id: 31, name: 'Верёвочные узлы', age_min: 5, age_max: 6, items: ['верёвка', 'ничего'], time: '10', description: '1. Покажи простой узел. 2. Ребёнок завязывает. 3. Используй в игре.', goal: 'Мелкая моторика'},
    {id: 32, name: 'Подушечный форт', age_min: 5, age_max: 6, items: ['подушки', 'коробка'], time: '20+', description: '1. Строим форт из подушек и коробки. 2. Защищаем "сокровища". 3. Играем в осаду.', goal: 'Воображение, командная работа'},
    {id: 33, name: 'Водные гонки', age_min: 5, age_max: 6, items: ['вода', 'крышки'], time: '10', description: '1. Сделай лодочки из крышек. 2. Пускай в воду. 3. Дуй, чтобы плыли.', goal: 'Наука, веселье'},
    {id: 34, name: 'Ничего-рассказы', age_min: 5, age_max: 6, items: ['ничего'], time: '10', description: '1. Начни историю. 2. Ребёнок продолжает. 3. Чередуйтесь.', goal: 'Речь, креативность'},
    {id: 35, name: 'Карандашные загадки', age_min: 5, age_max: 6, items: ['карандаши/фломастеры', 'бумага'], time: '3-5', description: '1. Нарисуй загадку. 2. Ребёнок угадывает. 3. Меняйтесь.', goal: 'Логика, речь'},
    {id: 36, name: 'Прищепки и ложки', age_min: 5, age_max: 6, items: ['прищепки', 'ложки'], time: '3-5', description: '1. Прикрепи прищепки к ложкам. 2. Балансируй. 3. Состязание.', goal: 'Координация'},
    {id: 37, name: 'Бумажный футбол', age_min: 5, age_max: 6, items: ['бумага', 'ничего'], time: '3-5', description: '1. Скомкай бумагу в мяч. 2. Пинай ногами. 3. Забей гол.', goal: 'Физическая активность'},
    {id: 38, name: 'Крышечные буквы', age_min: 5, age_max: 6, items: ['крышки', 'карандаши/фломастеры'], time: '10', description: '1. Напиши буквы на крышках. 2. Составь слова. 3. Читай.', goal: 'Грамотность'},
    {id: 39, name: 'Бумажные оригами', age_min: 7, age_max: Infinity, items: ['бумага', 'ничего'], time: '20+', description: '1. Сложи фигурку. 2. Расскажи историю. 3. Сделай коллекцию.', goal: 'Творчество, терпение'},
    {id: 40, name: 'Карандашные комиксы', age_min: 7, age_max: Infinity, items: ['карандаши/фломастеры', 'бумага'], time: '20+', description: '1. Нарисуй панели. 2. Придумай сюжет. 3. Добавь диалоги.', goal: 'Речь, креативность'},
    {id: 41, name: 'Прищепочный робот', age_min: 7, age_max: Infinity, items: ['прищепки', 'верёвка'], time: '10', description: '1. Собери робота из прищепок. 2. Привяжи верёвку как суставы. 3. Двигай.', goal: 'Инженерия, воображение'},
    {id: 42, name: 'Крышечные башни', age_min: 7, age_max: Infinity, items: ['крышки', 'ложки'], time: '10', description: '1. Строим башню из крышек. 2. Используй ложки как опоры. 3. Не дай упасть.', goal: 'Физика, баланс'},
    {id: 43, name: 'Коробочный театр', age_min: 7, age_max: Infinity, items: ['коробка', 'бумага'], time: '20+', description: '1. Вырежь сцену в коробке. 2. Нарисуй персонажей. 3. Играй спектакль.', goal: 'Ролевая игра'},
    {id: 44, name: 'Ложечные фокусы', age_min: 7, age_max: Infinity, items: ['ложки', 'ничего'], time: '3-5', description: '1. Спрячь ложку. 2. Покажи фокус. 3. Угадай.', goal: 'Внимание, ловкость'},
    {id: 45, name: 'Верёвочные загадки', age_min: 7, age_max: Infinity, items: ['верёвка', 'ничего'], time: '10', description: '1. Завяжи узел. 2. Ребёнок развязывает. 3. Обсуди, как.', goal: 'Логика'},
    {id: 46, name: 'Подушечные битвы', age_min: 7, age_max: Infinity, items: ['подушки', 'ничего'], time: '3-5', description: '1. Бросай подушки. 2. Уворачивайся. 3. Считай очки.', goal: 'Физическая активность'},
    {id: 47, name: 'Водные фильтры', age_min: 7, age_max: Infinity, items: ['вода', 'коробка'], time: '20+', description: '1. Сделай фильтр в коробке. 2. Налей грязную воду. 3. Очисти.', goal: 'Наука, эксперименты'},
    {id: 48, name: 'Ничего-детектив', age_min: 7, age_max: Infinity, items: ['ничего'], time: '10', description: '1. Придумай загадку. 2. Задавай вопросы. 3. Угадай.', goal: 'Логика, речь'},
    {id: 49, name: 'Прищепки и вода', age_min: 7, age_max: Infinity, items: ['прищепки', 'вода'], time: '3-5', description: '1. Прикрепи прищепки к стакану. 2. Налей воду. 3. Балансируй.', goal: 'Координация'},
    {id: 50, name: 'Бумажный код', age_min: 7, age_max: Infinity, items: ['бумага', 'карандаши/фломастеры'], time: '10', description: '1. Напиши код (шифр). 2. Зашифруй сообщение. 3. Расшифруй.', goal: 'Логика, грамотность'},
];

document.getElementById('game-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const ageInput = document.getElementById('age').value;
    const ageMap = {'1-2': 1.5, '3-4': 3.5, '5-6': 5.5, '7+': 7};
    const age = ageMap[ageInput];
    const selectedItems = Array.from(document.querySelectorAll('input[type="checkbox"]:checked')).map(cb => cb.value);
    const timeRange = document.getElementById('time').value;
    
    const game = filterGames(age, selectedItems, timeRange);
    
    const resultDiv = document.getElementById('result');
    if (game) {
        document.getElementById('name').textContent = game.name;
        document.getElementById('goal').textContent = game.goal;
        document.getElementById('time-output').textContent = game.time;
        document.getElementById('description').textContent = game.description;
        resultDiv.classList.remove('hidden');
    } else {
        alert('Нет подходящей игры. Попробуйте другие параметры.');
    }
});

document.getElementById('another').addEventListener('click', function() {
    document.getElementById('game-form').dispatchEvent(new Event('submit'));
});

function filterGames(age, items, timeRange) {
    const candidates = games.filter(game => {
        const maxAge = game.age_max === Infinity ? 100 : game.age_max;
        if (game.age_min <= age && age <= maxAge) {
            if (items.length === 0 || items.some(item => game.items.includes(item))) {
                if (timeRange === game.time) {
                    return true;
                }
            }
        }
        return false;
    });
    if (candidates.length > 0) {
        return candidates[Math.floor(Math.random() * candidates.length)];
    }
    return null;
}
