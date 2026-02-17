const mainImg = document.querySelector(".main-img");
const thumbs = document.querySelectorAll(".thumbs img");

thumbs.forEach(function(thumb) {
  thumb.addEventListener("click", function() {
    mainImg.src = thumb.src;
  });
});
