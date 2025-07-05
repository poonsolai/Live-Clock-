let ampm = document.getElementById("ampm")
function displaytime(){
    let dateTime = new Date();
    let hr = padzero(dateTime.getHours());
    let min = padzero(dateTime.getMinutes());
    let sec = padzero(dateTime.getSeconds());
    if(hr>12){
        hr = hr - 12
        ampm.innerHTML = "PM"
    }
    document.getElementById("hours").innerHTML = padzero(hr)
    document.getElementById("mins").innerHTML = min
    document.getElementById("seconds").innerHTML = sec
}
setInterval(displaytime,500)  

function padzero(num){
    return num<10?"0"+num : num
}


function dat(){
    let ne = new Date()
    let date = ne.getDate()
    let mon = ne.getMonth()+1
    let year = ne.getFullYear()
    let day =ne.getDay() +1
    function zero(x){
        if(x<10){
          return  x = "0"+x
        }
        else{
           return x = x
        }
    }
    document.getElementById('date').innerHTML = zero(date)
    document.getElementById('month').innerHTML = zero(mon)
    document.getElementById('year').innerHTML = zero(year)
    
    let array = ['a','Sunday','Monday','Thusday','Wednesday','Thursday','Friday','Saturday']

    document.getElementById('day').innerHTML = array[day] +":❣️"
    console.log(array[day])
    console.log(date,mon,year,day)
}
setInterval(dat(),1000)


//// its for my understanding thats not show for display



// // setInterval(clock,950) 
// function clock(){
//     let time = new Date()
//     let hra = time.getHours()
//     let mina =zero(time.getMinutes())
//     let seca =zero(time.getSeconds())
//     let ampm = "AM"
//     if(hra>12){
//         hra = hra -12
//         ampm = "PM"
//     }
//     console.log(zero(hra)+':'+mina+':'+seca,ampm)

// }

// function date(){
//     let ne = new Date()
//     let date = ne.getDate()

//     let mon = ne.getMonth()
    
//     let year = ne.getFullYear()
//     console.log(date,mon,year)
// }
// date()