import { throttle } from "../functions/throttle.js";

const container = document.querySelector(".page-decoration");

// 🔥 Конфиг под брейкпоинты
const GLOW_CONFIG = {
  sm: [
    { x: -100, y: 300, size: 800 },
    { x: 20, y: 460, size: 500, blur: 50 },
    { x: -180, y: 1300, size: 1800, blur: 120, opacity: 0.75 },
    { x: -180, y: 2600, size: 1800, blur: 120, opacity: 0.75 },
    { x: -180, y: 3900, size: 1800, blur: 120, opacity: 0.75 },
  ],
  md: [
    { x: -60, y: 400, size: 800 },
    { x: -20, y: 300, size: 1200 },
    { x: -50, y: 1100, size: 1800 },
    { x: -50, y: 2200, size: 1800 },
    { x: -50, y: 3300, size: 1800 },
  ],
  lg: [
    { x: -25, y: 0, size: 1000 },
    { x: -40, y: 400, size: 2600, blur: 240 },
    { x: 40, y: 800, size: 1600, blur: 160 },
    { x: -60, y: 2000, size: 2000, blur: 280 },
    { x: -100, y: 3000, size: 5000, blur: 360 },
    { x: -40, y: 4400, size: 2600, blur: 240 },
    { x: -60, y: 5600, size: 2000, blur: 280 },
    { x: 40, y: 6800, size: 1600, blur: 160 },
  ],
};

// 🎯 breakpoint
const getBreakpoint = () => {
  const w = window.innerWidth;
  if (w < 576) return "sm";
  if (w < 992) return "md";
  return "lg";
};

// 📏 высота страницы
const getPageHeight = () => {
  return Math.max(
    document.body.scrollHeight,
    document.documentElement.scrollHeight,
  );
};

// 📏 высота паттерна
const getPatternHeight = (pattern) => {
  return Math.max(...pattern.map((item) => item.y)) + 600;
};

// ✨ создание glow
const createGlow = ({ x, y, size, blur = 80, opacity = 1, rotate = -45 }) => {
  const el = document.createElement("span");

  el.style.left = x + "%";
  el.style.top = y + "px";
  el.style.width = size + "px";
  el.style.height = size / 8 + "px";
  el.style.transform = `rotate(${rotate}deg)`;
  el.style.filter = `blur(${blur}px)`;
  el.style.opacity = opacity;

  container.appendChild(el);
};

// 🧠 оптимизация
let currentBp = null;
let lastHeight = 0;

// 🎯 рендер
const renderGlows = () => {
  const bp = getBreakpoint();
  const pageHeight = getPageHeight();

  if (bp === currentBp && Math.abs(pageHeight - lastHeight) < 200) return;

  currentBp = bp;
  lastHeight = pageHeight;

  container.innerHTML = "";

  const pattern = GLOW_CONFIG[bp];
  const patternHeight = getPatternHeight(pattern);

  let offsetY = 0;
  let iteration = 0;

  while (offsetY < pageHeight + patternHeight) {
    pattern.forEach((item) => {
      createGlow({
        ...item,
        y: item.y + offsetY,

        // 🔥 лёгкая вариативность (убирает "копипасту")
        x: item.x + (iteration % 2 ? 5 : 0),
        opacity: item.opacity ?? 1,
      });
    });

    offsetY += patternHeight;
    iteration++;
  }
};

// 🚀 init
const initGlows = () => {
  renderGlows();

  window.addEventListener(
    "resize",
    throttle(() => {
      renderGlows();
    }, 150),
  );
};

container && initGlows();
