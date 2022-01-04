import React from "react";
import "./Contact.css";
const Contact = () => {
  return (
    <div>
      <section
        className="head pb-4"
        style={{ marginRight: "10pz", marginLeft: "10px" }}
      >
        <div className="container py-5">
          <div className="card">
            <div className="card-body ">
              <h2 className="font-weight-light text-center py-3">Contact us</h2>
              <div className="row">
                <div className="col-lg-6  col-md-12 col-sm-12 col-12">
                  <div className="row pt-3">
                    <div className="col-lg-1 offset-1 col-md-2 col-sm-2 col-2">
                      <span style={{ fontSize: "30px", color: "cadetblue" }}>
                        {" "}
                        <i className="fas fa-map-marker-alt"></i>
                      </span>
                    </div>
                    <div className="col-lg-10 col-md-10 col-md-9 col-sm-9 col-9">
                      <h3 className="font-weight-light">
                        find us in every wher !
                      </h3>
                      <p>
                        Address of house <br /> India, Goa
                        <br /> vasco dagama
                      </p>
                    </div>
                  </div>
                  <div className="row pt-3">
                    <div className="col-lg-1 offset-1 col-md-2 col-sm-2 col-2">
                      <span style={{ fontSize: "30px", color: "coral" }}>
                        {" "}
                        <i className="fas fa-phone-volume"></i>
                      </span>
                    </div>
                    <div className="col-lg-10 col-md-10 col-md-9 col-sm-9 col-9">
                      <h3 className="font-weight-light">Give us a ring</h3>
                      <p>
                        address house no: w3242(g) <br /> +918767367821 <br />{" "}
                        Mon-friday/12/2021
                      </p>
                    </div>
                  </div>
                </div>
                <div className=" col-lg-6 col-md-12 col-sm-12 col-12">
                  <form>
                    <div className="form-row">
                      <div className="form-group col-lg-6 col-md-12 col-sm-12 col-12">
                        <label> First Name </label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="First Name"
                        />
                      </div>
                      <div className="form-group col-lg-6 col-md-12 col-sm-12 col-12">
                        <label> Last Name </label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Last Name"
                        />
                      </div>
                    </div>
                    <label>Email:</label>
                    <input
                      type="Email"
                      placeholder="Email"
                      className="form-control"
                    />
                    <label>Your Message:</label>
                    <textarea
                      name=""
                      id=""
                      cols="10"
                      rows="5"
                      className="form-control mb-3"
                      placeholder="Message"
                    ></textarea>
                    <input type="checkbox" /> <label> I am not a robot </label>
                    <button
                      className="btn text-white float-right p-2"
                      style={{
                        borderRadius: "3px",
                        backgroundColor: "#1f3a4d",
                        // color: :"#FFFFFF";
                      }}
                    >
                      Send me message
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
