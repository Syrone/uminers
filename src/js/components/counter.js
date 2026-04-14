document.querySelectorAll("[data-counter]").forEach((container) => {
  const input = container.querySelector("[data-counter-current]");
  const increment = container.querySelector("[data-counter-increment]");
  const decrement = container.querySelector("[data-counter-decrement]");

  if (!input) return;

  function normalizeValue() {
    if (input.value === "") {
      input.value = "0";
    }
  }

  function updateInputWidth() {
    const length = input.value.length || 1;
    input.style.width = `${length}ch`;
  }

  // Изначально
  normalizeValue();
  updateInputWidth();

  // "+"
  increment?.addEventListener("click", () => {
    let value = parseInt(input.value, 10) || 0;
    input.value = value + 1;
    updateInputWidth();
  });

  // "-"
  decrement?.addEventListener("click", () => {
    let value = parseInt(input.value, 10) || 0;
    input.value = Math.max(0, value - 1);
    updateInputWidth();
  });

  // Ввод
  input.addEventListener("input", () => {
    input.value = input.value.replace(/\D/g, "");
    updateInputWidth();
  });

  // Потеря фокуса — гарантируем не пусто
  input.addEventListener("blur", () => {
    normalizeValue();
    updateInputWidth();
  });
});
