function changeToLoginForm() {
  document.getElementsByClassName("forms__container")[0].style.height = "400px";
  document.getElementsByClassName("login_form")[0].style.left = "0";
  document.getElementsByClassName("register_form")[0].style.left = "150%";

  const form_selector_buttons = document.getElementsByClassName(
    "form__selector_button"
  );
  form_selector_buttons[0].className =
    "form__selector_button form__selector_button--active";
  form_selector_buttons[1].className = "form__selector_button";
}

function changeToRegisterForm() {
  document.getElementsByClassName("forms__container")[0].style.height = "450px";
  document.getElementsByClassName("login_form")[0].style.left = "-150%";
  document.getElementsByClassName("register_form")[0].style.left = "0%";

  const form_selector_buttons = document.getElementsByClassName(
    "form__selector_button"
  );
  form_selector_buttons[0].className = "form__selector_button";
  form_selector_buttons[1].className =
    "form__selector_button form__selector_button--active";
}
