//send to serwer function
const sendItemToTheBackend = function sendItemToBackend(item) {
   // fetch("http://localhost:8888/todolist", {
   fetch("https://todolist-backend-production-3003.up.railway.app/todolist", {
      method: "POST",
      // body: item,
      body: JSON.stringify(item),
      headers: {
         "Content-type": "application/json",
      },
   });
};
//
export default sendItemToTheBackend;
