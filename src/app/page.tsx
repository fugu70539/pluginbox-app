/* Переменные остаются прежними */
:root {
  --bg: #000;
  --t-bg: rgba(23, 23, 23, 0.85); /* Чуть прозрачнее и темнее */
  --act: #ffffff;
  --inact: #8e8e93;
  --pill: rgba(255, 255, 255, 0.08); /* Тоньше подложка */
}

/* Очистка и фиксы тапа */
* {
  -webkit-tap-highlight-color: transparent;
  outline: none !important;
}

/* Утонченный Таббар (Высота уменьшена, поднят выше) */
.tbar-refined {
  position: relative;
  background: var(--t-bg);
  backdrop-filter: blur(20px) saturate(180%);
  -webkit-backdrop-filter: blur(20px) saturate(180%);
  border-radius: 24px; /* Меньше радиус */
  display: flex;
  padding: 3px; /* Тоньше отступы внутри */
  width: 290px; /* Компактная ширина */
  border: 0.5px solid rgba(255, 255, 255, 0.04);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
}

.t-item-refined {
  flex: 1;
  padding: 6px 0 5px 0; /* Очень компактная высота кнопки */
  display: flex;
  flex-direction: column;
  align-items: center;
  color: var(--inact);
  position: relative;
  z-index: 2;
  background: none;
  border: none;
  transition: color 0.2s ease;
}

.t-item-refined.active { color: var(--act); }

/* Иконки: Уменьшены */
.ic-refined {
  width: 22px;
  height: 22px;
  margin-bottom: 2px;
  filter: grayscale(1) brightness(0.8);
  transition: filter 0.2s ease;
}

.t-item-refined.active .ic-refined {
  filter: grayscale(0) brightness(1.2);
}

/* Текст: Уменьшен до 10px (как на референсе) */
.t-txt-refined {
  font-size: 10px;
  font-weight: 500;
  color: inherit;
  letter-spacing: -0.1px;
}

/* Слайдер-подложка: Тоньше и изящнее */
.slid-refined {
  position: absolute;
  top: 3px;
  height: calc(100% - 6px);
  background: var(--pill);
  border-radius: 20px;
  z-index: 1;
  transition: left 0.16s cubic-bezier(0.3, 0.7, 0.3, 1);
  opacity: 1;
}
