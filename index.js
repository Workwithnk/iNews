
let btn  = document.getElementById("btn");
btn.addEventListener("click",function(){
    let xhr = new XMLHttpRequest();
  xhr.open("GET","https://gnews.io/api/v4/top-headlines?token=65aaf11fd2b76a1773b9ec6621e78ce6&lang=en",true);
  xhr.onload = function () {
     let json = JSON.parse(this.responseText);
     let articles = json.articles;
     let news = document.getElementById("newsPath");
     let data = "";
     Array.from(articles).forEach(function (e) {
       let Htmldata = `<div id="news" style="margin-bottom:5px;">
                            <div id="fpart">
                                <h1>${e["source"]["name"]}</h1>
                                <a href="${e["source"]["url"]}">visit</a>
                            </div>
                            <div id="spart">
                                <p> ${e["title"]}</p>
                            </div>
                            <div id="tpart">
                                <img src="${e["image"]}" alt="image">
                                <p>${e["content"]} <a href="${e["url"]}">[Readmore]</a></p>
                          </div>
                      </div> `;
       data += Htmldata;
     });
     news.innerHTML = data;
   };
   xhr.send();
});