import React, { useEffect, useState } from "react";
import axios from "axios";
import wifi1 from "../access/img/phone/wifi-1black2.png";
import wifi2 from "../access/img/phone/wifi-2black2.png";
import wifi3 from "../access/img/phone/wifi-3black2.png";
import pin0 from "../access/img/phone/pin0black2.png";
import html2canvas from "html2canvas";
import imgBg1 from "../access/img/vietcombank/bankgroundvietcombank1.jpg";
import imgBg2 from "../access/img/vietcombank/backgroundvietcombank2.jpg";
import nen1 from "../access/img/vpbank/demo.png";
import writtenNumber from "written-number";
import vietcombank from "../access/img/logoBank/vietcombank.png";
import VietinBank from "../access/img/logoBank/vietinbank.png";
import BIDV from "../access/img/logoBank/bidv.png";
import Agribank from "../access/img/logoBank/agribank.png";
import OCB from "../access/img/logoBank/ocb.png";
import MBBank from "../access/img/logoBank/mbbank.png";
import Techcombank from "../access/img/logoBank/techcombank.png";
import ACB from "../access/img/logoBank/acb.png";
import VPBank from "../access/img/logoBank/vpbank.png";
import TPBank from "../access/img/logoBank/tpbank.png";
import Sacombank from "../access/img/logoBank/sacombank.png";
import HDBank from "../access/img/logoBank/hdbank.png";
import VietCapitalBank from "../access/img/logoBank/VietCapitalBank.jpg";
import SCB from "../access/img/logoBank/SCB.jpg";
import VIB from "../access/img/logoBank/VIB.jpg";
import SHB from "../access/img/logoBank/SHB.png";
import Eximbank from "../access/img/logoBank/Eximbank.jpg";
import MSB from "../access/img/logoBank/msb.png";
import CAKE from "../access/img/logoBank/CAKE.png";
import Ubank from "../access/img/logoBank/Ubank.png";

