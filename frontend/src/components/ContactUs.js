import React, { Component } from "react";
import {
  GoogleMap,
  LoadScript,
  Marker,
  InfoWindow,
  InfoBox,
} from "@react-google-maps/api";
import "./ContactUs.css";

const API_KEY = process.env.REACT_APP_API_KEY;

const containerStyle = {
  width: "400px",
  height: "400px",
};

const center = {
  // 13.087636394432423, 100.98201075954634
  lat: 13.087636394432423,
  lng: 100.98201075954634,
};
const options = { closeBoxURL: "", enableEventPropagation: true };

const psc1 = {
  lat: 13.08695123522436,
  lng: 101.02941901458617,
};
const psc2 = {
  // 13.07963637922475, 100.9270590574859
  lat: 13.07963637922475,
  lng: 100.9270590574859,
};

class ContactUs extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen_psc1: false,
      isOpen_psc2: false,
    };
  }

  render() {
    // console.log(API_KEY);

    return (
      <section className="ContactUs">
        <div className="ContactUs-left">
          <div className="left-map">
            <LoadScript googleMapsApiKey={API_KEY}>
              <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={11}
              >
                {/* Child components, such as markers, info windows, etc. */}
                <Marker
                  position={psc1}
                  onClick={() => this.setState({ isOpen_psc1: true })}
                >
                  {this.state.isOpen_psc1 && (
                    <InfoWindow
                      onCloseClick={() => this.setState({ isOpen_psc1: false })}
                    >
                      <div>
                        <h1>PSC1</h1>
                        <p>หมู่ที่ 1 อำเภอหนองขาม อำเภอศรีราชา ชลบุรี 20110</p>
                      </div>
                    </InfoWindow>
                  )}
                </Marker>
                <Marker
                  position={psc2}
                  onClick={() => this.setState({ isOpen_psc2: true })}
                >
                  {this.state.isOpen_psc2 && (
                    <InfoWindow
                      onCloseClick={() => this.setState({ isOpen_psc2: false })}
                    >
                      <div>
                        <h1>PSC2</h1>
                        <p>ตำบลทุ่งสุขลา อำเภอศรีราชา ชลบุรี 20230</p>
                      </div>
                    </InfoWindow>
                  )}
                </Marker>
              </GoogleMap>
            </LoadScript>
          </div>
          <div className="left-contact">
            HEAD OFFICE: Tel. 084-356-5558/086-301-3989
            <br />
            Email: knong39@yahoo.com, panyawadee1@yahoo.co.th
            <br />
            ฝ่ายขาย/การตลาด: คุณสมยศ เกตุทะเล(ผจก. ฝ่ายการตลาด)
            <br />
            Tel. 085-172-8422, Email: psc.team.2018@gmail.com
            <br />
            CUSTOMER SERVICE: คุณจริยา ยิ่งยง Tel. 061-916-5345
            <br />
            Email:cs.psc.2018@gmail.com
            <br />
            ฝ่ายบุคคล/ดำเนินงาน: คุณสรรเสริญ เทียนทองดี
            (ผจก.บุคคลเเละฝ่ายดำเนินงาน)
            <br />
            Tel.092-345-5824, Email: thienthongdede@gmail.com
            <br />
            PSC YARD 1<br />
            ปิ่นทอง 209/236 ม.6 ต.บึง อ.ศรีราชา จ.ชลบุรี
            <br />
            PSC YARD 2<br />
            42/2 ม.10 ทุ่งสุขลา ศรีราชาชลบุรี. 20230
          </div>
        </div>
        <div className="ContactUs-right">
          <form className="right-form">
            <input />
            <input />
            <input />
            <textarea />
          </form>
        </div>
      </section>
    );
  }
}

export default ContactUs;
