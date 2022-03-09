
const accBtn = document.querySelectorAll(".accordion");


for(let i = 0; i<accBtn.length; i++) {
    accBtn[i].addEventListener("click", function() {
        this.classList.toggle("active");
    });
}
