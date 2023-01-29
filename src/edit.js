


  //send to the serwer Patch order:
  function patchTaskOnBackend(el) {
    console.log(el);
    console.log(el.idNr);
    return fetch(`http://localhost:8888/todolist/${el.idNr}`, {
        method: "PATCH", 
        body: JSON.stringify(el),            
        headers: {
            "Content-type": "application/json",
        }
    });
}

export default patchTaskOnBackend