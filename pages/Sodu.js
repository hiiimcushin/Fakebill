import React from "react";
import { useNavigate } from "react-router-dom";
import imgVietcombank from "../access/img/logoBank/vietcombank.png";
import imgTpbank from "../access/img/logoBank/tpbank.png";
import imgMbBank from "../access/img/logoBank/mbbank.png";
import imgVietinbank from "../access/img/logoBank/vietinbank.png";
import imgVpBank from "../access/img/logoBank/vpbank.png";

const Sodu = () => {
  const navigate = useNavigate();
  const handleToBill = (value) => {
    switch (value) {
      case "vietcombank":
        navigate("/sodu-vietcombank");
        break;
      case "tpbank":
        navigate("/sodu-tpbank");
        break;
      case "mbbank":
        navigate("/sodu-mbbank");
        break;
      case "vietinbank":
        navigate("/sodu-vietinbank");
        break;
      case "vpbank":
        navigate("/sodu-vpbank");
        break;
      case "sacombank":
        navigate("/sodu-sacombank");
        break;
      case "vpbank":
        navigate("/fakeBill-vpbank");
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
          onClick={() => handleToBill("vpbank")}
        >
          <img
            src={imgVpBank}
            className="w-[4rem] rounded-full mt-[1rem]"
          ></img>
          <p className="mt-1">Vpbank</p>
        </div>
      </div>
    </div>
  );
};

export default Sodu;
