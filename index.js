// const active_profile =document.querySelector(".active_profile");
// const active_name =document.querySelector(".active_name");
// const chat_active =document.querySelector(".chat_active");

// chat_active.addEventListener("click", function(){
//     // var img =  chat_active.children[0].innerHTML;
//     // active_profile.innerHTML = "";
//     // active_profile.innerHTML = img;
//     console.log(chat_active.children);
// });
const chat_active = document.querySelectorAll(".chat_active");
const active_profile = document.querySelector(".active_profile");
const active_name = document.querySelector(".active_name");

chat_active.forEach(function(item) {
    item.addEventListener("click", function() {
        // console.log(item.children[0].innerHTML);
        active_profile.innerHTML = item.children[0].innerHTML;
        active_name.innerHTML = item.children[1].innerHTML;
    });
});
const darkmood =document.querySelector("#darkmood");
const chat_container =document.querySelector(".chat_container");
const chat =document.querySelector(".chat");
const icons =document.querySelectorAll(".fa-solid");
const input =document.querySelectorAll("input");
darkmood.addEventListener("click",changedarkmood);

function changedarkmood(e){
    if(chat_container.classList.contains("dark"))
    {
        chat_container.classList.remove("dark");
        darkmood.innerHTML='<i class="fa-solid fa-moon"></i>';
        chat.style.backgroundImage=" url(assest/wp2824890.jpg)";
        icons.forEach(icon => {
            icon.style.color = "#797c8c";
        });
         input.forEach(i => {
            i.style.backgroundColor = "white";
            i.style.borderColor = "#e6ebf5";
         });    
    }
    else{
        chat_container.classList.add("dark");
        darkmood.innerHTML='<i class="fa-solid fa-sun"></i>';
        chat.style.backgroundImage=" url(assest/chatdark.jpg)";
        icons.forEach(icon => {
            icon.style.color = "#fff";
        });
        input.forEach(i => {
            i.style.backgroundColor = "#2e2e2e";
            i.style.borderColor = "#2e2e2e";
         });
    }
  e.preventDefault();
}