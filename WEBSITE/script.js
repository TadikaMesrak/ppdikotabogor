document.addEventListener("DOMContentLoaded", function() {
    var article = JSON.parse(articleJSON);
  
    var titleElement = document.getElementById("title");
    var dateElement = document.getElementById("date");
    var contentElement = document.getElementById("content");
    var imageElement = document.getElementById("image");
    var captionElement = document.getElementById("caption");
  
    titleElement.textContent = article.title;
    dateElement.textContent = article.date;
  
    for (var i = 0; i < article.content.length; i++) {
      var paragraph = document.createElement("p");
      paragraph.textContent = article.content[i];
      contentElement.appendChild(paragraph);
    }
  
    imageElement.src = article.image.url;
    captionElement.textContent = article.image.caption;
  });
  