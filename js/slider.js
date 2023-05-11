const slider = document.querySelector(".slider");
const cards = document.querySelector(".cards");
const card = document.querySelectorAll(".card");

let startX, scrollLeft, isDown = false;

slider.addEventListener("mousedown", e => {
  isDown = true;
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
  slider.style.cursor = "grabbing";
});

slider.addEventListener("mouseleave", () => {
  isDown = false;
  slider.style.cursor = "grab";
});

slider.addEventListener("mouseup", () => {
  isDown = false;
  slider.style.cursor = "grab";
});

slider.addEventListener("mousemove", e => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const walk = (x - startX) * 3;
  slider.scrollLeft = scrollLeft - walk;
});

cards.addEventListener("scroll", () => {
  card.forEach(card => {
    const slideInAt = (cards.scrollLeft + window.innerWidth) - card.offsetWidth / 2;
    const cardLeft = card.offsetLeft + card.offsetWidth / 2;
    const isHalfShown = slideInAt > card.offsetLeft;
    const isNotScrolledPast = cards.scrollLeft < cardLeft;
    if (isHalfShown && isNotScrolledPast) {
      card.classList.add("active");
    } else {
      card.classList.remove("active");
    }
  });
});
