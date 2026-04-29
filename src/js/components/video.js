document.querySelectorAll("[data-youtube]").forEach((block) => {
  const src = block.dataset.youtube;
  if (!src) return;

  const iframe = document.createElement("iframe");
  iframe.className = "video-media";
  iframe.src = src;
  iframe.allow =
    "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
  iframe.allowFullscreen = true;

  block.appendChild(iframe);
});
