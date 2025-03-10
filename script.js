document.addEventListener("DOMContentLoaded", function(){
    const title=document.getElementsByClassName('tasks-title');
    const tasks1=document.getElementsByClassName('tasks1');

    title.addEventListener('click', ()=>{
        tasks1.style.display='flex';
    });

});