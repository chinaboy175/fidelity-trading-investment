const countries = [
    "Dubai", "Singapore", "Japan", "Germany", "United Kingdom",
    "France", "South Africa", "Italy", "Canada", "Australia"
];

const earnings = [
    "$10,000", "$15,500", "$22,300", "$40,000",
    "$55,700", "$80,200", "$120,000", "$250,000"
];

function showPopup() {
    const popup = document.getElementById("popup");

    const country = countries[Math.floor(Math.random() * countries.length)];
    const earning = earnings[Math.floor(Math.random() * earnings.length)];

    popup.innerHTML = `
        <div class="popup-box">
            Someone from <b>${country}</b> just earned <b>${earning}</b>!
        </div>
    `;
}

setInterval(showPopup, 3000);
showPopup();
