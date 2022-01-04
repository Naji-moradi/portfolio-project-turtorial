import React from "react";

const AboutUs = () => {
  return (
    <div style={{ maxHeight: "100vh" }}>
      <section id="share-head-section" style={{ backgroundColor: "white" }}>
        <div class="container">
          <div class="row">
            <div class="col text-center py-5">
              <h1 class="display-4">About us</h1>
              <p class="lead">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Sapiente doloribus ut iure itaque quibusdam rem accusantium
                deserunt reprehenderit sunt minus. Lorem ipsum, dolor sit amet
                consectetur adipisicing elit. Sapiente doloribus ut iure itaque
                quibusdam rem accusantium deserunt reprehenderit sunt minus.
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Sapiente doloribus ut iure itaque quibusdam rem accusantium
                deserunt reprehenderit sunt minus. quibusdam rem accusantium
                deserunt reprehenderit sunt minus. Lorem ipsum, dolor sit amet
                consectetur adipisicing elit. Sapiente doloribus ut iure itaque
                quibusdam rem accusantium deserunt reprehenderit sunt minus.
              </p>
              <a
                href="/#"
                className="btn text-white "
                style={{ backgroundColor: "#1f3a4d", borderRadius: "5px" }}
              >
                Find Out More
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
