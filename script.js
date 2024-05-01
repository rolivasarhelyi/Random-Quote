"use strict";

let btn = document.querySelector(".btn");
btn.addEventListener("click", getQuote);

function getQuote() {
  fetch("https://stoic.tekloon.net/stoic-quote", { method: "GET" })
    .then((res) => res.json())
    .then((data) => {
      document.querySelector(".quote").innerText = data.quote;
      console.log(data);
    });
}
