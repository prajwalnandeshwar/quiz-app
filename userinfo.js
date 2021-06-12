let name = sessionStorage.getItem("name");
let point = sessionStorage.getItem("points");
 let user_time = sessionStorage.getItem("time");

document.querySelector(".name").innerHTML = name;
document.querySelector(".points").innerHTML = point;
document.querySelector(".time").innerHTML = user_time;