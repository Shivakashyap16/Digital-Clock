function updateClock() {
    const clockElement = document.getElementById("clock");
    const dateElement = document.getElementById("date");

    const now = new Date();

    // Format time to 12-hour with AM/PM
    let hours = now.getHours();
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12 || 12; // Convert hour to 12-hour format, 0 becomes 12

    // Update time with AM/PM
    clockElement.innerHTML = `${hours}:${minutes}:${seconds} <span class="ampm">${ampm}</span>`;

    // Format and update date
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = now.toLocaleDateString(undefined, options);
    dateElement.textContent = formattedDate;
}

// Update every second
setInterval(updateClock, 1000);

// Initialize the clock on load
updateClock();
