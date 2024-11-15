const texts = {
    en: {
        generalInfo: "About Me",
        welcome: `
            <p>Hello! My name is Nikita Mashkin, and I am a 4th-year student at VyatGU College, where I am actively honing my skills in programming and creative projects.</p>
            <p>Currently, I focus on working with Python and C#, which allow me to implement various projects while continuously expanding my technical expertise.As an example, you can check out the ArmyShop project under the projects tab.</p>
            <p>However, programming is only one part of my professional profile. I am deeply passionate about pixel art and animation, which enables me not only to bring ideas to life through code but also to make them visually dynamic.</p>
            <p>For pixel art, I use Aseprite, my primary tool for creating details that express the atmosphere and style of projects. Animating pixel characters and objects allows me to experiment with movement and bring small stories to life, even within a single frame.</p>
            <p>My experience includes working as an artist on two game development projects, where I was responsible for the visual component. This was a unique experience, where I combined my technical skills with artistic vision to create vibrant and memorable game elements.These projects game DIID and Neurunner, they are in the Projects tab. It was fascinating to work on visuals that complement gameplay and enhance the atmosphere.</p>
            <p>I am dedicated to continuous improvement, both in programming and art, as I believe the intersection of these fields leads to creating unique, unforgettable projects.</p>
            <p>In the future, I plan to further develop my skills in both areas, creating projects where coding and art go hand in hand.</p>
        `,
        projects: "Projects",
        contact: "Contact Me",
        nameLabel: "Your Name",
        emailLabel: "Your Email",
        messageLabel: "Your Message",
        sendButton: "Send"
    },
    ru: {
        generalInfo: "Общая Информация",
        welcome: `
            <p>Привет! Меня зовут Машкин Никита, и я студент 4-го курса Колледжа ВятГУ, где активно развиваю свои навыки в программировании и творческих проектах.</p>
            <p>На данный момент я сосредоточен на работе с языками Python и C#, благодаря которым реализую различные проекты и постепенно наращиваю свои технические знания. В качестве примера можете ознакомиться с проектом ArmyShop во вкладке проекты.</p>
            <p>Однако программирование — это лишь одна сторона моего профессионального профиля. Я глубоко увлечён пиксельным искусством и анимацией, что позволяет мне не только воплощать идеи через код, но и визуально оживлять их.</p>
            <p>В работе над пиксельным артом я использую программу Aseprite, которая стала моим основным инструментом для создания деталей, выражающих атмосферу и стиль проектов. Анимация пиксельных персонажей и объектов позволяет мне экспериментировать с движением и создавать маленькие истории даже в рамках одной сцены.</p>
            <p>Мой опыт включает работу художником на двух игровых проектах, где я отвечал за визуальную составляющую. Это был уникальный опыт, в котором я сочетал технические навыки с художественным видением, создавая яркие и запоминающиеся элементы для игр. Эти проекты игра DIID и Neurunner, они есть во вкладке Проекты. Мне было интересно работать над тем, чтобы образы гармонично дополняли игровой процесс и атмосферу.</p>
            <p>Я стремлюсь постоянно совершенствовать себя, как в программировании, так и в художественном направлении, поскольку считаю, что именно на пересечении этих областей можно создавать уникальные, запоминающиеся проекты.</p>
            <p>В будущем я планирую продолжать развивать навыки в обеих сферах, создавая проекты, где программирование и искусство идут рука об руку.</p>
        `,
        projects: "Проекты",
        contact: "Свяжитесь Со Мной",
        nameLabel: "Ваше имя",
        emailLabel: "Ваш Email",
        messageLabel: "Ваше сообщение",
        sendButton: "Отправить"
    }
};

let currentLanguage = 'en';
let isDarkTheme = false;

function openTab(tabId) {
    const contents = document.querySelectorAll('.tab-content');
    contents.forEach(content => {
        content.style.display = content.id === tabId ? 'block' : 'none';
    });
    updateContent();
}

