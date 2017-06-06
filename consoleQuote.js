//Available modes: inspiration, poetry, rap, all
var mode = "all"
var numOfDicts = 3;
var inspirationDictionary = [{quote: "Everything has its beauty, but not everyone sees it.", author: "Confucius"},
          {quote: "It does not matter how slowly you go so long as you do not stop.", author: "Confucius"},
          {quote: "Our greatest glory is not in never falling, but in rising every time we fall.", author: "Confucius"},
          {quote: "Real knowledge is to know the extent of one's ignorance.", author: "Confucius"},
          {quote: "Whenever you find yourself on the side of the majority, it is time to pause and reflect.", author: "Mark Twain"},
          {quote: "If you tell the truth, you don't have to remember anything.", author: "Mark Twain"},
          {quote: "Always do right. This will gratify some people and astonish the rest.", author: "Mark Twain"},
          {quote: "The man who does not read good books has no advantage over the man who cannot read them.", author: "Mark Twain"},
          {quote: "The secret of getting ahead is getting started.", author: "Mark Twain"},
          {quote: "You, me, or nobody is gonna hit as hard as life. But it ain't about how hard ya hit. It's about how hard you can get hit and keep moving forward.",
                   author: "Rocky Balboa"},
          {quote: "Pleasure in the job puts perfection in the work.", author: "Aristotle"},
          {quote: "What separated me from all my homeboys is the fact that I didn't get caught inside the reality. I was always dreaming about doing something else",
                  author: "Kendrick Lamar"},
          {quote: "When you’re the absolute best, you get hated on the most.", author: "Kanye West"},
          {quote: "I refuse to accept other people's ideas of happiness for me. As if there's a 'one size fits all' standard for happiness.", author: "Kanye West"}];




var poetryDictionary = [{quote: "If a flower bloomed in a dark room, would you trust it.", author: "Kendrick Lamar"},
                        {quote: "The one in front of the gun lives forever", author: "Kendrick Lamar"},
                        {quote: "You can't have people listen to you unless you come to their world and then bring them to yours.", author: "Kendrick Lamar"},
                        {quote: "Would you believe in what you believe in if you were the only one who believed it?", author: "Kanye West"},
                        {quote: "I'm always blamin you, but what's sad, you not the problem", author: "Kanye West"}]


var rapDictionary = [{quote: "I can’t let these people play me. Name one genius that ain't crazy", author: "Kanye West"},
                     {quote: "What if Kanye made a song about Kanye Called 'I Miss the Old Kanye'? Man that'd so Kanye", author: "Kanye West"}]

printStatement();

function printStatement() {

    var rand = 0;

    if(mode === "all") {
        mode = Math.floor(Math.random() * (numOfDicts)) + 0;
    }

    if(mode === "inspiration" || mode === 0) {
      rand = Math.floor(Math.random() * (inspirationDictionary.length)) + 0;
      console.log(inspirationDictionary[rand].quote);
      console.log(" -"+inspirationDictionary[rand].author);
    }

    else if(mode === "poerty" || mode === 1){
      rand = Math.floor((Math.random() * (poetryDictionary.length)) + 0);
      console.log(poetryDictionary[rand].quote);
      console.log(" -"+poetryDictionary[rand].author);
    }

    else if(mode === "rap" || mode === 2) {
      rand = Math.floor((Math.random() * (rapDictionary.length)) + 0);
      console.log(rapDictionary[rand].quote);
      console.log(" -"+rapDictionary[rand].author);
    }
    else {
      console.log("Console Quote: No mode has been selected")
    }
}
