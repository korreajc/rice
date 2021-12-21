function infoForm(){
    const main = document.getElementById("main")
    const contactForm = document.createElement("div")
    const infoFormHeader = document.createElement("h1")
    const phoneDiv = document.createElement("div")
    const num1 = document.createElement("h2")
    const num2 = document.createElement("h2")
    const phone1 = document.createElement("p")
    const phone2 = document.createElement("p")

    phone1.innerHTML = "(209)777-7777"
    phone2.innerHTML = "(209)888-8888"
    infoFormHeader.innerHTML = "Contact Us"
    num1.innerHTML = "Truck Phone"
    num2.innerHTML = "Personal Phone"


    phone1.classList.add("phoneNumbers")
    phone2.classList.add("phoneNumbers")
    num1.classList.add("headers")
    num2.classList.add("headers")

    phoneDiv.setAttribute("id", "phoneSection")
    infoFormHeader.setAttribute("id", "infoHeader")
    contactForm.setAttribute("id", "infoForm");


    contactForm.appendChild(infoFormHeader)
    phoneDiv.appendChild(num1)
    phoneDiv.appendChild(phone1)
    phoneDiv.appendChild(num2)
    phoneDiv.appendChild(phone2)

    contactForm.appendChild(phoneDiv)
    main.appendChild(contactForm);
}

export {infoForm}