document.querySelectorAll("[data-video]").forEach((block) => {
  const video = block.querySelector("video");
  const btn = block.querySelector(".video-play");
  const poster = block.querySelector(".video-poster");

  btn.addEventListener("click", () => {
    video.play();

    // скрываем постер и кнопку
    poster.style.display = "none";
    btn.style.display = "none";
  });
});