const FakeBillVpBank = () => {
  const [amount, setAmount] = useState("");
  const [currentTime, setCurrentTime] = useState("");
  const [timeSecion, setTimeSecion] = useState("");
  const [currentDate, setCurrentDate] = useState("");
  const [dayOfWeek, setDayOfWeek] = useState(""); // State mới để lưu trữ tên thứ
  const [nameClient, setNameClient] = useState("");
  const [numberClient, setNumberClient] = useState("");
  const [nameAllBank, setNameAllBank] = useState([]);
  const [numberRandom, setNumberRandom] = useState("");
  const [content, setContent] = useState("");
  const [percent, setPercent] = useState(45);
  const [wifi, setWifi] = useState(3);
  const [wave, setWave] = useState(4);
  const [isOn, setIsOn] = useState(false);
  const [selectPhone, setSelectPhone] = useState("iphone");
  const [background, setBackground] = useState(1);
  const [selectedOption, setSelectedOption] = useState("");
  const [nameSender, setNameSender] = useState("");
  const [numberSender, setNumberSender] = useState("");

  function capitalizeFirstLetters(string) {
    return string
      .toLowerCase()
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  }

  let amountInWords = writtenNumber(amount.replace(/\ /g, ""), { lang: "vi" });
  amountInWords = capitalizeFirstLetters(amountInWords);
  let avtBank;
  switch (selectedOption) {
    case "Vietcombank":
      avtBank = vietcombank;
      break;
    case "VietinBank":
      avtBank = VietinBank;
      break;
    case "BIDV":
      avtBank = BIDV;
      break;
    case "Agribank":
      avtBank = Agribank;
      break;
    case "OCB":
      avtBank = OCB;
      break;
    case "MBBank":
      avtBank = MBBank;
      break;
    case "Techcombank":
      avtBank = Techcombank;
      break;
    case "ACB":
      avtBank = ACB;
      break;
    case "VPBank":
      avtBank = VPBank;
      break;
    case "TPBank":
      avtBank = TPBank;
      break;
    case "Sacombank":
      avtBank = Sacombank;
      break;
    case "HDBank":
      avtBank = HDBank;
      break;
    case "VietCapitalBank":
      avtBank = VietCapitalBank;
      break;
    case "SCB":
      avtBank = SCB;
      break;
    case "VIB":
      avtBank = VIB;
      break;
    case "SHB":
      avtBank = SHB;
      break;
    case "Eximbank":
      avtBank = Eximbank;
      break;
    case "MSB":
      avtBank = MSB;
      break;
    case "CAKE":
      avtBank = CAKE;
      break;
    case "Ubank":
      avtBank = Ubank;
      break;
    default:
      break;
  }
  const toggle = () => {
    setIsOn((prevState) => !prevState);
  };
  let srcImage;
  if (wifi === 1) {
    srcImage = wifi1;
  } else if (wifi === 2) {
    srcImage = wifi2;
  } else {
    srcImage = wifi3;
  }
  let srcBackground;
  if (background === 1) {
    srcBackground = imgBg1;
  } else {
    srcBackground = imgBg2;
  }

  useEffect(() => {
    const getAllBank = async () => {
      try {
        const result = await axios("https://api.vietqr.io/v2/banks");
        const shortNames = result.data.data.map((item) => item.shortName);
        setNameAllBank(shortNames);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    getAllBank();
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, "0");
    const day = String(now.getDate()).padStart(2, "0");
    const formattedDate = `${day}/${month}/${year}`;
    setCurrentDate(formattedDate);

    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");
    const seconds = String(now.getSeconds()).padStart(2, "0"); // Lấy giây và thêm padding để có 2 chữ số
    const formattedTime = `${hours}:${minutes}`; // Định dạng thời gian với giờ, phút và giây
    const tictac = `${hours}:${minutes}:${seconds}`;
    setCurrentTime(formattedTime);
    setTimeSecion(tictac);

    function generateRandomString() {
      const characters = "0123456789";
      let randomString = "";
      for (let i = 0; i < 6; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        randomString += characters.charAt(randomIndex);
      }
      return randomString;
    }

    setNumberRandom(generateRandomString());
    const days = [
      "Chủ Nhật",
      "Thứ Hai",
      "Thứ Ba",
      "Thứ Tư",
      "Thứ Năm",
      "Thứ Sáu",
      "Thứ Bảy",
    ];
    const dayName = days[now.getDay()]; // Lấy tên thứ từ mảng theo index là giá trị trả về bởi getDay()
    setDayOfWeek(dayName); // Cập nhật tên thứ vào state mới
  }, []);

  const handleChange = (event) => {
    const value = event.target.value.replace(/[^\d]/g, "");
    const formattedValue = formatNumberWithCommas(value);
    setAmount(formattedValue);
  };

  const handleSetTime = (e) => {
    const newValue = e.target.value;
    setCurrentTime(newValue);
  };

  const handleSetDate = (e) => {
    const newValue = e.target.value;
    setCurrentDate(newValue);

    const parts = newValue.split("/"); // Tách chuỗi dựa vào ký tự "/"
    if (parts.length === 3) {
      const day = parseInt(parts[0], 10);
      const month = parseInt(parts[1], 10) - 1; // Giảm 1 vì tháng trong JS bắt đầu từ 0
      const year = parseInt(parts[2], 10);

      const dateObject = new Date(year, month, day);
      const daysOfWeek = [
        "Chủ Nhật",
        "Thứ Hai",
        "Thứ Ba",
        "Thứ Tư",
        "Thứ Năm",
        "Thứ Sáu",
        "Thứ Bảy",
      ];
      setDayOfWeek(daysOfWeek[dateObject.getDay()]); // Cập nhật ngày trong tuần
    }
  };

  const formatNumberWithCommas = (number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  };

  const handleSelectChange = (e) => {
    setSelectedOption(e.target.value);
  };
  const handleSelectPhone = (e) => {
    setSelectPhone(e);
    if (background !== 1 && background !== 2) {
      setBackground(1);
    }
  };
  const captureElement = () => {
    const element = document.getElementById("image-container"); // Đảm bảo rằng đây là ID của div bạn muốn chụp
    html2canvas(element, {
      onclone: (document) => {
        // Bạn có thể thực hiện các thay đổi trên clone của document trước khi chụp, nếu cần
      },
    })
      .then((canvas) => {
        const imgData = canvas.toDataURL("image/png");
        const link = document.createElement("a");
        link.download = "captured-image.png"; // Đặt tên file
        link.href = imgData;
        link.click(); // Trigger việc download
      })
      .catch((err) => {
        console.error("Có lỗi trong quá trình chụp ảnh:", err);
      });
  };
  const handleNumberClient = (event) => {
    const value = event.target.value.replace(/[^\d]/g, "");
    const formattedValue = value.replace(/(.{4})/g, "$1 ").trim();
    setNumberClient(formattedValue);
  };
  return (
    <div className="w-full h-max flex justify-start items-start text-white">
      <div className="w-[60%] h-max m-[2rem] rounded-md bg-[#181F31] p-2 pb-[4rem]">
        <p className="text-2xl m-[1rem]">Tạo bill chuyển khoản Vpbank</p>
        <div className="w-full flex justify-start items-center">
          <div className="w-[3rem] h-[3rem] m-[1rem] bg-[#7367F0] flex justify-center items-center rounded-md">
            <p>1</p>
          </div>
          <div className="w-max h-max">
            <p className="text-[#7367F0]">Thông tin</p>
            <p className="text-[0.8rem] opacity-70">Điền thông tin bill</p>
          </div>
        </div>
        <div className="w-full ">
          <label>Số tiền</label>
          <input
            className="w-full p-2 bg-[#181F31] outline-none border border-[#7367F0] mt-2 rounded-md"
            value={amount}
            onChange={handleChange}
          />
        </div>
        <div className="w-full flex justify-between items-start mt-4">
          <div className=" w-[40%]">
            <label>Giờ</label>
            <input
              className="w-full p-2 bg-[#181F31] outline-none border border-[#7367F0] mt-2 rounded-md text-center"
              value={currentTime}
              onChange={(e) => handleSetTime(e)}
            />
          </div>
          <div className=" w-[40%]">
            <label>Ngày</label>
            <input
              className="w-full p-2 bg-[#181F31] outline-none border border-[#7367F0] mt-2 rounded-md text-center"
              value={currentDate}
              onChange={(e) => handleSetDate(e)}
            />
          </div>
        </div>

        <div className="w-full flex justify-between items-start mt-4">
          <div className=" w-[40%]">
            <label>Tên người nhận</label>
            <input
              className="w-full p-2 bg-[#181F31] outline-none border border-[#7367F0] mt-2 rounded-md "
              value={nameClient}
              onChange={(e) => setNameClient(e.target.value)}
            />
          </div>
          <div className=" w-[40%]">
            <label>Số tài khoản người nhận</label>
            <input
              className="w-full p-2 bg-[#181F31] outline-none border border-[#7367F0] mt-2 rounded-md"
              value={numberClient}
              onChange={(e) => setNumberClient(e.target.value)}
            />
          </div>
        </div>
        <div className="w-full flex justify-between items-start mt-4">
          <div className=" w-[40%]">
            <label>Ngân hàng thụ hưởng</label>
            <select
              className="w-full p-2 bg-[#181F31] outline-none border border-[#7367F0] mt-2 rounded-md"
              value={selectedOption}
              onChange={handleSelectChange}
            >
              <option value="">Chọn ngân hàng</option>
              {nameAllBank.map((item, index) => (
                <option key={index} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>
          <div className=" w-[40%]">
            <label>Mã giao dịch </label>
            <input
              className="w-full p-2 bg-[#181F31] outline-none border border-[#7367F0] mt-2 rounded-md"
              value={numberRandom}
              onChange={(e) => setNumberRandom(e.target.value)}
            />
          </div>
        </div>
        <div className="w-full mt-4">
          <label>Nội dung giao dịch</label>
          <textarea
            className="w-full p-2 bg-[#181F31] outline-none border border-[#7367F0] mt-2 rounded-md resize-none"
            style={{ overflowY: "hidden" }}
            onInput={(e) => {
              e.target.style.height = "auto";
              e.target.style.height = e.target.scrollHeight + "px";
            }}
            onChange={(e) => setContent(e.target.value)}
          />
        </div>

        <div className="w-full flex justify-start items-center">
          <div className="w-[3rem] h-[3rem] m-[1rem] bg-[#7367F0] flex justify-center items-center rounded-md">
            <p>2</p>
          </div>
          <div className="w-max h-max">
            <p className="text-[#7367F0]">Cấu hình giao diện</p>
            <p className="text-[0.8rem] opacity-70">Chọn giao diện bill</p>
          </div>
        </div>
        <div className="w-full mt-4 flex justify-between items-start">
          <div className="w-[50%] ">
            <p>Giao diện điện thoại</p>
            <div>
              <label>
                <input
                  type="radio"
                  value={selectPhone}
                  checked={selectPhone === "iphone"}
                  onChange={() => handleSelectPhone("iphone")}
                />
                Iphone (11 Pro)
              </label>
              {/* <label className="ml-4">
          <input
            type="radio"
            value={selectPhone}
            checked={selectPhone === "androi"}
            onChange={() => handleSelectPhone("androi")}
          />
          Android (Redmi 9A)
        </label> */}
            </div>
          </div>
          <div className="w-[50%]">
            <div className=" w-[40%]">
              <label>Phần trăm pin</label>
              <input
                className="w-full p-2 bg-[#181F31] outline-none border border-[#7367F0] mt-2 rounded-md "
                value={percent}
                onChange={(e) => setPercent(e.target.value)}
              />
            </div>

            <div className=" w-[40%] mt-4">
              <label>Wifi</label>
              <select
                className="w-full p-2 bg-[#181F31] outline-none border border-[#7367F0] mt-2 rounded-md"
                value={wifi}
                onChange={(e) => setWifi(parseInt(e.target.value, 10))} // Chuyển chuỗi thành số nguyên
              >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
            </div>
            <div className=" w-[40%] mt-4">
              <label>Sóng mạng</label>
              <select
                className="w-full p-2 bg-[#181F31] outline-none border border-[#7367F0] mt-2 rounded-md"
                value={wave}
                onChange={(e) => setWave(parseInt(e.target.value, 10))} // Chuyển chuỗi thành số nguyên
              >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
              </select>
            </div>
            {/* <div className=" w-[40%] mt-4 flex flex-col justify-start items-start">
        <label>Lưu mẫu chuyển tiền</label>
        <div className="mt-2 flex justify-start items-center">
          <button
            onClick={toggle}
            className={`w-12 h-6 ${
              isOn ? "bg-green-500" : "bg-gray-500"
            }  rounded-full p-1 flex justify-start items-center `}
          >
            <div
              className={`bg-white w-5 h-5 rounded-full shadow-md transform duration-300 ease-in-out ${
                isOn ? "translate-x-6" : "translate-x-0"
              }`}
            ></div>
          </button>
          <span className="ml-2">{isOn ? "On" : "Off"}</span>
        </div>
      </div> */}
          </div>
        </div>
        <div
          className="m-auto w-[6rem] h-[3rem] bg-[#7367F0] mt-[6rem] rounded-md flex justify-center items-center cursor-pointer"
          onClick={captureElement}
        >
          <p>Tải ảnh</p>
        </div>
      </div>

      <div className="w-[40%] mt-[2rem] pt-[2rem] flex flex-col justify-center items-center">
        <div
          id="image-container"
          className="w-[375px] h-[812px] bg-[#d8d8d8] flex flex-col justify-start items-center relative overflow-hidden"
        >
          <img
            src={nen1}
            className="h-full object-top object-contain absolute z-10"
          ></img>

          <div className="top-0 w-full h-full z-40 relative flex flex-col justify-start items-start text-black">
            <div className="w-full pt-3 pl-4 flex justify-between items-start">
              <p
                className="h-full flex justify-start items-end text-[14px] -translate-y-[12px] text-[#2d2d2d]"
                style={{
                  fontWeight: 700,
                  letterSpacing: "2px",
                }}
              >
                {currentTime}
              </p>
              <div className="w-[6rem] h-[0.8rem] flex justify-end items-end  mr-4">
                <div className="flex h-full justify-start items-end w-max">
                  <div
                    className={`w-1 h-[40%] ml-[1px] rounded-[1px] ${
                      wave >= 1 ? "bg-[#2d2d2d]" : "bg-[#7a7a7a7a]"
                    }`}
                  ></div>
                  <div
                    className={`w-1 h-[60%] ml-[1px] rounded-[1px] ${
                      wave >= 2 ? "bg-[#2d2d2d]" : "bg-[#7a7a7a7a]"
                    }`}
                  ></div>
                  <div
                    className={`w-1 h-[80%] ml-[1px] rounded-[1px] ${
                      wave >= 3 ? "bg-[#2d2d2d]" : "bg-[#7a7a7a7a]"
                    }`}
                  ></div>
                  <div
                    className={`w-1 h-[100%] ml-[1px] rounded-[1px] ${
                      wave >= 4 ? "bg-[#2d2d2d]" : "bg-[#7a7a7a7a]"
                    }`}
                  ></div>
                </div>
                <img src={srcImage} className="w-[20px] ml-1"></img>
                <div className="h-full w-[2rem] ml-1 relative">
                  <img
                    src={pin0}
                    className="absolute bottom-0 left-0 w-full z-20"
                  ></img>
                  <div className="absolute z-10 top-2/4 w-[80%] h-full left-[1px] -translate-y-[56%] ">
                    <div
                      className={`h-full ${
                        percent <= 20 ? "bg-red-600" : "bg-[#2d2d2d]"
                      }`}
                      style={{ width: `${percent}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* content */}
          <div className=" w-[90%] h-full absolute z-40 flex flex-col justify-start items-center text-black ">
            <div className="w-full h-[5rem]  mt-[5.5rem] flex flex-col justify-center items-center">
              <p className="font-[600] text-[36px]">
                {amount} <span className="underline text-[#a3a3a3]">đ</span>
              </p>
              <p className="font-[600] text-[13px] text-[#8d8d8d]">
                {amountInWords} Đồng
              </p>
            </div>
            <div className="w-full h-[3.4rem] mt-[5.6rem] flex justify-start items-center">
              <div className="w-[2.6rem] h-[2.6rem] rounded-full border border-[#c6c6c6] translate-y-[9px]">
                <img src={avtBank} className="w-full h-full rounded-full"></img>
              </div>
              <div className="w-[80%] h-full ml-2 flex flex-col justify-center items-start">
                <p className="font-[600] text-[17px]">{nameClient}</p>
                <p className="font-[500] text-[14px] text-[#ababab]">
                  {numberClient}
                </p>
              </div>
            </div>
            <div className="w-full h-[3rem]  mt-[1.5rem] pr-2 flex justify-end items-center">
              <p className="font-[600]">{currentDate}</p>
            </div>
            <div className="w-full h-[3rem]  mt-[0.3rem] pr-2 flex justify-end items-center">
              <p className="font-[600]">{content}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FakeBillVpBank;
