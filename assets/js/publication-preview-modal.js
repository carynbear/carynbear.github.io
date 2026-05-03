document.addEventListener("DOMContentLoaded", function () {
  const previews = document.querySelectorAll(".js-publication-preview");
  if (!previews.length) return;

  const overlay = document.createElement("div");
  overlay.className = "publication-preview-modal";
  overlay.innerHTML = `
    <button type="button" class="publication-preview-modal__backdrop" aria-label="Close preview"></button>
    <div class="publication-preview-modal__dialog" role="dialog" aria-modal="true" aria-label="Publication preview">
      <button type="button" class="publication-preview-modal__close" aria-label="Close preview">×</button>
      <img class="publication-preview-modal__image" alt="">
    </div>
  `;
  document.body.appendChild(overlay);

  const modalImage = overlay.querySelector(".publication-preview-modal__image");
  const backdrop = overlay.querySelector(".publication-preview-modal__backdrop");
  const closeButton = overlay.querySelector(".publication-preview-modal__close");

  function openPreview(src, alt) {
    modalImage.src = src;
    modalImage.alt = alt || "";
    overlay.classList.add("is-open");
    document.body.classList.add("publication-preview-modal-open");
  }

  function closePreview() {
    overlay.classList.remove("is-open");
    document.body.classList.remove("publication-preview-modal-open");
    modalImage.src = "";
  }

  previews.forEach((preview) => {
    preview.addEventListener("click", function () {
      openPreview(preview.dataset.previewFull || preview.src, preview.alt);
    });
  });

  backdrop.addEventListener("click", closePreview);
  closeButton.addEventListener("click", closePreview);
  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && overlay.classList.contains("is-open")) {
      closePreview();
    }
  });
});
