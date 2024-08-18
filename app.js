//Тоглогчийн ээлжийн хадгалах хувьсагчийг хадгалах хувьсагч, нэг-р тоглогчийг 0, хоёрдугаар тоглогчийг 1
var activePlayer = 1;

//Тоглогчийн цуглуулсан оноог хадгалах хувьсагч
var scores = [0, 0];

//Тоглогчийн ээлжиндээ цуглуулж байгаа оноог хадгалах хувьсагч
var roundScore = 0;

//Шооны буусан тоог хадгалах
var dice = Math.floor(Math.random() * 6) + 1;
console.log(dice);

// <div class="player-score" id="score-0">43</div>
// document.querySelector("#score-0").innerHTML = dice;

//htmlTag.innerHTML --> тухайн таг доторх руу таг эсвэл
//                      бичвэр оруулахдаа ашиглана

//htmlTag.textContent --> тухайн таг дотор бичвэр
//                        оруулахдаа ашиглана

//Программ эхлэхэд бэлтгье
document.querySelector("#score-0").textContent = 0;
document.querySelector("#score-1").textContent = 0;

document.querySelector("#current-0").textContent = 0;
document.querySelector("#current-1").textContent = 0;

document.querySelector(".dice").style.display = "none";
