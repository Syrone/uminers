import { throttle } from "../functions/throttle.js";

const SELECTOR = "[data-layout-height]";

const setLayoutHeightVar = (el) => {
  const height = el.offsetHeight;
  el.style.setProperty("--_layout-height", `${height}px`);
};

const updateAll = () => {
  const elements = document.querySelectorAll(SELECTOR);
  elements.forEach(setLayoutHeightVar);
};

const initLayoutHeight = () => {
  updateAll();

  window.addEventListener(
    "resize",
    throttle(() => {
      updateAll();
    }, 100),
  );

  // если контент может динамически меняться
  const resizeObserver = new ResizeObserver((entries) => {
    for (const entry of entries) {
      setLayoutHeightVar(entry.target);
    }
  });

  document.querySelectorAll(SELECTOR).forEach((el) => {
    resizeObserver.observe(el);
  });
};

initLayoutHeight();
