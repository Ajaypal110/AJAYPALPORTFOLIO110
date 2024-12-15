// Email


const contactForm = document.getElementById('contact-form'),
      contactMessage =  document.getElementById('contact-message')

const sendEmail = (e) =>{
    e.preventDefault();

    emailjs.sendForm('Ajay@110125','template_erekb7i','#contact-form','0xjutl8DL6lunqORh')
    .then(() =>{
        contactMessage.textContent = 'Message Sent Successfully ✅'

     setTimeout(() =>{
        contactMessage.textContent = ''
     }, 5000)

      contactForm.reset()
    },() =>{
        contactMessage.textContent = ' Message not sent (service error) ❌'
    })
}
contactForm.addEventListener('submit',sendEmail)





const scrollUp = () =>{
    const scrollUp = document.getElementById('scroll_up')

    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                    : scrollUp.classList.remove('show-scroll')
}

window.addEventListener('scroll', scrollUp)





const sections = document.querySelectorAll('section[id]')
    
const scrollActive = () =>{
  	const scrollDown = window.scrollY

	sections.forEach(current =>{
		const sectionHeight = current.offsetHeight,
			  sectionTop = current.offsetTop - 58,
			  sectionId = current.getAttribute('id'),
			  sectionsClass = document.querySelector('.nav__list a[href*=' + sectionId + ']')

		if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
			sectionsClass.classList.add('active-link')
		}else{
			sectionsClass.classList.remove('active-link')
		}                                                    
	})
}
window.addEventListener('scroll', scrollActive)
