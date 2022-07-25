let isModalOpen = false
let contrastToggle = false

function toggleContrast() {
  contrastToggle = !contrastToggle
  if (contrastToggle) {
    document.body.classList += " dark-theme"
  } else {
    document.body.classList.remove("dark-theme")
  }
}

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

function toggleModal() {
  if (isModalOpen) {
    isModalOpen = false
    return document.body.classList.remove("modal--open")
  }
  isModalOpen = true
  document.body.classList += " modal--open"
}
