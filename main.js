const cases = document.getElementById('cases');
const casesBtn = document.getElementById('casesbtn');
const news = document.getElementById('news');
const newsBtn = document.getElementById('newsbtn');
var casesOpen = false;
var newsOpen = false;
casesBtn.addEventListener('click', function(){
    OpenCases();
    casesOpen = true;
}); 

newsBtn.addEventListener('click', function(){
    OpenNews();
    newsOpen = true;
}); 

function OpenCases(){
    if(newsOpen = true){
        news.style.transform = "translateY("+ -120 +"%)"; 
        cases.style.transform = "translateY("+ 0 +"%)"; 
    }
}
function OpenNews(){
    if(newsOpen = true){
        cases.style.transform = "translateY("+ -120 +"%)"; 
        news.style.transform = "translateY("+ 0 +"%)"; 
    }
}



