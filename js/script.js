  window.addEventListener("load", function(event) {
  event.preventDefault();

  flavors = ['cookie dough', 'chocolate', 'banana split', 'rocky road', 'strawberry'];

  flavors[2] = "vanilla";

  ul = document.createElement("ul");

  flavors.forEach(function(flavor) {
    const li = document.createElement("li");
    li.append(flavor);
    ul.append(li);
  });

  const bodyElement = document.querySelector("body");
    bodyElement.append(ul);
    bodyElement.append(li);

});