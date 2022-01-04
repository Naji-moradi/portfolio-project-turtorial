import React from "react";
import image from "../../../assets/Imac_alu.png";

const ProfileSection = () => {
  return (
    <div>
      <div class="container-fluid " style={{ backgroundColor: "#f8f9fa " }}>
        {/* <h1 class="text-center">Apple Like Content Section</h1> */}

        <div class="row ">
          <div class="col-md-6 order-md-6">
            <img src={image} alt="" class="w-100" />
          </div>

          <div class="col-md-6 order-md-1">
            <div class="row align-items-center h-100">
              <div class="col">
                <h2 className="pt-1">Haztech Internship Programme</h2>
                <p class="lead">
                  If you think you have the interest and passion as us come be a
                  part of Team Haztech as an intern. With over 8 years of
                  expertise and leaders ready to nurture the techies of
                  tomorrow. If you believe you have an idea that can bring in
                  the solution for real life problems come in and join us and be
                  a part of #TeamHaztech
                  <br />
                  <br />
                  <a href="" class="">
                    Learn More
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileSection;
