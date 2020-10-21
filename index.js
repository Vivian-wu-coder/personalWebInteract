"use strict";

(function() {
  const CLASSES_LIST = [
    "CSE 154: Web Programing",
    "COMMLD 517: The Psychology Of User Experience",
    "COMMLD 534: Visual Storytelling"
  ]

  window.addEventListener("load", init);

  function init() {
    welcomeWord();

    let profileButton = findElementById("profileButton");
    profileButton.addEventListener("click", profileButtonClick);

    findElementById("moreClasses").addEventListener("click", clickOnMoreClasses);

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

  function clickOnMoreClasses() {
    console.log("click on the more classes")
    let classesElement = findElementById("classes");
    for (let i = 0; i < CLASSES_LIST.length; i++) {
      let newClassElement = generateElement("li");
      newClassElement.textContent = CLASSES_LIST[i];
      classesElement.appendChild(newClassElement);
    }
    findElementById("moreClasses").remove();
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


