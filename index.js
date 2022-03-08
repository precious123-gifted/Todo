const Input = document.querySelector('.input');
const addButton = document.querySelector('.BTN')
const listContainer = document.querySelector('.listContainer')


const addAtASK = ()=>{

const Text = Input.value
const Task = `      <div class="taskDiv"> <div  id='doneBTN' class='inActive' >Done</div> <div class="item"><input class="itemName" type="text" disabled='true' value="${Text}"><div class='ENC'><img class='editBTN' src="editIcon.png"  alt="" srcset=""><img class='checkBTN' height="30px" src="check.png"  alt="" srcset=""></div>
<img class='deleteBTN' src="deleteIcon.png" height="37px" alt="" srcset=""></div></div>`
if(Input.value){
  listContainer.insertAdjacentHTML("beforeend",Task) 
  Input.value  = ''}
else if(Input === document.activeElement ){ alert('you must add a task')}}

const removeATask = ()=>{
   listContainer.addEventListener('click',(e)=>{
      if(e.target.className === 'deleteBTN')
 {  const deleteBTN = e.target
    const Item = deleteBTN.parentNode
    let taskDiv = Item.parentNode
    taskDiv.remove()
    }})}
removeATask()

//event listeners
const eventListenerForAddTasksButton = () =>{
   addButton.addEventListener('click',()=>{
   const Input = document.querySelector('.input') 
   if(Input.value === ""){ alert('you must add a task')}else addAtASK()
})}
eventListenerForAddTasksButton()


const eventListenerToAddTaskWithEnterKey = () =>{
   window.addEventListener('keydown',(e)=>{  
   if(e.which === 13){ 
   if(Input === document.activeElement && Input.value.length === 0){ alert('you must add a task')}else addAtASK() }
})}
eventListenerToAddTaskWithEnterKey()


//i want to deactivate every button if i am editing one item ,only the edited items buttons should be active
const eventListenerForEditingTasks = ()=>{
  window.addEventListener('click',async(e)=>{  
  const itemNames =  document.querySelectorAll('.itemName');

  if(e.target.className==='editBTN'){   
   const Name = e.target.parentNode.previousElementSibling
   const editBTN = e.target
   const checkBTN = editBTN.nextElementSibling
   const del = checkBTN.parentNode.nextElementSibling 

   Input.style.pointerEvents = 'none' 
   addButton.style.pointerEvents = 'none'  
   editBTN.style.visibility = 'hidden'
   checkBTN.style.visibility = 'visible'
   Name.disabled= false
   let end = Name.value.length
   Name.setSelectionRange(end,end);
   Name.focus()
   Name.style.color  = 'orange'

   for(var i=0; i<itemNames.length; i++){
       var itemName = itemNames[i];
      if(itemName !== document.activeElement){ 
         let itemDiv = itemName.parentNode
         let taskDiv = itemDiv.parentNode
    taskDiv.style.pointerEvents = 'none'  } 
   }
} }) }
eventListenerForEditingTasks()

const eventListenerForDeletingAndResetingTasks = () =>{
window.addEventListener('click',(e)=>{
if(e.target.className === 'deleteBTN'){
   const itemNames =  document.querySelectorAll('.itemName');
   Input.style.pointerEvents = 'auto'
   addButton.style.pointerEvents = 'auto'
   for(var i=0; i<itemNames.length; i++){
      var itemName = itemNames[i];
     if(itemName !== document.activeElement){ 
       let itemDiv = itemName.parentNode
       let taskDiv = itemDiv.parentNode
   taskDiv.style.pointerEvents = 'auto' 
    } 
  }}})}
eventListenerForDeletingAndResetingTasks ()


const eventListenerForRenamingTasks = () =>{
 
   window.addEventListener('click',(e)=>{ 
      const itemNames =  document.querySelectorAll('.itemName');
      if(e.target.className === 'checkBTN'){ 
         
         let checkBTN = e.target
         let editBTN = checkBTN.previousElementSibling
         let Name = checkBTN.parentNode.previousElementSibling
        if(Name.value)
         {editBTN.style.visibility = 'visible'
         checkBTN.style.visibility = 'hidden'
         Name.disabled = true
         Name.style.color = ''
         Input.style.pointerEvents = 'auto' 
         addButton.style.pointerEvents = 'auto'

         for(var i=0; i<itemNames.length; i++){
            var itemName = itemNames[i];
         
            let itemDiv = itemName.parentNode
            let taskDiv = itemDiv.parentNode
         if(itemName.value)
        { taskDiv.style.pointerEvents = 'auto'}
          }}
        else alert('task cannot be empty')}})
}
eventListenerForRenamingTasks()

const eventListenerForRenamingTasksWithEnterKey = () =>{
//    check if an item name is active then set event listener for enter key
  window.addEventListener('keydown',(e)=>{
      if(e.which === 13){
     const itemNames =  document.querySelectorAll('.itemName');
   for(var i=0; i<itemNames.length; i++){
   var itemName = itemNames[i];
   if(itemName === document.activeElement){ 
  
         let  editBTNDiv = itemName.nextElementSibling
         let editBTN = editBTNDiv.firstChild
         let checkBTN = editBTN.nextElementSibling
        
   if(itemName.value)
        { editBTN.style.visibility = 'visible'
         checkBTN.style.visibility = 'hidden'
         itemName.disabled = true
         itemName.style.color = ''
         Input.style.pointerEvents = 'auto' 
         addButton.style.pointerEvents = 'auto'

         for(var i=0; i<itemNames.length; i++){
            var itemName = itemNames[i];
         
            let itemDiv = itemName.parentNode
            let taskDiv = itemDiv.parentNode
         if(itemName.value)
        { taskDiv.style.pointerEvents = 'auto'}
          }}
         else alert('task can not be empty')
} }}})}
eventListenerForRenamingTasksWithEnterKey()

const displayDoneBTN = ()=>{
listContainer.addEventListener('click', (e)=>{
   if(e.target.className === 'itemName' && e.target !== document.activeElement){
      let doneBTN = e.target.parentNode.previousElementSibling
  if(doneBTN.style.visibility !== 'visible'){
   doneBTN.style.visibility = 'visible'
  }
  else{doneBTN.style.visibility = 'hidden'}
  setTimeout(()=>{
if(doneBTN.classList.contains('inActive')){
   doneBTN.style.visibility = 'hidden'
}
  },4000)}})}
displayDoneBTN()  


const eventListenerForTheDoneBTN = ()=>{
listContainer.addEventListener('click',(e)=>{
   if(e.target.id === 'doneBTN'){
     let doneBTN= e.target
     let itemDiv = doneBTN.nextElementSibling
     let itemName = itemDiv.firstChild
     let editBTNDiv = itemDiv.firstChild.nextElementSibling
     
doneBTN.classList.toggle('inActive')     
doneBTN.classList.toggle('active')
if(doneBTN.classList.contains('active'))
{editBTNDiv.style.pointerEvents = 'none'
itemName.style.pointerEvents = 'none'}
else {editBTNDiv.style.pointerEvents = 'auto'
itemName.style.pointerEvents = 'auto'
} }})}
eventListenerForTheDoneBTN()

