const mainImg = document.querySelector(".main-img");
const thumbs = document.querySelectorAll(".thumbs img");

thumbs.forEach(function(thumb) {
  thumb.addEventListener("click", function() {
    mainImg.src = thumb.src;
  });
});

const minusBtn = document.querySelector(".qty button:first-child");
const plusBtn = document.querySelector(".qty button:last-child");
const qtyText = document.querySelector(".qty span");

let qty = 1;

plusBtn.addEventListener("click", function() {
  qty++;
  qtyText.innerText = qty;
});

minusBtn.addEventListener("click", function() {
  if(qty > 1){
    qty--;
    qtyText.innerText = qty;
  }
});
