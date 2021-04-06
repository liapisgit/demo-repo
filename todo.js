//btnClear points to the #clear-button element in the DOM
const btnClear = document.querySelector('#clear-button');
const list = document.querySelector('#todo-list');

//Adding and event listener: btnClear will react on the click event
//When the btnClear is clicked, then the callback fuction 
//(the 2nd argument of the event listener) will be called. 
btnClear.addEventListener("click", function() {
    list.textContent='';
    console.log("Το κουμπί πατήθηκε");
});


const input = document.querySelector('#new-item');
input.addEventListener("keyup",function(event) {
    if (event.keyCode === 13) {
        console.log("Το κουμπί πατήθηκε3");
        var input_value=input.value;
        var li=document.createElement("LI");
        li.innerHTML=input_value;
        document.getElementById("todo-list").appendChild(li);
        input.value="";
    }
});
list.addEventListener('click',function(e){
    if(e.target.tagName==='LI')
    {
        e.target.classList.toggle("completed");
    }
},'false');


