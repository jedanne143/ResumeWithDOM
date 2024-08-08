
const header = document.getElementById("topContainer")
const skill = document.getElementById("skillContainer")
const edu = document.getElementById("educationContainer")
const work = document.getElementById("workContainer")

function changeBorder() {
    header.style.border = "3px solid #C5705D";
}
function changeBorder2() {
    skill.style.border = "3px solid brown";
}
function changeBorder3() {
    edu.style.border = "3px solid #C5705D";
}
function changeBorder4() {
    work.style.border = "3px solid #C5705D";
}
//eventlistener for borders
header.addEventListener("mouseover", changeBorder);
skill.addEventListener("mouseover", changeBorder2);
edu.addEventListener("mouseover", changeBorder3);
work.addEventListener("mouseover", changeBorder4);



//arrow function to fire when click event happens
const addSkill =  () => {
    
    document.getElementById("skill1").innerText += "HTML, CSS, JavaScript, ExpressJS, ReactJS, NodeJS"
    document.getElementById("skill2").innerText +=  "MongoDB"
    document.getElementById("skill3").innerText += "VisualStudio, Gitbash, MongoDB Compass, React DevTools, NPM"
    skill.style.backgroundColor = "#f5e4d8";
    //remove Skill button and prevent further addition of contents
    const skillP = document.getElementById("skillP")
    const skillC =document.getElementById("skills")
    skillP.removeChild(skillC)
    skillP.innerText = "TECHNICAL SKILLS"
   
}

const addEdu = () => {
    edu.style.backgroundColor = "#f5e4d8";
    const e1 = document.createElement("div")
    e1.innerText = "Perscholas.org | Pittsburgh , USA | 6/2024 to 10/2024"
    edu1.appendChild(e1)
    const e2 = document.createElement("div")
    e2.innerText = "Saint Louis University | Baguio, Philippines | 6/2009 to 3/2014"
    edu2.appendChild(e2)
    //remove Education button and prevent further addition of contents
    const eduP = document.getElementById("eduP")
    const eduC =document.getElementById("education")
    eduP.removeChild(eduC)
    eduP.innerText = "EDUCATION"
}

const addWork = () => {
    work.style.backgroundColor = "#f5e4d8";
    const w = document.getElementById("workContent")
    w.style.display = "inline"
    //remove Education button and prevent further addition of contents
    const workP = document.getElementById("workP")
    const workC = document.getElementById("work")
    workP.removeChild(workC)
    workP.innerText = "WORK EXPERIENCE"

 }