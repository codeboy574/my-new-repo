function GenNum(){
    let num = Math.floor(Math.random()* 100) + 1;
    let val = document.getElementById("op");
    let result = val.innerHTML = num;
}