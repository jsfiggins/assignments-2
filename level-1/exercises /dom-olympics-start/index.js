const header = document.createElement("h1");
header.textContent = "JavaScript Made This!!";
header.style.fontSize= "40px";
header.style.textAlign = "center";
document.body.prepend(header);

const subTitle = document.createElement("p");
subTitle.innerHTML = "<span style = 'color:purple;font-style: italic'>Jaseane</span> wrote this Javascript";
subTitle.style.textAlign = "center"
subTitle.style.fontSize = "20px";
header.append(subTitle);

const messages = document.getElementsByClassName("message");

messages[0].textContent = "I had a dream I could fly!"
messages[1].textContent = "Wow, I wonder how it'd feel to fly like Superman."
messages[2].textContent = "It was surreal in the dream, I was upset at my alarm for going off."
messages[3].textContent = "I guess I'll have to go skydiving to one up you."

const clear = document.getElementById("clear-button");
const funMessages = document.querySelector(".messages");

clear.addEventListener("click",clearMessages);
function clearMessages (){
    funMessages.textContent = ""
};
