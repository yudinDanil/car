document.addEventListener('DOMContentLoaded', () => {
    // Получаем данные из HTML-блока
    const carsData = JSON.parse(document.getElementById('cars-data').textContent);
    const grid = document.getElementById('cars-grid');
    const tabs = document.querySelectorAll('.tab');

    function renderCars(category) {
        grid.innerHTML = '';
        
        // Фильтруем данные
        const filtered = category === 'all' 
            ? carsData 
            : carsData.filter(car => car.cat === category);

        // Создаем карточки
        filtered.forEach((car, index) => {
            const card = document.createElement('div');
            card.className = 'card';
            card.innerHTML = `
                <div class="card-img" style="background-image: url('${car.img}')"></div>
                <div class="card-content">
                    <div class="card-title">${car.name}</div>
                    <div class="specs-list">
                        <div class="spec-item"><b>Мощность</b>${car.hp}</div>
                        <div class="spec-item"><b>Объем</b>${car.vol}</div>
                        <div class="spec-item"><b>Привод</b>${car.drive}</div>
                        <div class="spec-item"><b>КПП</b>${car.trans}</div>
                        <div class="spec-item"><b>Год</b>${car.year}</div>
                        <div class="spec-item"><b>Версия</b>${car.trim}</div>
                    </div>
                    <div class="card-footer">
                        <div class="card-price">${car.price}</div>
                    </div>
                </div>
            `;
            grid.appendChild(card);
            
            // Задержка для анимации появления
            setTimeout(() => {
                card.classList.add('visible');
            }, index * 60);
        });
    }

    // Обработка клика по табам
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            renderCars(tab.dataset.cat);
        });
    });

    // Инициализация (показываем все машины)
    renderCars('all');
});