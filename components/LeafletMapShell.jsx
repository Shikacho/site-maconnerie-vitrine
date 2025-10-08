// components/LeafletMapShell.jsx
"use client";

import { useEffect, useState } from "react";
import "leaflet/dist/leaflet.css";

export default function LeafletMapShell({
  position,
  popupTitle,
  popupAddress,
}) {
  const [mods, setMods] = useState(null);

  useEffect(() => {
    let alive = true;

    // Importer react-leaflet ET leaflet uniquement côté client
    Promise.all([import("react-leaflet"), import("leaflet")])
      .then(([rl, leaflet]) => {
        if (!alive) return;

        // Patch des icônes (après import de leaflet)
        const L = leaflet.default || leaflet;
        // éviter multi-patch
        if (!L.Icon.Default._leafletIconPatched) {
          // @ts-ignore
          delete L.Icon.Default.prototype._getIconUrl;
          L.Icon.Default.mergeOptions({
            iconRetinaUrl:
              "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
            iconUrl:
              "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
            shadowUrl:
              "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
          });
          // @ts-ignore
          L.Icon.Default._leafletIconPatched = true;
        }

        setMods({
          MapContainer: rl.MapContainer,
          TileLayer: rl.TileLayer,
          Marker: rl.Marker,
          Popup: rl.Popup,
        });
      })
      .catch(() => {})
      .finally(() => {});

    return () => {
      alive = false;
    };
  }, []);

  if (!mods) {
    return (
      <div className="w-full h-72 rounded-xl overflow-hidden shadow-md bg-brand-light/50" />
    );
  }

  const { MapContainer, TileLayer, Marker, Popup } = mods;

  return (
    <div className="w-full h-72 rounded-xl overflow-hidden shadow-md overscroll-contain">
      <MapContainer
        center={position}
        zoom={16}
        scrollWheelZoom
        wheelDebounceTime={0}
        wheelPxPerZoomLevel={60}
        zoomSnap={0.25}
        className="h-full w-full overscroll-contain"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
            <strong>{popupTitle}</strong>
            <br />
            {popupAddress}
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
