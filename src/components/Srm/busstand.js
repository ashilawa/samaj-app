import React from "react";
import Cell from "../Gallery/Cell";
import srmData from "../../data/srm/srmData";
const Stand = () => (
  <div id="platinum">
    <div className="container">
      <p>
        एल. बी. एस. (लाल बहादूर शाश्त्री) मार्गावर, रोहिदास समाज मंदिर कुर्ला
        समोरच अनेक वर्षे पोस्ट ऑफिस होते त्या मुळे नजीकचा बस थांब्याला ‘ कुर्ला
        पोस्ट ऑफिस थांबा असे नाव पडले होते.
        <br></br>
        सर्वेश्वर मंदिर कुर्ला ते गोल बिल्डिंग नंतर समाज मंदिर ह्या मार्गाने
        कालांतराने पोस्ट ऑफिस बंध पडले, तेव्हा मंडळाने बेस्ट (BEST) प्रशासनाला
        विनंती करून सादर बस थांबायचे नामांतर{" "}
        <strong>
          <span style={{ color: "#ff0088" }}>'संत रोहिदास हॉल बस थांबा'</span>
        </strong>{" "}
        असे करून घेतले.
      </p>
    </div>
    <div className="container">
      <Cell data={srmData} />
    </div>
  </div>
);

export default Stand;
