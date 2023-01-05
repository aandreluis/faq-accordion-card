const accordions = document.querySelectorAll(".accordion-tittle") //get all accordions

for (let i = 0; i < accordions.length; i++) {
  accordions[i].addEventListener("click", () => {
    closeOpenAccordion() //*optional function*

    accordions[i].classList.toggle("accordion-active")
    let accordionText = accordions[i].nextElementSibling //get the next element: div.accordion-tittle -> div.accordion-text

    if (accordionText.style.display === "block") {
      accordions[i].classList.remove("accordion-active")
      accordionText.style.animation = "fadeOut 0.3s ease" //add animation
      accordionText.style.maxHeight = 0 //max-height = 0px
      setTimeout(() => {
        accordionText.style.display = "none" //delay for add display none
      }, 500) //500 == 0.5s
    } else {
      accordionText.style.display = "block"
      accordionText.style.maxHeight = accordionText.scrollHeight + "px" //add max-height = scrollHeight property
      accordionText.style.animation = "translateBottom 0.5s ease" //add animation
    }
  })
}

//Close other accordion, Obs: *optional function*
function closeOpenAccordion() {
  for (let i = 0; i < accordions.length; i++) {
    if (accordions[i].classList.contains("accordion-active") == true) {
      //if contains the class="accordion-active"
      accordions[i].classList.remove("accordion-active")
      let accordionText = accordions[i].nextElementSibling
      if (accordionText.style.display === "block") {
        accordionText.style.maxHeight = 0
        accordionText.style.animation = "translateTop 0.5s ease"
        setTimeout(() => {
          accordionText.style.display = "none"
        }, 500)
      }
    }
  }
}
