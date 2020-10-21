"use strict";

(function() {
  window.addEventListener("load", init);

  function init() {
    welcomeWord();

    let profileButton = findElementById("profileButton");
    profileButton.addEventListener("click", profileButtonClick);

    findElementById("quoteWords").addEventListener("dragstart", function(event) {dragQuoteWords(event)});
    findElementById("quotePosition").addEventListener("drop", function(event) {dropOnQuotePosition(event)})
    findElementById("quotePosition").addEventListener("dragover", function(event) {allowDropOnQuotePosition(event)})

  }

  function welcomeWord() {
    console.log("Welcome to Vivian's profile :)")
  }

  function profileButtonClick() {
    console.log("click on the button")
    findElementById("profileButton").innerHTML = "<a href=\"videochannel.html\">Video Channel</a>"
  }

  function dragQuoteWords(e) {
    console.log("start dragging");
    e.dataTransfer.setData("QuoteWords", e.target.id);
  }

  function dropOnQuotePosition(e) {
    console.log("start dropping on");
    e.preventDefault();
    let quoteWords=e.dataTransfer.getData("QuoteWords");
    e.target.parentNode.replaceChild(document.getElementById(quoteWords), findElementById("quotePosition"));
  }

  function allowDropOnQuotePosition(e) {
    e.preventDefault();
  }

  function findElementById(idName) {
    return document.getElementById(idName);
  }

  function generateElement(tagName) {
    return document.createElement(tagName);
  }
})();


