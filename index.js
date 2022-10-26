// Your code here
const dodger = document.getElementById("dodger");
dodger.style.backgroundColor =  "#FF69B4";



// document.addEventListener("keydown", function (event) {
//     if (event.key === "ArrowLeft") {
//       const leftNumbers = dodger.style.left.replace("px", "");
//     //   replace lo jegrtnawa bakarde lera ama dareyn lo doger har px ak replace bka ba hich wata ba px namine...
//       const left = parseInt(leftNumbers, 10);
//      // pashan nrxaka ka text a bika int decimal
  
//       dodger.style.left = `${left -1}px`;
//       //pashan zhmaraka -1 bka lo har pressak
//     }
//   });
// awash dabi bs la testak daway function y jya xdaka




function moveDodgerLeft() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
  
    if (left > 0) {
      dodger.style.left = `${left - 1}px`;
    }
  }

  document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") {
      moveDodgerLeft();
    }
  });





  function moveDodgerRight() {
    const rightNumbers = dodger.style.left.replace("px", "");
    const right = parseInt(rightNumbers, 10);
  
    if (right > 0) {
      dodger.style.left = `${right + 1}px`;
    }
  }

//   lera labar away la asll program la lay chap dast pedaka har dabi lo rastish esh lagar chap bkayn agar na margin right esh naka

  document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowRight") {
      moveDodgerRight();
    }
  });


    