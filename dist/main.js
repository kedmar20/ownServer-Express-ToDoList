(()=>{"use strict";const t=document.querySelector("#task-form-container"),e=document.querySelector("#task-form-input"),o=document.querySelector("#tasks");let n="readonly";var a;a=t=>{console.log(t);let e=t.value,o=t.readonly,n=t.idNr;l(e,o,n),n==t.idN&&n++},fetch("https://todolist-backend-production-3003.up.railway.app/todolist").then((t=>t.json())).then((({tasksJson:t})=>{t.forEach(a)}));const l=function(t,a,l){const d=document.createElement("div");d.classList.add("task"),d.innerHTML=`\n        <div class="content">\n        <input \n            type="text" \n            class="text"\n            value="${t}"\n            readonly="${a}"\n            data-id=${l}\n            />\n        </div>                    \n        <div class="actions">\n            <button class="edit">Edit</button>\n            <button class="delete">Delete</button>\n        </div>\n        `,o.appendChild(d),e.value="";let i=d.querySelector(".edit"),s=d.querySelector(".delete"),r=d.querySelector(".text");i.addEventListener("click",(t=>{if("edit"==i.innerText.toLowerCase())r.removeAttribute("readonly"),i.innerText="Save";else{r.setAttribute("readonly","readonly"),i.innerText="Edit",console.log(r),console.log(r.readonly);let t={value:r.value,idNr:r.dataset.id,readonly:n};console.log(t),e=t,console.log(e),console.log(e.idNr),fetch(`https://todolist-backend-production-3003.up.railway.app/todolist/${e.idNr}`,{method:"PATCH",body:JSON.stringify(e),headers:{"Content-type":"application/json"}})}var e})),s.addEventListener("click",(()=>{o.removeChild(d),console.log(r.dataset.id),fetch(`https://todolist-backend-production-3003.up.railway.app/todolist/${r.dataset.id}`,{method:"DELETE"})}))};t.addEventListener("submit",(t=>{t.preventDefault();let o=e.value,a=n,d=Math.floor(Date.now()/100);var i;e.value?(l(o,a,d),i={value:o,idNr:d,readonly:a},fetch("https://todolist-backend-production-3003.up.railway.app/todolist",{method:"POST",body:JSON.stringify(i),headers:{"Content-type":"application/json"}})):alert("please fill out the task")}))})();