function updateContent() {
    const { generalInfo, welcome, projects, contact, nameLabel, emailLabel, messageLabel, sendButton } = texts[currentLanguage];
    
    // Обновляем текст для заголовков
    document.querySelector('#general-info .title').textContent = generalInfo;
    document.querySelector('#general-info .welcome-message').innerHTML = welcome;
    document.querySelector('#projects .title').textContent = projects;
    document.querySelector('#contact .title').textContent = contact;

    // Переключаем видимость меток и обновляем текст
    const labels = document.querySelectorAll('#feedback-form label');
    labels.forEach(label => {
        if (label.getAttribute('data-lang') === currentLanguage) {
            label.style.display = 'block'; // Показываем метку для текущего языка
        } else {
            label.style.display = 'none'; // Скрываем метку для других языков
        }
    });

    // Переключение текста меток
    document.querySelector('#feedback-form label[for="name"][data-lang="en"]').textContent = nameLabel;
    document.querySelector('#feedback-form label[for="name"][data-lang="ru"]').textContent = nameLabel;
    
    document.querySelector('#feedback-form label[for="email"][data-lang="en"]').textContent = emailLabel;
    document.querySelector('#feedback-form label[for="email"][data-lang="ru"]').textContent = emailLabel;

    document.querySelector('#feedback-form label[for="message"][data-lang="en"]').textContent = messageLabel;
    document.querySelector('#feedback-form label[for="message"][data-lang="ru"]').textContent = messageLabel;

    // Переключение видимости кнопок
    const buttons = document.querySelectorAll('#feedback-form button[type="submit"]');
    buttons.forEach(button => {
        if (button.getAttribute('data-lang') === currentLanguage) {
            button.style.display = 'inline'; // Показываем кнопку для текущего языка
        } else {
            button.style.display = 'none'; // Скрываем другие кнопки
        }
    });
}





function toggleLanguage() {
    currentLanguage = currentLanguage === 'en' ? 'ru' : 'en';
    
    // Обновление текста кнопки переключения языка
    document.getElementById('theme-toggle').textContent = currentLanguage === 'en' ? 'Theme toggle' : 'Смена темы';
    document.getElementById('about-me').textContent = currentLanguage === 'en' ? 'About Me' : 'Обо мне';
    document.getElementById('projects').textContent = currentLanguage === 'en' ? 'Projects' : 'Проекты';
    document.getElementById('contact').textContent = currentLanguage === 'en' ? 'Contact' : 'Обратная связь';
    document.getElementById('lang-toggle').textContent = currentLanguage === 'en' ? 'Русский' : 'English';

    // Обновление содержимого на основе выбранного языка
    updateContent();

    // Переключение между вкладками, чтобы активная вкладка тоже обновилась с новым языковым контентом
    const activeTabId = document.querySelector('.tab-content[style="display: block;"]').id;
    openTab(activeTabId);  // Открываем текущую вкладку с новым языковым содержимым
}

// Функция для смены темы (темная/светлая)
function toggleTheme() {
    isDarkTheme = !isDarkTheme;
    document.body.classList.toggle('dark-theme', isDarkTheme);
    document.querySelector('.header').classList.toggle('dark-theme', isDarkTheme);
    document.querySelectorAll('.tab-content').forEach(section => {
        section.classList.toggle('dark-theme', isDarkTheme);
    });
    document.querySelectorAll('.tab-link').forEach(link => {
        link.classList.toggle('dark-theme', isDarkTheme);
    });
    document.querySelector('.side-menu').classList.toggle('dark-theme', isDarkTheme);
    const formElements = document.querySelectorAll('#feedback-form input, #feedback-form textarea, #feedback-form button');
    formElements.forEach(el => {
        el.classList.toggle('dark-theme', isDarkTheme);
    });
    document.querySelectorAll('.project-tile').forEach(tile => {
        tile.classList.toggle('dark-theme', isDarkTheme);
    });
}

document.getElementById('menu-toggle').addEventListener('click', () => {
    const sideMenu = document.getElementById('side-menu');
    const overlay = document.getElementById('overlay');
    sideMenu.classList.toggle('active');
    overlay.classList.toggle('active');
});

document.addEventListener('click', (e) => {
    const sideMenu = document.getElementById('side-menu');
    const menuToggle = document.getElementById('menu-toggle');
    const overlay = document.getElementById('overlay');
    
    if (sideMenu.classList.contains('active') && !sideMenu.contains(e.target) && e.target !== menuToggle) {
        sideMenu.classList.remove('active');
        overlay.classList.remove('active');
    }
    
    if (overlay.classList.contains('active') && !sideMenu.contains(e.target) && e.target !== menuToggle) {
        overlay.classList.remove('active');
    }
});

document.querySelector('#feedback-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Предотвращаем стандартное поведение формы

    // Сбор данных из формы
    const formData = new FormData(event.target);
    const data = {};

    formData.forEach((value, key) => {
        data[key] = value;
    });

    console.log('Form Data:', data); // Логирование данных

    // Отправка данных на сервер
    fetch('http://localhost:3000/submit-feedback', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
        alert(data.message); // Показываем сообщение об успешной отправке
    })
    .catch(error => {
        console.error('Ошибка при отправке данных:', error);
    });
});

// Инициализация
openTab('general-info');
updateContent();




















