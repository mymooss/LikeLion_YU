const getTime=()=>{
    const time = new Date();
    const hour = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    clock.innerHTML = `${hour<10 ? `0${hour}`:hour}:${minutes<10 ? `0${minutes}`:minutes}:${seconds<10 ? `0${seconds}`:seconds}`;
}
const init =()=> {
    setInterval(getTime, 1000);
}
init();
