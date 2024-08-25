//Global хувьсагчдыг зарлая
var activePlayer; //Тоглогчийн ээлжийг тодорхойлох хувьсагч

var scores; //Хоёр тоглогчийн цуглуулсан оноонууд

var roundScore; //Идэвхтэй тоглогчийн цуглуулж буй ээлжийн оноо

var diceDom = document.querySelector(".dice");

//Тоглоомыг эхлүүлнэ
initGame();

//Тоглоомыг шинээр эхлүүлэх
function initGame() {
    //Тоглогчийн ээлжийн хадгалах хувьсагчийг хадгалах хувьсагч, нэг-р тоглогчийг 0, хоёрдугаар тоглогчийг 1
    activePlayer = 0;

    //Тоглогчийн цуглуулсан оноог хадгалах хувьсагч
    scores = [0, 0];

    //Тоглогчийн ээлжиндээ цуглуулж байгаа оноог хадгалах хувьсагч
    roundScore = 0;

    //Программ эхлэхэд бэлтгье
    document.getElementById("score-0").textContent = "0";
    document.getElementById("score-1").textContent = "0";

    document.getElementById("current-0").textContent = "0";
    document.getElementById("current-1").textContent = "0";

    //Тоглогчдын нэрийг буцааж хувиргах
    document.getElementById("name-0").textContent = "Player 1";
    document.getElementById("name-1").textContent = "Player 2";

    document.querySelector(".player-0-panel").classList.remove("winner");
    document.querySelector(".player-1-panel").classList.remove("winner");

    document.querySelector(".player-0-panel").classList.remove("active");
    document.querySelector(".player-1-panel").classList.remove("active");

    document.querySelector(".player-0-panel").classList.add("active");

    diceDom.style.display = "none";
}

//Roll Dice ажиллагаатай болгох eventListener
document.querySelector(".btn-roll").addEventListener("click", function () {
    // Шоонд зориулж 1 - 6 хүртлэх санамсаргүй тоог гаргаж авах
    var diceRandNumber = Math.floor(Math.random() * 6) + 1;

    //Шооны зургийг веб дээр гаргаж ирнэ
    diceDom.style.display = "block";

    //Буусан санамсаргүй тоонд харгалзах зургийг үзүүлэх
    diceDom.src = "dice-" + diceRandNumber + ".png";

    // Буусан тоо нь нэгээс ялгаатай бол идэвхтэй тоглогчийн тоог нэмэгдүүлнэ
    if (diceRandNumber != 1) {
        // 1-ээс ялгаатай тоо буулаа. Буусан тоог тоглогчид нэмж өгнө
        roundScore = roundScore + diceRandNumber;
        document.getElementById("current-" + activePlayer).textContent =
            roundScore;
    } else {
        //1 буусан тул тоглогчийн ээлжийг энд сольж өгнө
        switchToNextPlayer();
    }
});

// Hold товчны eventListener
document.querySelector(".btn-hold").addEventListener("click", function () {
    //Ээлжинд уг тоглогчийн цуглуулсан ээлжний оноог глобаль оноон дээр нь
    //нэмж өгнө
    scores[activePlayer] = scores[activePlayer] + roundScore;

    //Дэлгэц дээрх оноог өөрчилнө
    document.getElementById("score-" + activePlayer).textContent =
        scores[activePlayer];

    //Уг тоглогч хожсон эсэхийг шалгах
    if (scores[activePlayer] >= 15) {
        document.getElementById("name-" + activePlayer).textContent =
            "WINNER!!!";
        document
            .querySelector(".player-" + activePlayer + "-panel")
            .classList.add("winner");
    } else {
        switchToNextPlayer();
    }
});

function switchToNextPlayer() {
    //Ээлжийн оноог 0 болгоно
    roundScore = 0;
    document.getElementById("current-" + activePlayer).textContent = "0";

    //Тоглогчийн ээлжийг солино
    activePlayer == 0 ? (activePlayer = 1) : (activePlayer = 0);

    //Улаан цэгийг шилжүүлэх
    document.querySelector(".player-0-panel").classList.toggle("active");
    document.querySelector(".player-1-panel").classList.toggle("active");

    //Шоог түр алга болгоно
    diceDom.style.display = "none";
}

//New game товлуурын event listener
document.querySelector(".btn-new").addEventListener("click", initGame);
