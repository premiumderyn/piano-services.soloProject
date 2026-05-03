const myBtn = document.getElementById("btn-back-send");

export const func = myBtn.addEventListener("click",  () => {
    console.log("Button clicked");
    fetch('/api/values')
    .then(response => response.json())
    .then(data => alert(data.message))
});