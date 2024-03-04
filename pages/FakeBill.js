import React from "react";
import { useNavigate } from "react-router-dom";
import imgVietcombank from "../access/img/logoBank/vietcombank.png";
import imgTpbank from "../access/img/logoBank/tpbank.png";
import imgMbBank from "../access/img/logoBank/mbbank.png";
import imgTechcombank from "../access/img/logoBank/techcombank.png";
import imgAcb from "../access/img/logoBank/acb.png";
import imgVietinbank from "../access/img/logoBank/vietinbank.png";
import imgBidv from "../access/img/logoBank/bidv.png";
import imgAgribank from "../access/img/logoBank/agribank.png";
import imgVpBank from "../access/img/logoBank/vpbank.png";
import imgMomo from "../access/img/logoBank/momo.png";
import imgSacombank from "../access/img/logoBank/sacombank.png";
import imgMsb from "../access/img/logoBank/msb.png";
import imgOcb from "../access/img/logoBank/ocb.png";
const FakeBill = () => {
  const navigate = useNavigate();
  const handleToBill = (value) => {
    switch (value) {
      case "vietcombank":
        navigate("/fakeBill-vietcombank");
        break;
      case "tpbank":
        navigate("/fakeBill-tpbank");
        break;
      case "mbbank":
        navigate("/fakeBill-mbbank");
        break;
      case "techcombank":
        navigate("/fakeBill-techcombank");
        break;
      case "acb":
        navigate("/fakeBill-acb");
        break;
      case "vietinbank":
        navigate("/fakeBill-vietinbank");
        break;
      case "bidv":
        navigate("/fakeBill-bidv");
        break;
      case "agribank":
        navigate("/fakeBill-agribank");
        break;
      case "vpbank":
        navigate("/fakeBill-vpbank");
        break;
      case "momo":
        navigate("/fakeBill-momo");
        break;
      case "sacombank":
        navigate("/fakeBill-sacombank");
        break;
      case "msb":
        navigate("/fakeBill-msb");
        break;
      case "ocb":
        navigate("/fakeBill-ocb");
        break;
      default:
        break;
    }
  };
  return (
    <div className="w-[86%] min-h-[100vh] h-max bg-[#161D31] text-white">
      <div className="w-[96%] m-auto mt-[4rem] flex justify-start items-start flex-wrap">
        <div
          className="w-[14rem] h-[10rem] bg-[#283046] rounded-md m-[2rem] flex flex-col justify-start items-center cursor-pointer"
          onClick={() => handleToBill("vietcombank")}
        >
          <img
            src={imgVietcombank}
            className="w-[4rem] rounded-full mt-[1rem]"
          ></img>
          <p className="mt-1">Vietcombank</p>
        </div>
        <div
          className="w-[14rem] h-[10rem] bg-[#283046] rounded-md m-[2rem] flex flex-col justify-start items-center cursor-pointer"
          onClick={() => handleToBill("tpbank")}
        >
          <img
            src={imgTpbank}
            className="w-[4rem] rounded-full mt-[1rem]"
          ></img>
          <p className="mt-1">Tpbank</p>
        </div>
        <div
          className="w-[14rem] h-[10rem] bg-[#283046] rounded-md m-[2rem] flex flex-col justify-start items-center cursor-pointer"
          onClick={() => handleToBill("mbbank")}
        >
          <img
            src={imgMbBank}
            className="w-[4rem] rounded-full mt-[1rem]"
          ></img>
          <p className="mt-1">MbBank</p>
        </div>
        <div
          className="w-[14rem] h-[10rem] bg-[#283046] rounded-md m-[2rem] flex flex-col justify-start items-center cursor-pointer"
          onClick={() => handleToBill("techcombank")}
        >
          <img
            src={imgTechcombank}
            className="w-[4rem] rounded-full mt-[1rem]"
          ></img>
          <p className="mt-1">Techcombank</p>
        </div>
        <div
          className="w-[14rem] h-[10rem] bg-[#283046] rounded-md m-[2rem] flex flex-col justify-start items-center cursor-pointer"
          onClick={() => handleToBill("acb")}
        >
          <img src={imgAcb} className="w-[4rem] rounded-full mt-[1rem]"></img>
          <p className="mt-1">ACB</p>
        </div>
        <div
          className="w-[14rem] h-[10rem] bg-[#283046] rounded-md m-[2rem] flex flex-col justify-start items-center cursor-pointer"
          onClick={() => handleToBill("vietinbank")}
        >
          <img
            src={imgVietinbank}
            className="w-[4rem] rounded-full mt-[1rem]"
          ></img>
          <p className="mt-1">Vietinbank</p>
        </div>
        <div
          className="w-[14rem] h-[10rem] bg-[#283046] rounded-md m-[2rem] flex flex-col justify-start items-center cursor-pointer"
          onClick={() => handleToBill("bidv")}
        >
          <img src={imgBidv} className="w-[4rem] rounded-full mt-[1rem]"></img>
          <p className="mt-1">BIDV</p>
        </div>
        <div
          className="w-[14rem] h-[10rem] bg-[#283046] rounded-md m-[2rem] flex flex-col justify-start items-center cursor-pointer"
          onClick={() => handleToBill("agribank")}
        >
          <img
            src={imgAgribank}
            className="w-[4rem] rounded-full mt-[1rem]"
          ></img>
          <p className="mt-1">Agribank</p>
        </div>
        <div
          className="w-[14rem] h-[10rem] bg-[#283046] rounded-md m-[2rem] flex flex-col justify-start items-center cursor-pointer"
          onClick={() => handleToBill("vpbank")}
        >
          <img
            src={imgVpBank}
            className="w-[4rem] rounded-full mt-[1rem]"
          ></img>
          <p className="mt-1">Vpbank</p>
        </div>
        <div
          className="w-[14rem] h-[10rem] bg-[#283046] rounded-md m-[2rem] flex flex-col justify-start items-center cursor-pointer"
          onClick={() => handleToBill("momo")}
        >
          <img src={imgMomo} className="w-[4rem] rounded-full mt-[1rem]"></img>
          <p className="mt-1">Momo</p>
        </div>
        <div
          className="w-[14rem] h-[10rem] bg-[#283046] rounded-md m-[2rem] flex flex-col justify-start items-center cursor-pointer"
          onClick={() => handleToBill("sacombank")}
        >
          <img
            src={imgSacombank}
            className="w-[4rem] rounded-full mt-[1rem]"
          ></img>
          <p className="mt-1">Sacombank</p>
        </div>
        <div
          className="w-[14rem] h-[10rem] bg-[#283046] rounded-md m-[2rem] flex flex-col justify-start items-center cursor-pointer"
          onClick={() => handleToBill("msb")}
        >
          <img src={imgMsb} className="w-[4rem] rounded-full mt-[1rem]"></img>
          <p className="mt-1">MSB</p>
        </div>
        <div
          className="w-[14rem] h-[10rem] bg-[#283046] rounded-md m-[2rem] flex flex-col justify-start items-center cursor-pointer"
          onClick={() => handleToBill("ocb")}
        >
          <img src={imgOcb} className="w-[4rem] rounded-full mt-[1rem]"></img>
          <p className="mt-1">OCB</p>
        </div>
      </div>
    </div>
  );
};

export default FakeBill;
