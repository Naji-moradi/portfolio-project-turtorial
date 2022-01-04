import React from "react";
import "./Map.css";

const Map = () => {
  return (
    <div>
      <div class="container-fluid">
        <div class="map-responsive">
          <iframe
            src="https://www.google.com/maps/embed/v1/place?key=AIzaSyA0s1a7phLN0iaD6-UE7m4qP-z21pH0eSc&q=Eiffel+Tower+Paris+France"
            style={{
              width: "100%",
              height: "450px",
              frameBorder: "4px",
              border: "1px",
            }}
            allowfullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Map;
