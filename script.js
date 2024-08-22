const travelDate = '2024-12-07T08:50:00';
const printedTravelDate = printTravelDate(travelDate);
const city = 'Londres';
const countdownDate = new Date(travelDate).getTime();
const title = `¡Próximo viaje a ${city}!`;

// Creates the city title
createTitle(title, 'title', 'h2');
createTitle(printedTravelDate, 'travelDate', 'h2');
setInterval(updateCountdown, 1000);

function createTitle(variable, id, hid){
    h1Element = document.createElement("h1");
    h1Element.textContent = variable;
    document.getElementById(id).appendChild(h1Element);
}

function printTravelDate(travelDate){
    const dateObj = new Date(travelDate);
    const day = String(dateObj.getDate()).padStart(2, '0');
    const month = String(dateObj.getMonth() + 1).padStart(2, '0');
    const year = dateObj.getFullYear();
    const hours = String(dateObj.getHours()).padStart(2, '0');
    const minutes = String(dateObj.getMinutes()).padStart(2, '0');
    const formattedDate = `${day}-${month}-${year} ${hours}:${minutes}`;
    return formattedDate;
}

function updateCountdown() {
    const now = new Date().getTime();
    const distance = countdownDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("time").innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

    if (distance < 0) {
        document.getElementById("time").innerHTML = `¡Ya estás en ${city}!`;
    }
}