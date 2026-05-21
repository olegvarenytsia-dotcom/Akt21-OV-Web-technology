/* ==========================================================================
   1. Базові стилі та демонстрація Box Model
   ========================================================================== */
* {
    /* Враховуємо padding і border в загальну ширину елементів */
    box-sizing: border-box; 
    margin: 0;
    padding: 0;
}

body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background-color: #f5f7fa;
    color: #333333;
    line-height: 1.6;
}

.main-header {
    background-color: #2c3e50;
    color: #ffffff;
    text-align: center;
    padding: 45px 20px;
    margin-bottom: 30px;
}

.main-header h1 {
    font-size: 2.3rem;
    margin-bottom: 10px;
}

/* Обмежуючий контейнер для центрування */
.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px 40px 20px;
}

/* ==========================================================================
   2. Flexbox сітка галереї (Десктопна версія: по 3 картки в ряд)
   ========================================================================== */
.gallery-flex {
    display: flex;
    flex-wrap: wrap; /* Дозволяє карткам переноситись на нові рядки */
    gap: 24px;       /* Простір між елементами */
}

.gallery-card {
    background-color: #ffffff;
    /* Розрахунок ширини для 3-х колонок з урахуванням проміжків gap */
    flex: 1 1 calc(33.333% - 16px); 
    
    /* Демонстрація роботи Box Model */
    border: 1px solid #e1e8ed;
    border-radius: 8px;
    padding: 0;
    margin: 0;
    
    overflow: hidden;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
    transition: transform 0.2s ease-in-out;
}

.gallery-card:hover {
    transform: translateY(-5px);
}

/* Імітація фотографій за допомогою CSS-заливок */
.card-image-placeholder {
    height: 180px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    color: #ffffff;
    font-size: 1.2rem;
    letter-spacing: 1px;
}

/* Різноманітні фони для ефекту "різних фото" */
.color-1 { background: linear-gradient(135deg, #71b7f8, #1a75e1); }
.color-2 { background: linear-gradient(135deg, #62ffd6, #00a8cc); }
.color-3 { background: linear-gradient(135deg, #ff9f43, #ee5253); }
.color-4 { background: linear-gradient(135deg, #a55eea, #4b7bec); }
.color-5 { background: linear-gradient(135deg, #10ac84, #01a3a4); }
.color-6 { background: linear-gradient(135deg, #ff7675, #d63031); }

.card-body {
    /* Внутрішні відступи блоку згідно з Box Model */
    padding: 20px; 
}

.card-body h3 {
    margin-bottom: 10px;
    font-size: 1.25rem;
    color: #2c3e50;
}

/* ==========================================================================
   3. Медіа-запит для ПЛАНШЕТІВ (ширина екрана до 992px)
   ========================================================================== */
@media (max-width: 992px) {
    /* Перебудова макету: по 2 картки в один ряд */
    .gallery-card {
        flex: 1 1 calc(50% - 12px);
    }
    
    .main-header h1 {
        font-size: 1.9rem;
    }
}

/* ==========================================================================
   4. Медіа-запит для МОБІЛЬНИХ пристроїв (ширина екрана до 576px)
   Виконано умови варіанту: розміщення стовпчиком, зміна шрифту, розміру та заливки
   ========================================================================== */
@media (max-width: 576px) {
    /* 1. Правильне мобільне розміщення блоків: строго по 1 в ряд (стовпчиком) */
    .gallery-flex {
        flex-direction: column;
        gap: 20px;
    }
    
    .gallery-card {
        flex: 1 1 100%;
        /* 2. Зміна кольору заливки блоків для мобільної версії */
        background-color: #e8f4fd; 
        border: 1px solid #b3d7ff;
    }
    
    /* 3. Зміна сімейства шрифту для мобільної версії */
    body {
        font-family: 'Courier New', Courier, monospace; 
    }
    
    /* 4. Зміна розмірів шрифту на мобільному */
    .main-header h1 {
        font-size: 1.4rem;
    }
    
    .card-body h3 {
        font-size: 1.1rem; /* Зменшений розмір заголовка картки */
        color: #0056b3;
    }
    
    .card-body p {
font-size: 0.85rem; /* Зменшений розмір опису */
        color: #333333;
    }
    
    .card-image-placeholder {
        height: 140px; /* Трохи зменшуємо висоту блоку фото на смартфонах */
    }
}
