const X_CLASS = 'x'
const CIRCLE_CLASS = 'circle'
const WINNING_COMBINATIONS = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]
var CURENT =String("X");

const cell = [];

function render(row, column) {
    var resume = "<table cellpadding ='0' cellspacing = '0'>";
    var index = 1;
    for (var i = 0; i <= row; i++) {
        resume += "<tr>";
        for (var j = 1; j <= column; j++) {
            resume += "<td>";
            resume += "<input class="+"m-2"
            +" type=" + "btn" + " id=" + index + " onclick =" + "handleClick(" + index + ")" + "> </input>";
            resume += "</td>";
            index++;
        }
        resume += "</tr>";
    }
    resume += "</table>";
    return resume;
}



function handleClick(index) {
    const btn = document.getElementById(index);
    if (CURENT == 'X') {
        btn.value = CURENT
        cell.push(index);
        btn.style.backgroundColor = 'black';
        btn.style.color = 'white';
        btn.disabled = true;
        CURENT = String("O");
        console.log(CURENT);
    }
    else {
        btn.value = CURENT
        cell.push(index);
        btn.style.backgroundColor = 'white';
        btn.style.color = 'black';
        btn.disabled = true;
        CURENT = String("X");
        console.log(CURENT);
    }

}


function playGame() {
    var rows = document.getElementById("row").value;
    var columns = document.getElementById("column").value;
    var namePlayer1 = document.getElementById("player1").value;
    var namePlayer2 = document.getElementById("player2").value;
    // if(!namePlayer1 || !namePlayer2){
    //     alert("Player is empty")
    //     return false;
    // }
    if (rows < 4 || columns < 4) {
        alert("You can only enter numbers greater than 3")
        return false;
    }

    if (rows > 18 || columns > 18) {
        alert("You can only enter numbers less than 18")
        return false;
    }
    document.getElementById("play").innerHTML = "Restart"
    document.getElementById("main").innerHTML = render(rows, columns)
    document.getElementById("name1").innerHTML = String(namePlayer1)
    document.getElementById("vs").innerHTML = String(" -- VS -- ")
    document.getElementById("name2").innerHTML = String(namePlayer2)
}