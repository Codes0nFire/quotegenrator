const button = document.querySelector("#new-quote");

const author = document.querySelector("#author");

const quote = document.querySelector("#quote");


//function to find quote
function findquote() {
  let index = Math.floor(Math.random() * 16);
  fetch(`https://type.fit/api/quotes`)
    .then((response) => response.json())
    .then((data) => {
      quote.textContent = data[index].text;
      author.textContent = `-${data[index].author}`;
    });
}


//on click adding quotes with author name
button.addEventListener(`click`, findquote);


//initial call to render first quote
findquote();
