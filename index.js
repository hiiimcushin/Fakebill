import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import FakeBill from "./pages/FakeBill";
import FakeBillVietcombank from "./pages/FakeBillVietcombank";
import Home from "./pages/Home";
import FakeBillTpBank from "./pages/FakeBillTpBank";
import FakeBillMbBank from "./pages/FakeBillMbBank";
import FakeBillTechcomBank from "./pages/FakeBillTechcomBank";
import FakeBillAcb from "./pages/FakeBillAcb";
import FakeBillVietinBank from "./pages/FakeBillVietinBank";
import FakeBillBidv from "./pages/FakeBillBidv";
import FakeBillAgriBank from "./pages/FakeBillAgriBank";
import FakeBillVpBank from "./pages/FakeBillVpBank";
import FakeBillMomo from "./pages/FakeBillMomo";
import FakeBillSacombank from "./pages/FakeBillSacombank";
import FakeBillMsb from "./pages/FakeBillMsb";
import FakeBillOcb from "./pages/FakeBillOcb";
import Biendong from "./pages/Biendong";
import BiendongVietcombank from "./pages/BiendongVietcombank";
import BiendongTechcombank from "./pages/BiendongTechcombank";
import BiendongTpbank from "./pages/BiendongTpbank";
import BiendongAcb from "./pages/BiendongAcb";
import BiendongMbbank from "./pages/BiendongMbbank";
import BiendongMomo from "./pages/BiendongMomo";
import BiendongVietinbank from "./pages/BiendongVietinbank";
import BiendongAgribank from "./pages/BiendongAgribank";
import Sodu from "./pages/Sodu";
import SoduVietcombank from "./pages/SoduVietcombank";
import SoduMbbank from "./pages/SoduMbbank";
import SoduVietinbank from "./pages/SoduVietinbank";
import SoduVpbank from "./pages/SoduVpbank";
import SoduTpbank from "./pages/SoduTpbank";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/" element={<Home />} />
        <Route path="/fakeBill" element={<FakeBill />} />
        <Route path="/fakeBill-vietcombank" element={<FakeBillVietcombank />} />
        <Route path="/fakeBill-tpbank" element={<FakeBillTpBank />} />
        <Route path="/fakeBill-mbbank" element={<FakeBillMbBank />} />
        <Route path="/fakeBill-techcombank" element={<FakeBillTechcomBank />} />
        <Route path="/fakeBill-acb" element={<FakeBillAcb />} />
        <Route path="/fakeBill-vietinbank" element={<FakeBillVietinBank />} />
        <Route path="/fakeBill-bidv" element={<FakeBillBidv />} />
        <Route path="/fakeBill-agribank" element={<FakeBillAgriBank />} />
        <Route path="/fakeBill-vpbank" element={<FakeBillVpBank />} />
        <Route path="/fakeBill-momo" element={<FakeBillMomo />} />
        <Route path="/fakeBill-sacombank" element={<FakeBillSacombank />} />
        <Route path="/fakeBill-msb" element={<FakeBillMsb />} />
        <Route path="/fakeBill-ocb" element={<FakeBillOcb />} />
        <Route path="/biendong" element={<Biendong />} />
        <Route path="/biendong-vietcombank" element={<BiendongVietcombank />} />
        <Route path="/biendong-techcombank" element={<BiendongTechcombank />} />
        <Route path="/biendong-tpbank" element={<BiendongTpbank />} />
        <Route path="/biendong-acb" element={<BiendongAcb />} />
        <Route path="/biendong-mbbank" element={<BiendongMbbank />} />
        <Route path="/biendong-momo" element={<BiendongMomo />} />
        <Route path="/biendong-vietinbank" element={<BiendongVietinbank />} />
        <Route path="/biendong-agribank" element={<BiendongAgribank />} />
        <Route path="/sodu" element={<Sodu />} />
        <Route path="/sodu-vietcombank" element={<SoduVietcombank />} />
        <Route path="/sodu-mbbank" element={<SoduMbbank />} />
        <Route path="/sodu-vietinbank" element={<SoduVietinbank />} />
        <Route path="/sodu-vpbank" element={<SoduVpbank />} />
        <Route path="/sodu-tpbank" element={<SoduTpbank />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
