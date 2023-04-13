//send to the serwer Delete order:
function deleteTaskOnBackend(el) {
   // return fetch(`http://localhost:8888/todolist/${el.dataset.id}`, {
   return fetch(`https://todolist-backend-production-3003.up.railway.app/todolist/${el.dataset.id}`, {
      method: "DELETE",
   });
}

export default deleteTaskOnBackend;
