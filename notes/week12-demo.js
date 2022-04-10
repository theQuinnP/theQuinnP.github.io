
async function getQuote(){
  console.log("quote button was clicked");
  try{
    const response = await fetch(endpoint);
    if(!response.ok){
      throw Error(response.statusText)
  }
    const json = await response.json();
    console.log(json);
    displayQuote(json.content);
    displayAuthor(json.author);
    }
    catch(err){
      console.log(err)
      alert('Failed');
    }
  }

  function displayQuote(quote){
    const quoteText = document.querySelector('#js-quote-text');
    quoteText.textContent = quote;
  }

  function displayAuthor(quote){
    const quoteText = document.querySelector('#js-author-text');
    quoteText.textContent = quote;
  }

    const endpoint = "https://quotable.io/random"; // change endpoint

    const quoteButton = document.querySelector('#js-new-quote');
    quoteButton.addEventListener('click', getQuote);
