import Choices from "choices.js";

const selectConfig = {
  allowHTML: true,
  placeholder: true,
  searchEnabled: false,
  shouldSort: false,
  itemSelectText: "",
  loadingText: "Загрузка...",
  noResultsText: "Результаты не найдены",
  noChoicesText: "Нет вариантов для выбора",
  classNames: {
    containerOuter: (element) => {
      const baseClass = "choices";
      const customClass = element.getAttribute("data-choice-class") || "";
      return `${baseClass} ${customClass}`.trim();
    },
  },
};

document.querySelectorAll("[data-choices]")?.forEach((select) => {
  const choice = new Choices(select, {
    ...selectConfig,
    classNames: {
      ...selectConfig.classNames,
      containerOuter: selectConfig.classNames.containerOuter(select),
    },
  });

  const inner = choice.containerInner.element;

  if (!inner.querySelector(".icon")) {
    inner.insertAdjacentHTML(
      "beforeend",
      `
        <span class="icon choices-icon">
          <svg>
            <use xlink:href="img/icons/dropdown.svg#svg-dropdown"></use>
          </svg>
        </span>
      `,
    );
  }
});
