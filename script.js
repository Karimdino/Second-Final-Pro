

//++++++++++++++++++++++++++++
let count = 0
const slidePic = ()=>{
    
    let i
    let pictures = document.querySelectorAll('.slides')
    for(i = 0; i < pictures.length; i++){
        pictures[i].style.display = 'none'
    }
    count++
    if(count === pictures.length) {count = 0}
    pictures[count].style.display = 'block'
    setTimeout(slidePic, 3500)
}
slidePic()



//---Karim- Slideshow----
let i = 0;
let slideImg = ["../pic/pic13.jpg","../pic/pic12.jpg","../pic/pic11.jpg","../pic/pic10.jpg","../pic/pic6.jpg"]

let slideShow = function () {
    document.simg.src = slideImg[i];

    if (i < slideImg.length - 1) {
        i++;
    } else {
        i = 0;
    }
    setTimeout("slideShow()",2000)
}

slideShow()


//.....Karim.....Sign in Function .......

const form = document.querySelector("form");
eField = form.querySelector(".email"),
eInput = eField.querySelector("input"),
pField = form.querySelector(".password"),
pInput = pField.querySelector("input");
form.onsubmit = (e)=>{
  e.preventDefault(); //preventing from form submitting
  //if email and password is blank then add shake class in it else call specified function
  (eInput.value == "") ? eField.classList.add("shake", "error") : checkEmail();
  (pInput.value == "") ? pField.classList.add("shake", "error") : checkPass();
  setTimeout(()=>{ //remove shake class after 500ms
    eField.classList.remove("shake");
    pField.classList.remove("shake");
  }, 500);
  eInput.onkeyup = ()=>{checkEmail();} //calling checkEmail function on email input keyup
  pInput.onkeyup = ()=>{checkPass();} //calling checkPassword function on pass input keyup
  function checkEmail(){ //checkEmail function
    let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/; //pattern for validate email
    if(!eInput.value.match(pattern)){ //if pattern not matched then add error and remove valid class
      eField.classList.add("error");
      eField.classList.remove("valid");
      let errorTxt = eField.querySelector(".error-txt");
      //if email value is not empty then show please enter valid email else show Email can't be blank
      (eInput.value != "") ? errorTxt.innerText = "Enter a valid email address" : errorTxt.innerText = "Email can't be blank";
    }else{ //if pattern matched then remove error and add valid class
      eField.classList.remove("error");
      eField.classList.add("valid");
    }
  }
  function checkPass(){ //checkPass function
    if(pInput.value == ""){ //if pass is empty then add error and remove valid class
      pField.classList.add("error");
      pField.classList.remove("valid");
    }else{ //if pass is empty then remove error and add valid class
      pField.classList.remove("error");
      pField.classList.add("valid");
    }
  }
  //if eField and pField doesn't contains error class that mean user filled details properly
  if(!eField.classList.contains("error") && !pField.classList.contains("error")){
    window.location.href = form.getAttribute("action"); //redirecting user to the specified url which is inside action attribute of form tag
  }
}


// FAQ

const questions = document.querySelectorAll(".question");



questions.forEach((question) =>
  question.addEventListener("click", () => {
    if (question.parentNode.classList.contains("active")) {
      question.parentNode.classList.toggle("active");
    } else {
      questions.forEach((question) =>
        question.parentNode.classList.remove("active")
      );
      question.parentNode.classList.add("active");
    }
  })
);


const faqOpen = document.getElementById('faq-open')
const accordion_wrapper = document.getElementsByClassName('accordion_wrapper')[0]
const faqClose = document.getElementById('icon_close')

    const openAccordion = ()=>{
      accordion_wrapper.style.display = 'block'
    }
    faqOpen.addEventListener('click', openAccordion)

    const closeAccordion = ()=>{
      accordion_wrapper.style.display = 'none'
    }
    faqClose.addEventListener('click', closeAccordion)

    





