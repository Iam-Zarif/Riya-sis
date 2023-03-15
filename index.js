let name = document.getElementById("name");
let email = document.getElementById("email");
let textarea = document.getElementById("textarea");

window.onload = () => {
  let nameFromStorage = localStorage.getItem("Name");
  if (nameFromStorage !== null) {
    let liSection = document.getElementById("liSection");
    let newSection = document.createElement("li");
    newSection.innerText = `Name : ${nameFromStorage}`;

    liSection.appendChild(newSection);
  }
  let emailFromStorage = localStorage.getItem("Email");
  if (emailFromStorage !== null) {
    let liSection = document.getElementById("liSection");
    let newSectionEmail = document.createElement("li");
    newSectionEmail.innerText = `Email : ${emailFromStorage}`;
    liSection.appendChild(newSectionEmail);
  }
};
let subName = () =>{
    console.log(name.value);
    let liSection = document.getElementById("liSection");
let newSection = document.createElement('li');
newSection.innerText = `Name : ${name.value}`;
liSection.appendChild(newSection);
localStorage.setItem("Name", name.value);
    name.value=''
}
let subEmail =() =>{
    console.log(email.value);
    let liSection = document.getElementById("liSection");
let newSection = document.createElement('li');
    newSection.innerText = `Email : ${email.value}`;
    liSection.appendChild(newSection);
    localStorage.setItem("Email", email.value);
    email.value ='';
}

let subFeedBack =() =>{
    console.log(textarea.value);
    let liSection = document.getElementById("liSection");
let newSection = document.createElement('li');
    newSection.innerText = `Feedback : ${textarea.value}`;
    liSection.appendChild(newSection);
    localStorage.setItem("FeedBack", textarea.value);
    textarea.value ='';
    
}


