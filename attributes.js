
function updateDate() {
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    const currentDate = new Date();
    let currentUTC = currentDate.getUTCDay()
    const dayOfWeek = daysOfWeek[currentUTC];
    const currentTime = Date.now();

    
    document.querySelector('#day').textContent = dayOfWeek;
    document.querySelector('#utc').textContent = `${currentTime}Milliseconds`;
}
 updateDate();

 setInterval(() => {
    updateDate() 
 }, 1000);