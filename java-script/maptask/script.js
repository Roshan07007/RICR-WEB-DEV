const map = L.map("map", {
  crs: L.CRS.EPSG4326,
  minZoom: 4,
  maxZoom: 10,
}).setView([22.0, 78.0], 5);

L.imageOverlay("Map.jpg", imageBounds).addTo(map);

let marker = null;

async function searchCity(city) {
  const url =
    "https://nominatim.openstreetmap.org/search?format=json&limit=1&countrycodes=in&q=" +
    encodeURIComponent(city);

  const response = await fetch(url);
  const data = await response.json();

  if (data.length === 0) {
    alert("City not found!");
    return;
  }

  const lat = parseFloat(data[0].lat);
  const lon = parseFloat(data[0].lon);

  if (marker) map.removeLayer(marker);

  marker = L.marker([lat, lon]).addTo(map);
  marker.bindPopup(`<b>${city}</b><br>Lat: ${lat}<br>Lon: ${lon}`).openPopup();

  map.setView([lat, lon], 7);
}

document.getElementById("searchBtn").addEventListener("click", () => {
  const city = document.getElementById("searchInput").value;
  searchCity(city);
});

document.getElementById("searchInput").addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    const city = document.getElementById("searchInput").value;
    searchCity(city);
  }
});
