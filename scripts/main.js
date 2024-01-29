let myButton=document.querySelector("button");
let user=document.querySelector(".name");
function setUserName(){
    let myName=prompt("输入你的名字");
    localStorage.setItem("name",myName);
    user.textContent="帅呆了!"+myName;
}
if(!localStorage.getItem("name")){
    setUserName();
}
else{
    let myName=localStorage.getItem("name");
    user.textContent="帅呆了!"+myName;
}
myButton.onclick=function(){
    setUserName();
};