//send to the serwer Patch order:
function patchTaskOnBackend(el) {
   console.log(el);
   console.log(el.idNr);
   // return fetch(`http://localhost:8888/todolist/${el.idNr}`, {
   return fetch(`https://todolist-backend-production-3003.up.railway.app/todolist/${el.idNr}`, {
      method: "PATCH",
      body: JSON.stringify(el),
      headers: {
         "Content-type": "application/json",
      },
   });
}

export default patchTaskOnBackend;
