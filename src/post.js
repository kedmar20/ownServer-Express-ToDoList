

//send to serwer function
const sendItemToTheBackend = function sendItemToBackend(item) {
    // fetch("http://localhost:8888/todolist", {
    fetch("https://apptodobackend101.herokuapp.com/todolist", {
        method: "POST",
        // body: item,
        body: JSON.stringify(item),            
        headers: {
            "Content-type": "application/json",
        }
    });
}

export default sendItemToTheBackend