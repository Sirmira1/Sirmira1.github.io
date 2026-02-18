// Function to get the type of device based on
// the screen size
function getDeviceType () {
    const width = window.innerWidth;
    if (width < 768) return "a phone";
    if (width < 1024) return "a tablet";
    return "a laptop or desktop";
}
// Function that returns the time of day
function getTimeOfDay () {
    const hour = new Date().getHours();
    if (hour < 12) return "morning";
    if (hour < 18) return "afternoon";
    return "evening";
}
// Function to update the text on the line
function updateLine () {
    const line = document.getElementById("line");
    if (!line) return;
    line.textContent = `Good ${getTimeOfDay()}, you are using ${getDeviceType()}.`;
}
updateLine();
// Update the line when the window is resized
window.addEventListener("resize", updateLine);