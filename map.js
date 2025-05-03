let map;
let markers = [];
const companyColors = {
    "Osprey Shipping": "red",
    "Osprey Logistics": "blue",
    "Ocean Generation Shipping": "green"
};

// Office locations data
const officeLocations = [
    {
        name: "Osprey Shipping Sdn Bhd (Headquarters)",
        company: "Osprey Shipping",
        address: "B-3A-3A, 3A Floor, North Tower, BBT One, 41200 Klang, Selangor, Malaysia.",
        lat: 3.043, lng: 101.449,
        phone: "+603 33244500",
        email:"cs.pkg@ospreyshipping.co"
    },
    {
        name: "Osprey Logistics Pvt Ltd",
        company: "Osprey Logistics",
        address: "No:4 B/31, 1st Floor, Salt Colony, Tuticorin - 628003, Tamil Nadu.",
        lat: 8.7642, lng: 78.1348,
        phone: "+91 8925872506",
        email: "sales.tut@ospreyshipping.co"
    },
    {
        name: "Ocean Generation Shipping Sdn Bhd - Malaysia",
        company: "Ocean Generation Shipping",
        address: "B-3A-3A, 3A Floor, North Tower, BBT One, 41200 Klang, Selangor, Malaysia.",
        lat: 3.043, lng: 101.449,
        phone: "+603 33242500",
        email: "trade@ogsline.com"
    },
    {
        name: "Ocean Generation Shipping Pte Ltd - Singapore",
        company: "Ocean Generation Shipping",
        address: "1 Wallich Street, Gouco Tower, #14-01, Singapore - 078881.",
        lat: 1.2795, lng: 103.8501,
        phone: "+65 9174 7356",
        email: "sales.sin@ogsline.com"
    },
    {
        name: "Ocean Generation Shipping Pvt Ltd - Navi Mumbai",
        company: "Ocean Generation Shipping",
        address: "C-269, 2nd Floor, Balaji Bhavan, Plot No. 42A, Sector 11, CBD-Belapur, Navi Mumbai - 400 614, Maharashtra.",
        lat: 19.0268, lng: 73.0565,
        phone: "+91 8925872507",
        email: "sales.mum@ogsline.com"
    },
    {
        name: "Ocean Generation Shipping Pvt Ltd - Bangalore",
        company: "Ocean Generation Shipping",
        address: "Plot No. 6, Prema Narayana Enclave, B Channasandra, Kasturi Nagar Road, Bangalore - 560043, Karnataka.",
        lat: 13.0358, lng: 77.6323,
        phone: "+91 8925872503",
        email: "sales.blr@ogsline.com"
    },
    {
        name: "Ocean Generation Shipping Pvt Ltd - Chennai",
        company: "Ocean Generation Shipping",
        address: "108/64, Armenian Street, 1st Floor, Catholic Centre, Parrys, Chennai - 600001.",
        lat: 13.0846, lng: 80.2803,
        phone: "+91 8925872511",
        email: "sales.maa@ogsline.com"
    },
    {
        name: "Ocean Generation Shipping Pvt Ltd - Tuticorin",
        company: "Ocean Generation Shipping",
        address: "No:4 B/31, 1st Floor, Salt Colony, Tuticorin - 628003, Tamil Nadu.",
        lat: 8.7642, lng: 78.1348,
        phone: "+91 8925872506",
        email: "sales.tut@ospreyshipping.co"
    },
];

// Initialize map
function initMap() {
    map = L.map('map', {
        center: [10, 90],
        zoom: 4.5,
        zoomControl: true,
        dragging: true,
        scrollWheelZoom: true,
        doubleClickZoom: true,
        boxZoom: true,
        touchZoom: true
    });

    // Add OpenStreetMap layer
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors'
    }).addTo(map);

    // Add custom pins for locations
    officeLocations.forEach(loc => {
        let email = loc.email;
        let marker = L.marker([loc.lat, loc.lng], {
            icon: L.icon({
                iconUrl: `https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-${companyColors[loc.company]}.png`,
                iconSize: [25, 41],
                iconAnchor: [12, 41],
                popupAnchor: [1, -34]
            })
        }).addTo(map).bindPopup(`
            <div class="popup-box">
                <h3>${loc.name}</h3>
                <p><i class="fas fa-map-marker-alt" style="color: orange;"></i> ${loc.address}</p>
                <p><i class="fas fa-phone" style="color: orange;"></i> +91 98765 43210</p>
                <p><i class="fas fa-envelope" style="color: orange;"></i> <a href="mailto:${loc.email}" class="popup-email">${loc.email}</a></p>
            </div>
        `, { className: "custom-popup" });

        markers.push({ marker, company: loc.company });
    });
}

// Filter locations by company
function filterOffices(company) {
    markers.forEach(({ marker, company: markerCompany }) => {
        if (markerCompany === company) {
            marker.addTo(map);
        } else {
            marker.remove();
        }
    });

    const selectedOffices = officeLocations.filter(loc => loc.company === company);
    let detailsHTML = `<h2 class="company-title">${company} Offices</h2>`;
    selectedOffices.forEach(loc => {
        let email = loc.email;
        detailsHTML += `
            <div class="office-card">
                <h4>${loc.name}</h4>
                <p><i class="fas fa-map-marker-alt" style="color: orange;"></i> ${loc.address}</p>
                <p><i class="fas fa-phone" style="color: orange;"></i> ${loc.phone}</p>
                <p><i class="fas fa-envelope" style="color: orange;"></i> <a href="mailto:${email}" class="popup-email">${email}</a></p>
            </div>
        `;
    });

    document.getElementById("office-details").innerHTML = detailsHTML;
}

// Initialize map on page load
document.addEventListener("DOMContentLoaded", initMap);
