// cover page toggle up animation
const coverPageToggle = () => {
    const coverPageWrap = document.querySelector(".coverpage_wrap");
    let i = 0;
    const coverpageInterval=  setInterval(() => {
        if(i <= 100){
            coverPageWrap.style.top = `-${i}%`;
            coverPageWrap.style.borderRadius = `${i}%`;
            console.log(i)
            i++;
        }else{
            console.log("else statement");
            clearInterval(coverpageInterval)
        }
    }, 10);
}

setTimeout(() => {
    coverPageToggle();
}, 1000);