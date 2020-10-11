const nameRegex = /^[A-Za-zäÄëËïÏöÖüÜáéíóúáéíóúÁÉÍÓÚÂÊÎÔÛâêîôûàèìòùÀÈÌÒÙñÑ ]*$/
const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
const phoneRegex = /^\d+$/
const name = document.getElementById('name')
const email = document.getElementById('email')
const phone = document.getElementById('phone')
const redName = document.getElementById('name-error')
const redEmail = document.getElementById('email-error')
const redPhone = document.getElementById('phone-error')
const form = document.getElementById('form')
const modal = document.getElementById('modal')
const modalContainer = document.getElementById('modalContainer')
const modalElems = document.getElementsByClassName('modals')
const closeModal = document.getElementById('closeModal')

const validateName = name => {
    if (!nameRegex.test(name)) {
        redName.innerHTML = 'Solo se permiten letras y acentos'
        return true
    }
    return false
}

const validateEmail = email => {
    if (!emailRegex.test(email)) {
        redEmail.innerHTML = `${email} no es un email válido`
        return true
    }
    return false
}

const validatePhone = phone => {
    if (!phoneRegex.test(phone)) {
        redPhone.innerHTML = `${phone} no es un email válido`
        return true
    }
    return false
}

const handleSubmit = e => {
    e.preventDefault()

    const nameError = validateName(name.value)
    const emailError = validateEmail(email.value)
    const phoneError = validatePhone(phone.value)
    
    console.log('name.value', name.value);
    console.log('email.value', email.value);
    console.log('phone.value', phone.value);

    if (!nameError && !emailError && !phoneError) {
        console.log('fetch');
        modalContainer.style.position = "fixed";
        modalContainer.style.display = "flex";
        for (let i = 0; i < modalElems.length; i++) {
            modalElems[i].style.display = "block";
        }
    }
}

const handleChange = () => {
    redName.innerHTML = ''
    redEmail.innerHTML = ''
    redPhone.innerHTML = ''
}

const handleCloseModal = () => {
    console.log('cerrar modal');
    modalContainer.style.position = "inherit";
    modalContainer.style.display = "none";
    for (let i = 0; i < modalElems.length; i++) {
        modalElems[i].style.display = "none";
    }
    name.value = ''
    email.value = ''
    phone.value = ''
}

closeModal.addEventListener('submit', handleCloseModal)

form.addEventListener('submit', handleSubmit)
form.addEventListener('change', handleChange)