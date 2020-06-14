
let tasks = []; // {title: "ddddd", done: false}

function renderEditor() {
   let inputEl = document.querySelector("#default-todo-panel .todo-editor >input")

   //inputEl.onchange = (e) => {
    //console.log("text, ", e.target.value);
   // console.log("input change： ", e);
   //};

   let addTask = () =>{
     let newTask = {
        title: inputEl.value,
        done: false,
    };
    inputEl.value= "";

    tasks.push(newTask);

    console.log("tasks: ", tasks);

    renderTaskItems();

    
   };

   inputEl.onkeypress = (e) => {
        if(e.key==="Enter"){
         addTask();
        }
   };
  
   let addEl = document.querySelector("#default-todo-panel .todo-editor > button")
   addEl.onclick = (e) => {
      addTask();
   };
}

function renderTaskItems() {
    let itemsEl = document.querySelector("#default-todo-panel .todo-items"); 
    itemsEl.querySelectorAll("div").forEach((node)=>node.remove());



    for (let i=0; i < tasks.length; i++ ) {
        let task = tasks[i];
       let itemEl = document.createElement("div");
    


       let doneEl = document.createElement("input");
       doneEl.type = "checkbox";
       itemEl.append(doneEl);

       let titleEl = document.createElement("label");
       titleEl.innerText = task.title;
       itemEl.append(titleEl);

       let cancelEl = document.createElement("button");
       cancelEl.innerText = "X";
       cancelEl.onclick = () => {
           tasks.splice(i,1);
           renderTaskItems();
       };
       itemEl.append(cancelEl);

       itemsEl.append(itemEl);
    }
}



renderEditor();

renderTaskItems();








