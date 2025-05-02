let img = [
  "./Image/Screenshot 2025-05-01 193258.png",
  "./Image/images.png",
];
document.querySelectorAll(".qr-cod").forEach((qrCod) => {
  let qrZoom = qrCod.closest(".card_sec").querySelector(".qr_zoom");
  qrCod.addEventListener("mouseenter", () => {
    let numberIndex = qrCod.getAttribute("data-img");
    qrZoom.innerHTML = `<img src="${img[numberIndex]}" alt="qr" />`;
    qrCod.style.zIndex = "10";
    qrCod.style.opacity = "0.05";
    qrZoom.style.display = "flex";
  });
  qrCod.addEventListener("mouseleave", () => {
    qrZoom.style.display = "none";
    qrCod.style.zIndex = "";
    qrCod.style.opacity = "1";
    qrZoom.innerHTML ="";
  });
});
