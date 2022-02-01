const nav = document.querySelector(".nav"),
  navList = nav.querySelectorAll("li"),
  totalNavList = navList.length,
  allSection = document.querySelectorAll(".section"),
  totalSection = allSection.length;

for (let i = 0; i < totalNavList; i++) {
  const a = navList[i].querySelector("a");
  a.addEventListener("click", function () {
    for (let i = 0; i < totalSection; i++) {
      allSection[i].classList.remove("back-section");
    }
    for (let j = 0; j < totalNavList; j++) {
      if (navList[j].querySelector("a").classList.contains("active")) {
        allSection[j].classList.add("back-section");
      }
      navList[j].querySelector("a").classList.remove("active");
    }
    this.classList.add("active");
    showSection(this);
  });
}

function showSection(element) {
  for (let i = 0; i < totalSection; i++) {
    allSection[i].classList.remove("active");
  }
  const target = element.getAttribute("href").split("#")[1];
  document.querySelector("#" + target).classList.add("active");
}

function updateNav(element) {
  for (let i = 0; i < totalNavList; i++) {
    navList[i].querySelector("a").classList.remove("active");
    const target = element.getAttribute("href").split("#")[1];
    if (
      target ===
      navList[i].querySelector("a").getAttribute("href").split("#")[1]
    ) {
      navList[i].querySelector("a").classList.add("active");
    }
  }
}


// script for isTriangle 
const angles = document.querySelectorAll(".angle-input");
const isTriangleBtn = document.querySelector("#is-triangle-btn");
const outputMessage1 = document.querySelector("#output-message1");

function calculateSumOfAngles(angle1, angle2, angle3) {
  const sum = angle1 + angle2 + angle3;
  return sum;
}
function isTriangle() {
  const sum = calculateSumOfAngles(
    Number(angles[0].value),
    Number(angles[1].value),
    Number(angles[2].value)
  );
  // console.log(sum);
  if (sum === 180) {
    outputMessage1.innerText = "Yay, the angles form a triangle!🎉";
  } else {
    outputMessage1.innerText = "Oh no, the angles donot form a triangle!☹";
  }
}
isTriangleBtn.addEventListener("click", isTriangle);

// script for quiz
const quizForm = document.querySelector(".quiz-form");
const submitFormBtn = document.querySelector("#submit-form-btn");
const outputMessage2 = document.querySelector("#output-message2");

const correctAnswers = ["90°", "right angled"];

function calculateScore() {
  var score = 0;
  var index = 0;
  const formResults = new FormData(quizForm);
  for (let value of formResults.values()) {
    if (value === correctAnswers[index]) {
      score = score + 1;
    }
    index = index + 1;
  }
  // console.log(score);
  outputMessage2.innerText = "Your score is " + score + ".";
}
submitFormBtn.addEventListener("click", calculateScore);

var stop = document.querySelector("#quiz-form");
function handleRefresh(event) {
  event.preventDefault(); //prevents page-reload
}
stop.addEventListener("submit", handleRefresh);

// script for hypotenuse
const sides = document.querySelectorAll(".side-input");
const hypotenuseBtn = document.querySelector("#hypotenuse-btn");
const outputMessage3 = document.querySelector("#output-message3");

function sumOfSquares(a, b) {
  const sum = a * a + b * b;
  return sum;
}
function calculateHypotenuse() {
  const a = Number(sides[0].value);
  const b = Number(sides[1].value);
  const hypotenuse = Math.sqrt(sumOfSquares(a, b));
  outputMessage3.innerText =
    "The hypotenuse of the triangle is " + hypotenuse + "cm.";
}
hypotenuseBtn.addEventListener("click", calculateHypotenuse);

// script for area
const inputs = document.querySelectorAll(".inputs");
const areaBtn = document.querySelector("#area-btn");
const outputMessage4 = document.querySelector("#output-message4");

function calculateArea() {
  const base = Number(inputs[0].value);
  const height = Number(inputs[1].value);
  const area = 0.5 * base * height;
  outputMessage4.innerText = "The area of the triangle is " + area + "cm².";
}
areaBtn.addEventListener("click", calculateArea);
