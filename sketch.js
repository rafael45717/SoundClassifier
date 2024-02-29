console.log("versãoMl5", ml5.version);
let soundClassifier;

function preload() {
  soundClassifier = ml5.soundClassifier('speechComands18w');
}

function setup() {
  createCanvas(400, 400);
  soundClassifier.classify(obterResultados);
}

function obterResultados(error, results) {
  if (error) {
    console.log("erro");
    console.error(error);
  }
  console.log(results);
}
function draw() {
  background(220);
}