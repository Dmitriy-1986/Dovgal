function printTime(){
    /*let d = new Date();
  
    let yearTime = document.getElementsByClassName("realTimeAndYear")[0];
    yearTime.innerHTML = d.toLocaleString() + ", ";
    
    let hours = d.getHours();
    let mins = d.getMinutes();
    let secs = d.getSeconds();
    let year = d.getFullYear();
    let month = d.getMonth() + 1;
    let day = d.getDate();
    let yearTime = document.getElementsByClassName("realTimeAndYear")[0];
    yearTime.innerHTML = day + ". " +  month + ". " + year + ", " + hours + ":" + mins + ", ";*/
    
     let yearTime = document.getElementsByClassName("realTimeAndYear")[0];
     yearTime.innerHTML = moment().format('MMMM Do YYYY, h:mm a') + ", ";
    
}
setInterval(printTime, 1000);
