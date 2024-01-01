const stars = document.querySelectorAll(".fa-star");
const emojis = document.querySelectorAll(".far");
const colorsArray = ["red", "orange", "blue", "aqua", "green"];

updateRating(0);

stars.forEach((star, index) => {
  star.addEventListener("click", () => {
    updateRating(index);
  });
});

function updateRating(index) {
  stars.forEach((star, idx) => {
    if (idx < index + 1) {
      star.classList.add("active");
    } else {
      star.classList.remove("active");
    }
  });

  emojis.forEach((emoji) => {
    emoji.style.transform = `translateX(-${index * 102}px)`;
    emoji.style.color = colorsArray[index];
  });
}
