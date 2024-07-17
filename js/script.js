const map = L.map("map").setView([41.27780646738183, 65.03906250000001], 6);
const clickInput = document.getElementById("click");
const dragInput = document.getElementById("drag");

L.tileLayer("tiles/{z}/{x}/{y}.webp", {
  minZoom: 3,
  maxZoom: 15,
  tileSize: 256,
}).addTo(map);

/////////////////////////////////////////////////// CLICK
let markerClick = null;

map.on("click", (event) => {
  if (markerClick !== null) map.removeLayer(markerClick);

  const [lat, lng] = [event.latlng.lat, event.latlng.lng];

  clickInput.value = `${lat}, ${lng}`;

  markerClick = L.marker([lat, lng], { title: "Clickable" }).addTo(map);
});

/////////////////////////////////////////////////// DRAG
const markerDrag = new L.Marker([41.31649706577905, 69.24802780151369], {
  draggable: true,
  title: "Draggable"
});

markerDrag.on("dragend", () => {
  const { lat, lng } = markerDrag.getLatLng();

  dragInput.value = `${lat}, ${lng}`;
});

markerDrag.addTo(map);
