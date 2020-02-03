import React from "react";
import platinumData from "../../data/platinum/platinum";
import Cell from "../Gallery/Cell";
import { Image } from "react-bootstrap";
const PlatinumEvent = ({gif}) => (
  <div id="platinum">
    <div className="img">
    {!gif?<Image src="/images/platinumjubilee/seventyfive.gif"></Image>:""}
    </div>
      
    <div className="container" >
      <p>
        संस्थेच्या सामाजिक कार्याला{" "}
        <strong>
          <span style={{ color: "#0073ff" }}>२०१७ मध्ये ७५ वर्षे पूर्ण झाली,</span>
        </strong>{" "}
        त्यानिमित्त संस्थेने{" "}
        <strong>
          <span style={{ color: "#ff0088" }}>अमृत महोत्सव</span>
        </strong>{" "}
        साजरा केला. दोन दिवस चालेल्या या सोहळयात सत्यनारायणाची महापूजा, महा
        भंडारा, हळदी कुंकू, पुरस्कार सोहळा असे अनेक कार्यक्रम पार पडले.
     <br></br>
        सर्वेश्वर मंदिर कुर्ला ते गोल बिल्डिंग नंतर समाज मंदिर ह्या मार्गाने
        <strong>
          <span style={{ color: "#ff0088" }}>
            संत रोहिदास महाराज यांचा प्रतिमेची भव्य दिव्य अशी मिरवणूक
          </span>
        </strong>{" "}
        काढण्यात आली, ज्याला मोठ्या संख्येने समाज बांधव उपस्तीथी होते. ७५
        वर्षांचा प्रवासात ज्या समाज बांधवानी मोलाचा हात भार लावला त्या सर्वांचा
        सत्कार करण्यात आला.
      </p>
    </div>
    <div className="container">
    
            <Cell data={platinumData} />
    </div>
  </div>
);

export default PlatinumEvent;
