setInterval(()=>{
    let hours = document.getElementById('hours');
    let minutes = document.getElementById('minutes');
    let seconds = document.getElementById('seconds');
    let ampm = document.getElementById('ampm');
    
    let ho = document.getElementById('ho');
    let mi = document.getElementById('mi');
    let se = document.getElementById('se');


    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let am = h>=12 ? "PM" : "AM"
    
    if (h>12) {
        h = h - 12 ;
    }
    
    h = (h< 10) ? "0" + h : h;
    m = (m< 10) ? "0" + m : m;
    s = (s< 10) ? "0" + s : s;
    
    hours.innerHTML = h;
    minutes.innerHTML = m;
    seconds.innerHTML = s;
    ampm.innerHTML = am;

    ho.style.strokeDashoffset= 440 - (440*h) / 12;
    mi.style.strokeDashoffset= 440 - (440*m) / 60;
    se.style.strokeDashoffset= 440 - (440*s) / 60;
})

