const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const overlay = $(".modal");
const register_btn = $(".Register");
const login_btn = $(".Login");
const back_register_btn = $(".Back-Register");
const back_login_btn = $(".Login-Register");
const forms = $$(".auth-form");

register_btn.onclick = function () {
   overlay.classList.remove("hidden");
   forms[0].classList.remove("hidden");
};

login_btn.onclick = function () {
   overlay.classList.remove("hidden");
   forms[1].classList.remove("hidden");
};

back_register_btn.onclick = function () {
   overlay.classList.add("hidden");
   forms[0].classList.add("hidden");
};

back_login_btn.onclick = function () {
   overlay.classList.add("hidden");
   forms[1].classList.add("hidden");
};
