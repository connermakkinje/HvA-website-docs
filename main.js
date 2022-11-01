// JavaScript source code
console.log("het werkt")

var navigation = document.getElementById("navigatie");
var toggleButton = document.getElementById("toggleMenu");
var isHidden = true;

function toggleMenu() {
    if (isHidden) {
        navigation.classList.remove("hidden")
        navigation.classList.add("show")
        isHidden = false;
    } else {
        navigation.classList.remove("show")
        navigation.classList.add("hidden")
        isHidden = true;
    }
}


toggleButton.addEventListener("click", toggleMenu)


console.log(navigation)
