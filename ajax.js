// function enterTheCode()
 function loadDoc(){
    var xmlhttp=new XMLHttpRequest();
     xmlhttp.onreadystatechange=function(){
      if(this.readyState==4 && this.status==200)
       {
         document.getElementById("y").innerHTML=this.responseText;
         var data = JSON.parse(this.responseText);
         console.log("No data Found", data);

         
             var m="<p>"+data.articles[0].author + data.articles[0].content + data.articles[0].description+"</p><br>"
             var m1="<p>"+data.articles[1].author + data.articles[1].content + data.articles[1].description+"</p><br>"
             var m2="<p>"+data.articles[2].author + data.articles[2].content + data.articles[2].description+"</p><br>"
             var m3="<p>"+data.articles[3].author + data.articles[3].content + data.articles[3].description+"</p><br>"
             var m4="<p>"+data.articles[4].author + data.articles[4].content + data.articles[4].description+"</p><br>"
             
           document.getElementById("y").innerHTML=m + m1 + m2 + m3 + m4;
      }
     };
     xmlhttp.open("GET", "https://newsapi.org/v2/everything?domains=wsj.com&apiKey=4a91622c18c14216a9c5dcac181ef7a0", true);
     xmlhttp.send();
    }

