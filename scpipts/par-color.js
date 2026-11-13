const userName = prompt("Как вас зовут?");
const newParagraphHTML = 
    `<p class="par green"> Привет, ${userName}!</p>`;
    firstPar.insertAdjacentHTML(`beforebegin`, newParagraphHTML);
