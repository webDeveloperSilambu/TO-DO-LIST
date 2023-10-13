let inputBtn = document.getElementById('inputBtn');
let addBtn = document.querySelector(".addBtn");
let removeBtn = document.querySelector(".removeBtn");
let list_content = document.querySelector('.list-content');
let titleTag = document.querySelector('.titleTag');
let taskList;
addBtn.addEventListener('click',()=>{
   if(inputBtn.value.length > 0){
      titleTag.innerHTML = 'ToDo List'
      let localItems = JSON.parse(localStorage.getItem('localItems'))
      if(localItems == null){
         taskList = [];
      }
      else{
         taskList = localItems;
      }
      taskList.push(inputBtn.value)
      inputBtn.value= ''
      localStorage.setItem("localItems",JSON.stringify(taskList))
   }
   showItem()
})

function showItem(){
   let localItems = JSON.parse(localStorage.getItem('localItems'))
   if(localItems == null){
      taskList = []
   }
   else{
      taskList = localItems;
   }

   let Outputval = ''
   taskList.forEach((data,index) => {
      Outputval += `<li>
      <p>${data}</p>
      <button onclick="delBtn(${index})"><i class="fa-solid fa-trash"></i></button>
      </li>`
   });
   list_content.innerHTML = Outputval;

}

showItem()

function delBtn(index){
   let localItems = JSON.parse( localStorage.getItem('localItems'))
   taskList.splice(index, 1)
   localStorage.setItem('localItems', JSON.stringify(taskList));
   showItem()
}

removeBtn.onclick = () =>{
   titleTag.innerHTML = 'Nothing todo'
   localStorage.clear()
   showItem()
}

