document.querySelector("#calc").addEventListener("click", getFirstValue);
document.querySelector("#clear").addEventListener("click", clearArr);
var removeResults = document.getElementById("results");

let calcValues = [0];

function clearArr() {
  removeResults.innerHTML = "";
  console.log("HEJ");
  calcValues = [0];
  calcValues.forEach(update);
}

function getFirstValue() {
  // Selecting the input element and get its value

  let select = document.querySelector("#operator");
  let operatorVal = select.options[select.selectedIndex];
  let firstnumber = document.querySelector("#firstnumber").value;
  let secondnumber = document.getElementById("secondnumber").value;
  firstnumber = parseFloat(firstnumber);
  secondnumber = parseFloat(secondnumber);
  //let secondnumber = document.querySelector("secondnumber");
  switch (operatorVal.value) {
    case "add":
      console.log("hej");
      result = firstnumber + secondnumber;
      break;
    case "sub":
      console.log("hej");
      result = firstnumber - secondnumber;
      break;
    case "mul":
      console.log("hej");
      result = firstnumber * secondnumber;
      break;
    case "div":
      console.log("hej");
      result = firstnumber / secondnumber;
      break;
  }
  console.log(operatorVal.value);
  console.log(firstnumber);
  console.log(secondnumber);
  console.log("first");
  console.log(typeof firstnumber);
  console.log("second");
  console.log(typeof secondnumber);
  calcValues.push(result);
  console.log(calcValues);

  //calcValues.push(result);
  // calcValues.push(firstnumber);
  //calcValues.push(secondnumber);
  update(result);
  // Displaying the value
}

function update(value) {
  const template = document.querySelector("template").content;
  const clone = template.cloneNode(true);
  clone.querySelector("li").textContent = value;
  document.querySelector("#results").appendChild(clone);
}

calcValues.forEach(update);
