import React from "react";
import { useNavigate } from "react-router-dom";
import imgVietcombank from "../access/img/logoBank/vietcombank.png";
import imgTpbank from "../access/img/logoBank/tpbank.png";
import imgMbBank from "../access/img/logoBank/mbbank.png";
import imgTechcombank from "../access/img/logoBank/techcombank.png";
import imgAcb from "../access/img/logoBank/acb.png";
import imgVietinbank from "../access/img/logoBank/vietinbank.png";
import imgAgribank from "../access/img/logoBank/agribank.png";
import imgMomo from "../access/img/logoBank/momo.png";

const Biendong = () => {
  const navigate = useNavigate();
  const handleToBill = (value) => {
    switch (value) {
      case "vietcombank":
        navigate("/biendong-vietcombank");
        break;
      case "tpbank":
        navigate("/biendong-tpbank");
        break;
      case "mbbank":
        navigate("/biendong-mbbank");
        break;
      case "techcombank":
        navigate("/biendong-techcombank");
        break;
      case "acb":
        navigate("/biendong-acb");
        break;
      case "vietinbank":
        navigate("/biendong-vietinbank");
        break;
      case "bidv":
        navigate("/biendong-bidv");
        break;
      case "agribank":
        navigate("/biendong-agribank");
        break;
      case "vpbank":
        navigate("/biendong-vpbank");
        break;
      case "momo":
        navigate("/biendong-momo");
        break;
      case "sacombank":
        navigate("/biendong-sacombank");
        break;
      case "msb":
        navigate("/biendong-msb");
        break;
      case "ocb":
        navigate("/biendong-ocb");
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
          onClick={() => handleToBill("momo")}
        >
          <img src={imgMomo} className="w-[4rem] rounded-full mt-[1rem]"></img>
          <p className="mt-1">Momo</p>
        </div>
      </div>
    </div>
  );
};

export default Biendong;
