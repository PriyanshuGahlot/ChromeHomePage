function setQuote(){
fetch("https://api.quotable.io/quotes/random")
.then(response=>response.json())
.then(data=>{
    const quote = document.getElementById("quote");
    quote.innerHTML = data[0].content;
});
}

function performSearch(){
    if(searchBox.value!="")window.location=("https://www.google.com/search?q="+searchBox.value)
}

setQuote();
const quoteHolder = document.getElementById("quoteHolder");
quoteHolder.addEventListener("click",setQuote);


const salutation = document.getElementsByClassName("Salutation")[0];
const hours = new Date().getHours();
if(hours>=5 && hours<12)salutation.innerHTML = "Good Morning";
if(hours>=12 && hours<18) salutation.innerHTML = "Good Afternoon";
if(hours>=18 || hours<5) salutation.innerHTML = "Good Evening";

const searchBtn = document.getElementById("searchBtn");
const searchBox = document.getElementById("searchBox");
searchBtn.addEventListener("click",performSearch);
searchBox.addEventListener("keypress",(key)=>{
    if(key.key==="Enter") performSearch();
})

const ytBtn = document.getElementById("ytBtn");
const gptBtn = document.getElementById("gptBtn");
const outlookBtn = document.getElementById("outlookBtn");
const lmsBtn = document.getElementById("lmsBtn");
const hrBtn = document.getElementById("hrBtn");
const gmailBtn = document.getElementById("gmailBtn");
const ghBtn = document.getElementById("ghBtn");

ytBtn.addEventListener("click",()=>{window.location = "https://www.youtube.com/"});
gptBtn.addEventListener("click",()=>{window.location = "https://chat.openai.com/"});
outlookBtn.addEventListener("click",()=>{window.location = "https://outlook.office.com/mail/"});
lmsBtn.addEventListener("click",()=>{window.location = "https://lms.bennett.edu.in/my/"});
hrBtn.addEventListener("click",()=>{window.location = "https://www.hackerrank.com/dashboard"});
gmailBtn.addEventListener("click",()=>{window.location = "https://mail.google.com/mail/u/0/#inbox"});
ghBtn.addEventListener("click",()=>{window.location = "https://github.com/"});