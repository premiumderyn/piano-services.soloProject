import { validateForm } from "./validation.js";
import { initBurgerMenu } from './burger.js';

const form = document.querySelector("form");
const email = document.getElementById("email");
const message = document.getElementById("message");

form.addEventListener("submit", function (e) {
    const error = validateForm(email, message);

    if (error) {
        e.preventDefault();
        alert(error);
    }
});

document.addEventListener("DOMContentLoaded", () => {
    initBurgerMenu();
});