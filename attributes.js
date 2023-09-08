
function updateDateTime() {
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    const currentDate = new Date();
    const dayOfWeek = daysOfWeek[currentDate.getUTCDay()];
    const currentTime = Date.now();
    const FormatedUTC = currentTime.toLocaleString();
    
    document.querySelector('[data-testid="currentDayOfTheWeek"]').textContent = `Current Day of the Week: ${dayOfWeek}`;
    document.querySelector('[data-testid="currentUTCTime"]').textContent = `Current UTC Time: ${FormatedUTC}`;
}

 // Update date and time on page load
 updateDateTime();
        
 // Update date and time every minute
 setInterval(updateDateTime, 1000);