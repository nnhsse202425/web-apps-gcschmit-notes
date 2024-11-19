// client-side JavaScript to handle events in the browser

// the querySelector function returns the first element in the document
//  that matches the specified selector (e.g., h1)
const myHeading = document.querySelector("h1");

// Javascript can modify an attribute of an HTML element
myHeading.textContent = "Hello World!";

// the querySelector method can also be used to select an element
//  by its class
const button = document.querySelector("button.demo");

// the addEventListener function attaches an event handler (i.e., function)
//  to the specified element associated with the specified event
button.addEventListener("click", () => {
  alert("Ouch! Stop poking me!");
});

// client-side Javascript can modify the attributes of HTML elements in
//  response to events
const myImage = document.querySelector("img");
myImage.addEventListener("click", () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/firefox-icon.png") {
    myImage.setAttribute("src", "images/SE-GitHub-image.png");
  } else {
    myImage.setAttribute("src", "images/firefox-icon.png");
  }
});
