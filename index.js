// DOM ELEMENTS
const shareDiv = document.querySelector('.share')
const shareIcon = document.querySelector('.share_icon')
const popup = document.querySelector('.popup')

shareDiv.addEventListener('mouseover', () => {
    shareIcon.style.fill = 'white'
    shareDiv.style.backgroundColor = "hsl(214, 17%, 51%)";
})

shareDiv.addEventListener("mouseleave", () => {
  console.log("hey");
  shareIcon.style.fill = "#6E8098";
  shareDiv.style.backgroundColor = "hsl(210, 46%, 95%)";
});

shareDiv.addEventListener('click', () => {
    popup.classList.toggle('showPop')
})
