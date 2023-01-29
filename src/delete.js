

  //send to the serwer Delete order:
  function deleteTaskOnBackend(el) {      
    // return fetch(`http://localhost:8888/todolist/${el.dataset.id}`, {
    return fetch(`https://apptodobackend101.herokuapp.com/todolist/${el.dataset.id}`, {
        method: "DELETE", 
    });
};

export default deleteTaskOnBackend