var quoteContianer =document.getElementById('quote-container');




 var quotes=[
    {
        quote :{
            speaker : "Oscar Wilde",
            sentence : "“Be yourself; everyone else is already taken.”"
        }
    },
    {
        quote :{
            speaker : "Albert Einstein",
            sentence : "“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”"
        }
    },
    {
        quote :{
            speaker : "Marcus Tullius Cicero",
            sentence : "“A room without books is like a body without a soul.”"
        }
    },
    {
        quote :{
            speaker : "Dr. Seuss",
            sentence : "“You know you're in love when you can't fall asleep because reality is finally better than your dreams.”"
        }
    },
    {
        quote :{
            speaker : "Mark Twain",
            sentence : "“If you tell the truth, you don't have to remember anything.”"
        }
    },
    {
        quote :{
            speaker : "Elbert Hubbard",
            sentence : "“A friend is someone who knows all about you and still loves you.”"
        }
    },
    {
        quote :{
            speaker : "Oscar Wilde",
            sentence : "“To live is the rarest thing in the world. Most people exist, that is all.”"
        }
    },
    {
        quote :{
            speaker : " Friedrich Nietzsche",
            sentence : "“Without music, life would be a mistake.”"
        }
    },
    {
        quote :{
            speaker : "George Bernard Shaw",
            sentence : "“Life isn't about finding yourself. Life is about creating yourself.”"
        }
    },
    {
        quote :{
            speaker : "J.K. Rowling,",
            sentence : "“If one cannot enjoy reading a book over and over again, there is no use in reading it at all.”"
        }
    }
    
]

var quotesStore =[]




function generateQuote(){
    if(quotesStore.length === quotes.length){
        quotesStore =[]
    }
    do{
        var random = Math.floor(Math.random()*quotes.length);
        var randomQuote = quotes[random];
    }
    while (quotesStore.indexOf(random) !== -1)
        // to avoid getting dublicate quotes//

    var html = `
         <h2 class="fw-bolder my-5 text-white">${randomQuote.quote.sentence}</h2>
         <h4 class="fw-bolder my-5 text-white">${randomQuote.quote.speaker}</h4>
    `;
    quoteContianer.innerHTML = html;
    quotesStore.push(random);
    console.log(quotesStore);

}

