import React, { useEffect, useState } from "react";
import axios from "axios";
import imgNen1 from "../access/img/vietcombank/nen1.png";
import imgNen2 from "../access/img/vietcombank/nen2.png";
import imgNen3 from "../access/img/vietcombank/nen3.png";
import imgNen4 from "../access/img/vietcombank/nen4.png";
import imgBg1 from "../access/img/vietcombank/bankgroundvietcombank1.jpg";
import imgBg2 from "../access/img/vietcombank/backgroundvietcombank2.jpg";
import wifi1 from "../access/img/phone/wifi-1.png";
import wifi2 from "../access/img/phone/wifi-2.png";
import wifi3 from "../access/img/phone/wifi-3.png";
import wifi4 from "../access/img/phone/wifi-4.png";
import pin0 from "../access/img/phone/pin0.png";
import iconHome from "../access/img/phone/icon-home.png";
import vcb from "../access/img/vietcombank/vcb.png";
import tich from "../access/img/vietcombank/tich.png";
import transaction from "../access/img/vietcombank/transaction.png";
import html2canvas from "html2canvas";

const FakeBillVietcombank = () => {
  const [amount, setAmount] = useState("");
  const [currentTime, setCurrentTime] = useState("");
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
    const formattedTime = `${hours}:${minutes}`;
    setCurrentTime(formattedTime);

    function generateRandomNumber() {
      let randomNumber = "";
      for (let i = 0; i < 10; i++) {
        randomNumber += Math.floor(Math.random() * 10); // Sinh số ngẫu nhiên từ 0 đến 9
      }
      return randomNumber;
    }
    setNumberRandom(generateRandomNumber());
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
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };
  const [selectedOption, setSelectedOption] = useState("");

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
  return (
    <div className="w-full h-max flex justify-start items-start text-white">
      <div className="w-[60%] h-max m-[2rem] rounded-md bg-[#181F31] p-2 pb-[4rem]">
        <p className="text-2xl m-[1rem]">Tạo bill chuyển khoản Vietcombank</p>
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
            <p className="mt-4">Hình nền</p>
            <div className="w-full flex justify-start items-start flex-wrap">
              <div
                className="m-1 flex flex-col justify-start items-center cursor-pointer"
                onClick={(e) => setBackground(1)}
              >
                <img
                  src={imgNen1}
                  className="w-[6rem] m-2"
                  onClick={() => setBackground(1)}
                ></img>
                <label className="cursor-pointer">
                  <input
                    type="radio"
                    value={selectPhone}
                    checked={background === 1}
                    onChange={() => setBackground(1)}
                  />
                  Hình nền 1
                </label>
              </div>
              <div
                className="m-1 flex flex-col justify-start items-center cursor-pointer"
                onClick={(e) => setBackground(2)}
              >
                <img
                  src={imgNen2}
                  className="w-[6rem] m-2"
                  onClick={() => setBackground(2)}
                ></img>
                <label className="cursor-pointer">
                  <input
                    type="radio"
                    value={background}
                    checked={background === 2}
                    onChange={() => setBackground(2)}
                  />
                  Hình nền 2
                </label>
              </div>
              {selectPhone === "androi" && (
                <div
                  className="m-1 flex flex-col justify-start items-center cursor-pointer"
                  onClick={(e) => setBackground(3)}
                >
                  <img src={imgNen3} className="w-[6rem] m-2"></img>
                  <label className="cursor-pointer">
                    <input
                      type="radio"
                      value={background}
                      checked={background === 3}
                      onChange={() => setBackground(3)}
                    />
                    Hình nền 3
                  </label>
                </div>
              )}
              {selectPhone === "androi" && (
                <div
                  className="m-1 flex flex-col justify-start items-center cursor-pointer"
                  onClick={(e) => setBackground(4)}
                >
                  <img src={imgNen4} className="w-[6rem] m-2"></img>
                  <label className="cursor-pointer">
                    <input
                      type="radio"
                      value={background}
                      checked={background === 4}
                      onChange={() => setBackground(4)}
                    />
                    Hình nền 4
                  </label>
                </div>
              )}
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
          className="w-[375px] h-[812px] bg-[#0D1E25] flex flex-col justify-between items-center relative"
        >
          <img
            src={srcBackground}
            className="h-full object-cover absolute z-10"
          ></img>
          <div
            className="w-full h-full bg-[#0D1E25] absolute z-20"
            style={{
              background:
                "linear-gradient(to bottom, rgba(13, 30, 37, 1) 40%, rgba(13, 30, 37, 0.8) 100%)",
            }}
          ></div>
          <div className="top-0 w-full h-full z-40 relative">
            <div className="w-full pt-3 pl-4 flex justify-between items-start">
              <p
                className="h-full flex justify-start items-end text-[14px] -translate-y-[12px]"
                style={{
                  fontWeight: 500,
                  letterSpacing: "2px",
                }}
              >
                {currentTime}
              </p>
              <div className="w-[6rem] h-[0.8rem] flex justify-end items-end  mr-4">
                <div className="flex h-full justify-start items-end w-max">
                  <div
                    className={`w-1 h-[40%] ml-[1px] rounded-[1px] ${
                      wave >= 1 ? "bg-white" : "bg-[#7a7a7a7a]"
                    }`}
                  ></div>
                  <div
                    className={`w-1 h-[60%] ml-[1px] rounded-[1px] ${
                      wave >= 2 ? "bg-white" : "bg-[#7a7a7a7a]"
                    }`}
                  ></div>
                  <div
                    className={`w-1 h-[80%] ml-[1px] rounded-[1px] ${
                      wave >= 3 ? "bg-white" : "bg-[#7a7a7a7a]"
                    }`}
                  ></div>
                  <div
                    className={`w-1 h-[100%] ml-[1px] rounded-[1px] ${
                      wave >= 4 ? "bg-white" : "bg-[#7a7a7a7a]"
                    }`}
                  ></div>
                </div>
                <img src={srcImage} className="h-full ml-1"></img>
                <div className="h-full w-[2rem] ml-1 relative">
                  <img
                    src={pin0}
                    className="absolute bottom-0 left-0 w-full z-20"
                  ></img>
                  <div className="absolute z-10 top-2/4 w-[80%] h-full left-[1px] -translate-y-[56%] ">
                    <div
                      className={`h-full ${
                        percent <= 20 ? "bg-red-600" : "bg-white"
                      }`}
                      style={{ width: `${percent}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-4 h-[1.4rem] flex justify-end items-start">
              <img src={iconHome} className="h-full mr-4"></img>
            </div>
            <div className="w-full flex justify-center items-start mt-10">
              <img src={vcb} className="w-[10rem]"></img>
            </div>
            <div className="w-full mt-6 ">
              <img src={tich} className="h-[3.4rem] m-auto block"></img>
            </div>
            <div className="w-full mt-4 text-center">
              <p
                className=""
                style={{
                  fontWeight: 500,
                }}
              >
                CHUYỂN KHOẢN THÀNH CÔNG
              </p>
            </div>
            <div className="w-full mt-2 text-center">
              <p
                className="text-[#72BF00] text-2xl"
                style={{
                  fontWeight: 500,
                }}
              >
                {amount} VND
              </p>
            </div>
            <div className="w-full mt-2 text-center">
              <p
                className="opacity-50 text-[13px]"
                style={{
                  fontWeight: 500,
                }}
              >
                {currentTime} {dayOfWeek} {currentDate}
              </p>
            </div>
            <div className="w-[94%] border-t-[1px] mt-8 m-auto opacity-50"></div>
            <div className="h-[3.4rem] flex justify-between items-center m-auto w-[94%]">
              <div className="w-[45%] h-full flex justify-start items-center">
                <p
                  className="opacity-70"
                  style={{
                    fontWeight: 400,
                  }}
                >
                  Tên người thụ hưởng
                </p>
              </div>
              <div className="w-[50%] h-full flex justify-end items-center ">
                <p
                  className="text-[1rem] text-end"
                  style={{
                    fontWeight: 600,
                  }}
                >
                  {nameClient}
                </p>
              </div>
            </div>
            <div className="w-[94%] border-t-[1px] mt-2 m-auto opacity-50"></div>
            <div className="h-[3.4rem] flex justify-between items-center m-auto w-[94%]">
              <div className="w-[45%] h-full flex justify-start items-center">
                <p
                  className="opacity-70"
                  style={{
                    fontWeight: 400,
                  }}
                >
                  Tài khoản thụ hưởng
                </p>
              </div>
              <div className="w-[50%] h-full flex justify-end items-center ">
                <p
                  className="text-[1rem] text-end"
                  style={{
                    fontWeight: 600,
                  }}
                >
                  {numberClient}
                </p>
              </div>
            </div>
            <div className="w-[94%] border-t-[1px] mt-2 m-auto opacity-50"></div>
            <div className="h-[3.4rem] flex justify-between items-center m-auto w-[94%]">
              <div className="w-[45%] h-full flex justify-start items-center">
                <p
                  className="opacity-70"
                  style={{
                    fontWeight: 400,
                  }}
                >
                  Ngân hàng thụ hưởng
                </p>
              </div>
              <div className="w-[50%] h-full flex justify-end items-center ">
                <p
                  className="text-[1rem] text-end"
                  style={{
                    fontWeight: 600,
                  }}
                >
                  {selectedOption}
                </p>
              </div>
            </div>
            <div className="w-[94%] border-t-[1px] mt-2 m-auto opacity-50"></div>
            <div className="h-[3.4rem] flex justify-between items-center m-auto w-[94%]">
              <div className="w-[45%] h-full flex justify-start items-center">
                <p
                  className="opacity-70"
                  style={{
                    fontWeight: 400,
                  }}
                >
                  Mã giao dịch
                </p>
              </div>
              <div className="w-[50%] h-full flex justify-end items-center ">
                <p
                  className="text-[1rem] text-end"
                  style={{
                    fontWeight: 600,
                  }}
                >
                  {numberRandom}
                </p>
              </div>
            </div>
            <div className="w-[94%] border-t-[1px] mt-2 m-auto opacity-50"></div>
            <div className="h-[3.4rem] flex justify-between items-center m-auto w-[94%]">
              <div className="w-[45%] h-full flex justify-start items-center">
                <p
                  className="opacity-70"
                  style={{
                    fontWeight: 400,
                  }}
                >
                  Nội dung
                </p>
              </div>
              <div className="w-[50%] h-full flex justify-end items-center ">
                <p
                  className="text-[1rem] text-end"
                  style={{
                    fontWeight: 600,
                  }}
                >
                  {content}
                </p>
              </div>
            </div>
            <div className="w-[94%] border-t-[1px] mt-2 m-auto opacity-50"></div>
            <div className="h-[3.4rem] flex justify-between items-center m-auto w-[94%]">
              <div className="w-[45%] h-full flex justify-start items-center">
                <p
                  className="opacity-70"
                  style={{
                    fontWeight: 400,
                  }}
                >
                  Lưu mẫu chuyển tiền
                </p>
              </div>
              <div className=" flex justify-start items-center rounded-full w-[3.2rem] h-[2.1rem] border-[2px] border-[#ffffff50]">
                <div className="w-[1.8rem] h-[1.8rem] rounded-full bg-white ml-[1px] mr-[1px]"></div>
              </div>
            </div>
            <div className="w-[94%] border-t-[1px] mt-2 m-auto opacity-50"></div>
            <div className="w-[94%] m-auto">
              <img src={transaction} className="mt-3 w-[96%] m-auto"></img>
            </div>
            <div className="m-auto bg-white w-[40%] h-[5px] absolute bottom-1 left-2/4 -translate-x-[50%] rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FakeBillVietcombank;
