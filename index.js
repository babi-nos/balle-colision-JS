// const btnStart = document.getElementById("btn");
// const balle = document.querySelector(".balle");
// const title = document.querySelector(".title");
// const letterS = document.getElementById("rotateTitle");

// const element1 = document.getElementById("element1");
// const element2 = document.getElementById("element2");

// function detectCollision() {
//   balle.style.left = "58%";
//   const rect1 = balle.getBoundingClientRect(); //ICi nous avons la possition excat de nos element
//   const rect2 = letterS.getBoundingClientRect();

//   if (
//     rect1.right >= rect2.left &&
//     rect1.left <= rect2.right &&
//     rect1.bottom >= rect2.top &&
//     rect1.top <= rect2.bottom
//   ) {
//       letterS.classList.add("rotate");
//       balle.style.rotate = "75deg";
//       balle.style.left = "65%";
//       balle.style.top = "50%";
//       console.log("Les éléments se touchent !");
//   } else {
//     console.log("Les éléments ne se touchent pas.");
//   }
// }

// setInterval(()=> detectCollision, 5)
// btnStart.addEventListener("click", detectCollision);
const btnStart = document.getElementById("btn");
const balle = document.querySelector(".balle");
const title = document.querySelector(".title");
const letterS = document.getElementById("rotateTitle");
const img = document.getElementById("img");

// const element1 = document.getElementById("element1");
// const element2 = document.getElementById("element2");

let animationInterval; // Variable pour stocker l'ID de l'intervalle

function detectCollision() {
  const rect1 = balle.getBoundingClientRect();
  const rect2 = letterS.getBoundingClientRect();
  const rect3 = btnStart.getBoundingClientRect();
  img.style.left = "-10%";
  img.style.rotate = "2deg";


  if (
    rect1.right >= rect2.left &&
    rect1.left <= rect2.right &&
    rect1.bottom >= rect2.top &&
    rect1.top <= rect2.bottom
  ) {
    letterS.classList.add("rotate");
    balle.style.rotate = "4320deg";
    balle.style.left = "65%";
    balle.style.top = "75%";
    console.log("Les éléments se touchent !");
  } else if (
    rect1.right >= rect3.left &&
    rect1.left <= rect3.right &&
    rect1.bottom >= rect3.top &&
    rect1.top <= rect3.bottom
  ) {
    btnStart.classList.add("anim");
    balle.style.width = "700px";
    balle.style.left = "45%";

    // btnStart
  } else {
    console.log("Les éléments ne se touchent pas.");
  }
}

function startAnimation() {
  img.style.left = "-11%";
  img.style.rotate = "1deg";
  balle.style.left = "100%";
  balle.style.opacity = 1;

  let elapsedTime = 0; // Temps écoulé depuis le début de l'animation

  animationInterval = setInterval(() => {
    detectCollision();
    elapsedTime += 10; // Incrémenter le temps écoulé par l'intervalle

    if (elapsedTime >= 5000) {
      clearInterval(animationInterval); // Arrêter l'intervalle après 5 secondes
    }
  }, 1); // Intervalles de 100 millisecondes
}


btnStart.addEventListener("click", startAnimation);
