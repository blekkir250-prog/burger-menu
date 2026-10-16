const root = document.documentElement;
const btn = document.querySelector('.burger-btn');
const menu = document.querySelector('.mobile-menu');

btn.addEventListener('click',  () => {
    /* toggle работает как выключатель: если класса нет — добавляет, если есть — удаляет */
    btn.classList.toggle('open');
    menu.classList.toggle('open');
});
