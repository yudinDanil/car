// script3.js - Добавим немного интерактивности

document.addEventListener('DOMContentLoaded', () => {
    // Анимация появления карточек при загрузке
    const carCards = document.querySelectorAll('.car-card');
    carCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        setTimeout(() => {
            card.style.transition = 'opacity 0.5s ease-out, transform 0.5s ease-out';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 100); // Задержка для каждой следующей карточки
    });

    // Анимация для кнопок "Подробнее"
    const buttons = document.querySelectorAll('.details-button');
    buttons.forEach(button => {
        button.addEventListener('mouseover', () => {
            button.style.transform = 'translateY(-3px) scale(1.02)';
            button.style.boxShadow = '0 6px 12px rgba(0, 255, 0, 0.5)';
        });
        button.addEventListener('mouseout', () => {
            button.style.transform = 'translateY(0) scale(1)';
            button.style.boxShadow = 'none';
        });
        // Дополнительно: эффект нажатия
        button.addEventListener('mousedown', () => {
             button.style.transform = 'translateY(1px) scale(0.98)';
             button.style.boxShadow = '0 2px 4px rgba(0, 255, 0, 0.4)';
        });
         button.addEventListener('mouseup', () => {
             // Возвращаем вид после отпускания кнопки
             button.style.transform = 'translateY(0) scale(1.02)';
             button.style.boxShadow = '0 6px 12px rgba(0, 255, 0, 0.5)';
        });
    });

    // Анимация для элементов списка "Интересные факты"
    const factItems = document.querySelectorAll('.interesting-facts li');
    factItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateX(-15px)';
        setTimeout(() => {
            item.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            item.style.opacity = '1';
            item.style.transform = 'translateX(0)';
        }, 500 + index * 80); // Задержка после анимации карточек
    });
});
