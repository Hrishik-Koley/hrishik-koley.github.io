document.addEventListener("DOMContentLoaded", function () {
  const logoElement = document.querySelector(".logo__text")
  const text = logoElement.textContent
  logoElement.textContent = ""

  let i = 0
  const typeWriter = () => {
    if (i < text.length) {
      logoElement.textContent += text.charAt(i)
      i++
      setTimeout(typeWriter, 200)
    }
  }

  typeWriter()
})
