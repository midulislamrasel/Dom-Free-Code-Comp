/*   
    ** document.querySelector()
    ** addEventListener()
    ** Math Object
    ** innerText 
*/

let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');

const quotes = [
    {
        quote: "Ipsum available, but the majority have suffered alteration in some form, by injected humour, or  words which don't look even slightly believable. If you are going to use a passage ",
        person: "Mahatma Gandhi"
        
    },
    {
        quote: "making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum'.  ",
        person: "Rasel islam"
        
    },
    {
        quote: " believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem  ",
        person: "Konok islam"
        
    },
    {
        quote: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or  words which don't  ",
        person: "Benjamin Franklin"
        
    },
    {
        quote: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or  words which don't look even slightly believable.  ",
        person: "Mahatma Gandhi"
        
    },
    {
        quote: "Mc , a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the   ",
        person: "Albert Einstein"
        
    },
    {
        quote: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or slightly believable. If you are going to use a passage ",
        person: "Steve Jobs"
        
    },
];


btn.addEventListener('click', function () {
    let random = Math.floor(Math.random() * quotes.length)

    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;
})
