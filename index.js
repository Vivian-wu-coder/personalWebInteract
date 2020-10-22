"use strict";

(function() {
  const CLASSES_LIST = [
    "CSE 154: Web Programing",
    "COMMLD 517: The Psychology Of User Experience",
    "COMMLD 534: Visual Storytelling"
  ];

  window.addEventListener("load", init);

  /**
   * Init function to bind action to event of element
   *
   */
  function init() {
    let profileButton = findElementById("profilebutton");

    profileButton.addEventListener("click", profileButtonClick);

    findElementById("moreclasses").addEventListener("click", clickOnMoreClasses);

    findElementById("quotewords").addEventListener("dragstart", function(event) {
      dragQuoteWords(event);
    });
    findElementById("quoteposition").addEventListener("drop", function(event) {
      dropOnQuotePosition(event);
    });
    findElementById("quoteposition").addEventListener("dragover", function(event) {
      allowDropOnQuotePosition(event);
    });

    findElementById("sendwords").addEventListener("click", submitQuote);
  }

  /**
   * The action happening to the click event on the button.
   *
   */
  function profileButtonClick() {
    console.log("click on the button");
    findElementById("profilebutton").innerHTML = "<a href=\"videochannel.html\">Video Channel</a>";
  }

  /**
   * The action happening to the click event on the more classes.
   *
   */
  function clickOnMoreClasses() {
    console.log("click on the more classes");
    let classesElement = findElementById("classes");
    for (let i = 0; i < CLASSES_LIST.length; i++) {
      let newClassElement = generateElement("li");
      newClassElement.textContent = CLASSES_LIST[i];
      classesElement.appendChild(newClassElement);
    }
    findElementById("moreclasses").remove();
  }

  /**
   * The action happening to the drag event on the quote words
   * @param {event} e - The event
   *
   */
  function dragQuoteWords(e) {
    console.log("start dragging");
    e.dataTransfer.setData("QuoteWords", e.target.id);
  }

   /**
   * The action happening to the dropon event on the quote position
   * @param {event} e - The event
   *
   */
  function dropOnQuotePosition(e) {
    console.log("start dropping on");
    e.preventDefault();
    let quoteWords = e.dataTransfer.getData("QuoteWords");
    e.target.parentNode.replaceChild(document.getElementById(quoteWords), findElementById("quoteposition"));
  }

  /**
   * The action to allow the DropOn event on the quote position
   * @param {event} e - The event
   *
   */
  function allowDropOnQuotePosition(e) {
    e.preventDefault();
  }

  /**
   * The action while submitting quote.
   * @param {event} e - The event
   *
   */
  function submitQuote() {
    findElementById("tyWords").classList.remove("hidden");

    setTimeout(replaceQuote, 1000);
  }

  /**
   * Replace the favorite with the input words.
   */
  function replaceQuote() {
    let quoteWords = findElementById("quotewords");
    let enterWords = findElementById("enterwords");
    quoteWords.textContent = enterWords.value;
  }

  /**
   * Returns the DOM object whose name is the input id.
   * @param {string} idName - the id of the element.
   * @returns {object} The first DOM object matching the query.
   */
  function findElementById(idName) {
    return document.getElementById(idName);
  }

  /**
   * Generate an element of the input tag.
   * @param {string} tagName - The tag to create.
   * @returns {object} The newly created DOM object
   */
  function generateElement(tagName) {
    return document.createElement(tagName);
  }
})();