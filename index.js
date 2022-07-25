function contact(event) {
  event.preventDefault()
  const loading = document.querySelector(".modal__overlay--loading")
  const success = document.querySelector(".modal__overlay--success")
  loading.classList += " modal__overlay--visible"
  emailjs
    .sendForm(
      "service_ixruf82",
      "template_hdrdoj8",
      event.target,
      "user_dAU3g6AZMCL24O4sHSoQu"
    )
    .then(() => {
      loading.classList.remove("modal__overlay--visible")
      success.classList += " modal__overlay--visible"
    })
    .catch(() => {
      loading.classList.remove("modal__overlay--visible")
      alert(
        "The e-mail service is temporarily unavailable. Please contact me directly at ethan@ethansalonga.dev!"
      )
    })
}
