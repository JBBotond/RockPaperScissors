const userRock = document.querySelector("#rock");
const userPaper = document.querySelector("#paper");
const userScissors = document.querySelector("#scissors");
const gepValasz = document.querySelector("#gepValasz");
const fegyverek = document.querySelector(".fegyverek");

let userValasz;
let generaltValasz;
let valasztottFegyver;

var imageRock = document.getElementById("rock");
var imagePaper = document.getElementById("paper");
var imageScissors = document.getElementById("scissors");
var imageGep = document.getElementById("gep");

userRock.addEventListener("click", valaszRock);
userPaper.addEventListener("click", valaszPaper);
userScissors.addEventListener("click", valaszScissors);
//fegyverek.addEventListener("click", valaszGeneral); 

function valaszRock() {
    userValasz = 1;
    console.log(userValasz);
    valaszGeneral();
}

function valaszPaper() {
    userValasz = 2;
    console.log(userValasz);
    valaszGeneral();
}

function valaszScissors() {
    userValasz = 3;
    console.log(userValasz);
    valaszGeneral();
}

function valaszGeneral() {
    generaltValasz = Math.random();
    console.log(generaltValasz);
    if (generaltValasz <= 0.33)
    {
        valasztottFegyver = 1;  
        imageGep.src = "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fpurepng.com%2Fpublic%2Fuploads%2Flarge%2Fpurepng.com-stones-and-rocksstonerockmineralmaterialbuilding-1411527100656uer4h.png&f=1&nofb=1&ipt=d66bd3e7e6156dd6c902c66ad02ef17f90c1461171c3d2f15ec4703a2e64657c&ipo=images";
    }
    else if (generaltValasz <= 0.66)
    {
        valasztottFegyver = 2;
        imageGep.src = "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fassets.ellosgroup.com%2Fi%2Fellos%2Fell_1501267-01_Fs&f=1&nofb=1&ipt=30be76035df6332a5fd1e4ebc607ce649b6afa49244ef0e3d9f92c1d450fee30&ipo=images";
    }
    else {
        valasztottFegyver = 3;    
        imageGep.src = "https://pngimg.com/uploads/scissors/scissors_PNG5.png";
    }
    console.log(valasztottFegyver);
    setTimeout(eredmenySzamit, 1000);
}

function eredmenySzamit() {
    if (userValasz === 1)
        {
            if (valasztottFegyver === 1)
                egyenloseg();
              else if (valasztottFegyver === 2)
                veszteseg();
              else if (valasztottFegyver === 3)
                gyozelem();
        }
      else if (userValasz === 2)
      {
            if (valasztottFegyver === 1)
                gyozelem();
              else if (valasztottFegyver === 2)
                egyenloseg();
              else if (valasztottFegyver === 3)
                veszteseg();
      }
      else if (userValasz === 3)
      {
            if (valasztottFegyver === 1)
                veszteseg();
              else if (valasztottFegyver === 2)
                gyozelem();
              else if (valasztottFegyver === 3)
                egyenloseg();
      }
}

function veszteseg() {
    const para = document.createElement("p");
    para.innerText = "You lose!";
    para.style.background = "red";
    para.style.position = "relative"; // Ensure the element has a positioned ancestor
    para.style.height = "100px";
    para.style.textAlign = "center";
    para.style.fontSize = "xx-large";
    para.style.zIndex = 9999; // Set a high z-index value
    document.body.appendChild(para); // Append the element to the body or an appropriate container
}

function gyozelem() {
    const para = document.createElement("p");
    para.innerText = "You win! Felicitacion!";
    para.style.background = "green";
    para.style.position = "relative"; // Ensure the element has a positioned ancestor
    para.style.height = "100px";
    para.style.textAlign = "center";
    para.style.fontSize = "xx-large";
    para.style.zIndex = 9999; // Set a high z-index value
    document.body.appendChild(para); // Append the element to the body or an appropriate container
}

function egyenloseg() {
    const para = document.createElement("p");
    para.innerText = "Draw, try again!";
    para.style.background = "yellow";
    para.style.alignItems = "center";
    para.style.position = "relative"; // Ensure the element has a positioned ancestor
    para.style.height = "100px";
    para.style.textAlign = "center";
    para.style.fontSize = "xx-large";
    para.style.zIndex = 9999; // Set a high z-index value
    document.body.appendChild(para); // Append the element to the body or an appropriate container
}

