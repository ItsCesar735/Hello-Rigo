/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let who = ["The dog", "My grandma", "His turtle", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "the keys", "the car"];
  let when = [
    "before the class",
    "right on time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];
  //write your code here
  console.log("Hello Rigo from the console!");
  console.log(who[3] + " " + action[2] + " " + what[0] + " " + when[1]);
  let random_what = Math.floor(Math.random() * what.length);
  let random_who = Math.floor(Math.random() * who.length);
  let random_action = Math.floor(Math.random() * action.length);
  let random_when = Math.floor(Math.random() * when.length);
  console.log(
    who[random_who] +
      " " +
      action[random_action] +
      " " +
      what[random_what] +
      " " +
      when[random_when]
  );
  document.getElementById("excuse").innerHTML =
    who[random_who] +
    " " +
    action[random_action] +
    " " +
    what[random_what] +
    " " +
    when[random_when];
};
