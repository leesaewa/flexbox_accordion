
const accBtn = document.getElementsByClassName("acc-btn");
let i;

for (i = 0; i < accBtn.length; i++) {
    accBtn[i].addEventListener("click", function() { 
        this.classList.toggle("active");
        const accContent = this.nextElementSibling;
        if (!this.classList.contains("active")) {
            accContent.style.display = "none";
        } else {
            accContent.style.display = "block";
        } 
    }); 
}