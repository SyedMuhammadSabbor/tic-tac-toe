let turn = "X";
let isgameover = false;

const changeTurn = () => {
  if (turn === "X") {
    turn = "O";
  } else {
    turn = "X";
  }
  return turn;
};

const checkWin = () => {
  const boxesText = document.querySelectorAll(".text"); // Collect text values after each move

  const win = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [0, 4, 8],
  ];

  win.forEach((element) => {
    if (
      boxesText[element[0]].innerText !== "" &&
      boxesText[element[0]].innerText === boxesText[element[1]].innerText &&
      boxesText[element[1]].innerText === boxesText[element[2]].innerText
    ) {
      document.querySelector(".info").innerText =
        boxesText[element[0]].innerText + " wins!";
      isgameover = true;
      resetFunction();
      setTimeout(() => {
        document.querySelector(".info").innerText =
          boxesText[element[0]].innerText + "Turn for " + turn;
        isgameover = false;
      }, 1000);
    }
  });
};

const boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach((box) => {
  const boxesText = box.querySelector(".text");
  box.addEventListener("click", () => {
    if (boxesText.innerText === "") {
      boxesText.innerText = turn;
      turn = changeTurn();
      checkWin();
      if (isgameover === false) {
        document.getElementsByClassName("info")[0].innerText =
          "Turn for " + turn;
      }
    }
  });
});
const reset = document.querySelector("button");
reset.addEventListener("click", () => resetFunction());

function resetFunction() {
  const boxesText = document.querySelectorAll(".text"); // Select all elements with the class "text"
  boxesText.forEach((e) => {
    e.innerText = "";
  });
}
