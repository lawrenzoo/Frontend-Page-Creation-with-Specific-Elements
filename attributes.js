
function updateDate() {
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    const currentDate = new Date();
    let currentUTC = currentDate.getUTCDay()
    const dayOfWeek = daysOfWeek[currentUTC];
    const currentTime = Date.now();

    
    document.querySelector('[data-testid="currentDayOfTheWeek"]').textContent = dayOfWeek;
    document.querySelector('[data-testid="currentUTCTime"]').textContent = `${currentTime}Milliseconds`;
}
 updateDate();