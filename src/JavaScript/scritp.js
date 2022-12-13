const $form = document.getElementById("form");
$form.addEventListener("submit", enviar);
function enviar(event) {
  event.preventDefault();
  const email = $form.email.value;
  const pass = $form.pass.value;

  localStorage.setItem("email", email);
  localStorage.setItem("pass", pass);
  $form.reset();
}
