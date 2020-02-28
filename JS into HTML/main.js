// let cats = document.createElement("div");
// cats.className = "cats";

// let header = document.createElement("h1");
// header.innerText = "Cats";

// let catList = document.createElement("ul");

// let ListItem1 = document.createElement("li");
// ListItem1.innerText = "Pancake";
// let ListItem2 = document.createElement("li");
// ListItem2.innerText = "Cat Dooku";
// let ListItem3 = document.createElement("li");
// ListItem3.innerText = "Katy Purry";

// catList.append(ListItem1);
// catList.append(ListItem2);
// catList.append(ListItem3);

// cats.append(header);
// cats.append(catList);

let body = document.body;
// body.append(cats);

let image = document.createElement("img");
image.className = "nyan";
image.src = "/nyan.gif";
image.style.display = "block";
image.alt = "nyan cat";

image.style.position = "absolute";
body.append(image);

body.addEventListener("mousemove", (e) => {
    image.style.top = e.clientY + "px";
    image.style.left = e.clientX + "px";
})

// let newCat = document.createElement("li");
// newCat.innerText = "new Cat!";



function zoomin() {
    var myImg = document.getElementById("resize");
    var currWidth = myImg.clientWidth;
    var currHeight = myImg.clientHeight;

    myImg.style.width = (currWidth + 50) + "px";
    myImg.style.height = (currHeight + 50) + "px";
}

function zoomout() {
    var myImg = document.getElementById("resize");
    var currWidth = myImg.clientWidth;
    var currHeight = myImg.clientHeight;

    myImg.style.width = (currWidth - 50) + "px";
    myImg.style.height = (currHeight - 50) + "px";
}

function myMove(catId) {
    var elem = document.getElementById(catId);
    var pos = -100;
    var id = setInterval(frame, 10);
    let randSpeed = (Math.random()*10 + 1);
    function frame() {
      if (pos == screen.clientX) {
        clearInterval(id);
        let remove = document.getElementById(catId);
        remove.parentNode.removeChild(remove);
      } else {
        pos+=randSpeed;
        elem.style.left = pos + 'px';
      }
    }
  }

var count = 0;
body.addEventListener("keydown", event => {
    if (event.keyCode == 38) {
        zoomin();
    } else if (event.keyCode == 40) {
        zoomout();
    } else if (event.keyCode == 32) {
        let myImg = document.createElement("img");
        myImg.src = "nyan.gif";
        myImg.alt = "nyan";
        myImg.className = "bottomNyan";
        myImg.id = ("bottomNyan" + count);
        count++;
    
        body.append(myImg);
        myMove(myImg.id);
    }   
})