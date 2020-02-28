let getData = () => {
    let request = new XMLHttpRequest();
    request.open("GET", "http://localhost:8081/note/");
    request.send();
    request.onload = () => {
        let noteList = document.getElementById("notes");
        noteList.innerText = "";
        for (let obj of JSON.parse(request.response)) {
            let ListItem = document.createElement("li");
            let listDiv = document.createElement("div");
            let listP = document.createElement("p");
            listP.innerText = obj.text;

            let listButton = document.createElement("button");
            listButton.innerText = "delete";
            listButton.addEventListener("click", () => {
                deleteData(obj.id);
            })

            let listUpdateButton = document.createElement("button");
            listButton.innerText = "update";
            listButton.addEventListener("click", () => {
                updateData(obj.id);
            })
            listDiv.append(listP);
            listDiv.append(listButton);
            ListItem.append(listDiv);
            listP.innerText = obj.text;
            noteList.append(ListItem);
        }
    }
}

let postData = (event) => {
    event.preventDefault();
    let form = event.target;
    let obj = {};
    for (let input of form) {
        if (input.name) {
            obj[input.name] = input.value;
        }
    }

    let request = new XMLHttpRequest();
    request.open("POST", "http://localhost:8081/note/");
    request.setRequestHeader("Content-Type", "application/json");
    let body = JSON.stringify(obj);

    request.send(body);

    request.onload = () => {
        getData();
    }
}

let deleteData = (id) => {
    let request = new XMLHttpRequest();
    request.open("DELETE", "http://localhost:8081/note/" + id + "/");
    request.send();
    request.onload = () => {
        getData();
    }
}

let updateData = (id, text) => {
    let request = new XMLHttpRequest();
    request.open("PUT", "http://localhost:8081/note/");
    
}




let body = document.body;

getData();
body.append(notes);
