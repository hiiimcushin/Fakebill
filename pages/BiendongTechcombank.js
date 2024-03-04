import React, { useEffect, useState } from "react";
import { format, parse, subDays } from "date-fns";
import axios from "axios";
import wifi1 from "../access/img/phone/wifi-1black2.png";
import wifi2 from "../access/img/phone/wifi-2black2.png";
import wifi3 from "../access/img/phone/wifi-3black2.png";
import pin0 from "../access/img/phone/pin0black2.png";
import html2canvas from "html2canvas";
import imgBg1 from "../access/img/vietcombank/bankgroundvietcombank1.jpg";
import imgBg2 from "../access/img/vietcombank/backgroundvietcombank2.jpg";
import nen1 from "../access/img/biendong/techcombank/demo.png";

const BiendongTechcombank = () => {
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
  const [selectPhone, setSelectPhone] = useState("iphone");
  const [background, setBackground] = useState(1);
  const [selectedOption, setSelectedOption] = useState("");
  const [selecNameBank, setSelecnameBank] = useState("");
  const [nameSender, setNameSender] = useState("");
  const [numberSender, setNumberSender] = useState("");
  const [category, setCategory] = useState("send");
  const [notSpace, setNotSpace] = useState("");
  const [timeXuet1, setTimeXuyet1] = useState("");
  const [timeXuet2, setTimeXuyet2] = useState("");
  const [gach1, setGach1] = useState("");
  const [gach2, setGach2] = useState("");
  const [noney, setNoney] = useState("");

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
  let newValue = parseInt(amount.replace(/,/g, "")) - 2000000;

  // Chuyển đổi giá trị mới thành chuỗi và định dạng lại
  newValue = newValue.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  let newValue2 = parseInt(newValue.replace(/,/g, "")) - 1530000;
  newValue2 = newValue2.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  let newValue3 = parseInt(newValue2.replace(/,/g, "")) - 4250000;
  newValue3 = newValue3.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  useEffect(() => {
    const getAllBank = async () => {
      try {
        const result = await axios("https://api.vietqr.io/v2/banks");
        const shortNames = result.data.data.map((item) => item);
        setNameAllBank(shortNames);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    getAllBank();
    const now = new Date();
    const year = now.getFullYear();
    const year2 = now.getFullYear().toString().slice(-2);
    const month = String(now.getMonth() + 1).padStart(2, "0");
    const day = String(now.getDate()).padStart(2, "0");
    const previousDay1 = String(Number(day) - 2).padStart(2, "0");
    const previousDay2 = String(Number(day) - 3).padStart(2, "0");
    const formattedDate = `${day} tháng ${month},${year}`;
    const xuet1 = `${previousDay1} tháng ${month}, ${year}`;
    const xuet2 = `${previousDay2} tháng ${month}, ${year}`;
    const gach11 = `${previousDay1}-${month}-${year}`;
    const gach22 = `${previousDay2}-${month}-${year}`;
    const notcach = `${day}${month}${year2}`;
    setCurrentDate(formattedDate);
    setNotSpace(notcach);
    setTimeXuyet1(xuet1);
    setTimeXuyet2(xuet2);
    setGach1(gach11);
    setGach2(gach22);

    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");
    const seconds = String(now.getSeconds()).padStart(2, "0"); // Lấy giây và thêm padding để có 2 chữ số
    const formattedTime = `${hours}:${minutes}`; // Định dạng thời gian với giờ, phút và giây
    const tictac = `${hours}${minutes}${seconds}`;
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
  const handleChange2 = (event) => {
    const value = event.target.value.replace(/[^\d]/g, "");
    const formattedValue = formatNumberWithCommas(value);
    setNoney(formattedValue);
  };

  const handleSetTime = (e) => {
    const newValue = e.target.value;
    setCurrentTime(newValue);
  };

  const handleSetDate = (e) => {
    const newValue = e.target.value;
    setCurrentDate(newValue);

    // Chuyển chuỗi sang đối tượng Date
    const ngayDateObject = parse(newValue, "dd-MM-yyyy", new Date());

    // Kiểm tra nếu ngày tháng nhập vào là NaN (không hợp lệ)
    if (isNaN(ngayDateObject.getTime())) {
      // Nếu không hợp lệ, không thực hiện gì cả và thoát khỏi hàm
      return;
    }

    // Giảm số ngày điều chỉnh xuống một đơn vị
    const ngayMoi = subDays(ngayDateObject, 2);
    const ngayMoi2 = subDays(ngayDateObject, 3);

    // Chuyển đối tượng Date mới thành chuỗi ngày
    const ngayMoiStr = format(ngayMoi, "dd-MM-yyyy");
    const ngayMoiStr2 = format(ngayMoi2, "dd-MM-yyyy");
    setGach1(ngayMoiStr);
    setGach2(ngayMoiStr2);

    // Xử lý hiển thị ngày trong tuần
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
  const formatNoney = (number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  const handleSelectChange = (event) => {
    const selectedShortName = event.target.value;
    const selectedBank = nameAllBank.find(
      (item) => item.shortName === selectedShortName
    );

    setSelectedOption(selectedShortName);
    if (selectedBank) {
      setSelecnameBank(selectedBank.name);
    } else {
      // Handle case when the first option "Chọn ngân hàng" is selected
      setSelecnameBank("");
    }
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
        <p className="text-2xl m-[1rem]">Tạo bill chuyển khoản OCB</p>
        <div className="w-full flex justify-start items-center">
          <div className="w-[3rem] h-[3rem] m-[1rem] bg-[#7367F0] flex justify-center items-center rounded-md">
            <p>1</p>
          </div>
          <div className="w-max h-max">
            <p className="text-[#7367F0]">Thông tin</p>
            <p className="text-[0.8rem] opacity-70">Điền thông tin bill</p>
          </div>
        </div>
        <div className="w-full flex justify-between items-start mt-4">
          <div className=" w-[40%]">
            <label>Tên tài khoản nguồn</label>
            <input
              className="w-full p-2 bg-[#181F31] outline-none border border-[#7367F0] mt-2 rounded-md "
              value={nameSender}
              onChange={(e) => setNameSender(e.target.value)}
            />
          </div>
          <div className=" w-[40%]">
            <label>Số tài khoản nguồn</label>
            <input
              className="w-full p-2 bg-[#181F31] outline-none border border-[#7367F0] mt-2 rounded-md"
              value={numberSender}
              onChange={(e) => setNumberSender(e.target.value)}
            />
          </div>
        </div>

        <div className="w-full flex justify-between items-start mt-4">
          <div className=" w-[40%]">
            <label>Giờ chụp ảnh</label>
            <input
              className="w-full p-2 bg-[#181F31] outline-none border border-[#7367F0] mt-2 rounded-md text-center"
              value={currentTime}
              onChange={(e) => handleSetTime(e)}
            />
          </div>
          {/* <div className=" w-[40%]">
            <label>Ngày</label>
            <input
              className="w-full p-2 bg-[#181F31] outline-none border border-[#7367F0] mt-2 rounded-md text-center"
              value={currentDate}
              onChange={(e) => handleSetDate(e)}
            />
          </div> */}
        </div>
        <div className="w-[50%] mt-4">
          <p>Thể loại</p>
          <div>
            <label>
              <input
                type="radio"
                value={category}
                checked={category === "send"}
                onChange={() => setCategory("send")}
              />
              Gửi tiền
            </label>
            <label className="ml-4">
              <input
                type="radio"
                value={category}
                checked={category === "receive"}
                onChange={() => setCategory("receive")}
              />
              Nhận tiền
            </label>
          </div>
        </div>
        <div className="w-full mt-4">
          <label>Số dư cuối kỳ </label>
          <input
            className="w-full p-2 bg-[#181F31] outline-none border border-[#7367F0] mt-2 rounded-md"
            value={amount}
            onChange={handleChange}
          />
        </div>
        <div className="w-full mt-4">
          <label>Số tiền nhận hoặc chuyển</label>
          <input
            className="w-full p-2 bg-[#181F31] outline-none border border-[#7367F0] mt-2 rounded-md"
            value={noney}
            onChange={handleChange2}
          />
        </div>

        <div className="w-full flex justify-between items-start mt-4">
          <div className=" w-[40%]">
            <label>Ngày thực hiện giao dịch</label>
            <input
              className="w-full p-2 bg-[#181F31] outline-none border border-[#7367F0] mt-2 rounded-md text-center"
              value={currentDate}
              onChange={(e) => handleSetDate(e)}
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
                className="h-full flex justify-start items-end text-[14px] -translate-y-[12px] text-[#333333]"
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
                      wave >= 1 ? "bg-[#333333]" : "bg-[#7a7a7a7a]"
                    }`}
                  ></div>
                  <div
                    className={`w-1 h-[60%] ml-[1px] rounded-[1px] ${
                      wave >= 2 ? "bg-[#333333]" : "bg-[#7a7a7a7a]"
                    }`}
                  ></div>
                  <div
                    className={`w-1 h-[80%] ml-[1px] rounded-[1px] ${
                      wave >= 3 ? "bg-[#333333]" : "bg-[#7a7a7a7a]"
                    }`}
                  ></div>
                  <div
                    className={`w-1 h-[100%] ml-[1px] rounded-[1px] ${
                      wave >= 4 ? "bg-[#333333]" : "bg-[#7a7a7a7a]"
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
                        percent <= 20 ? "bg-red-600" : "bg-[#333333]"
                      }`}
                      style={{ width: `${percent}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* content */}
          <div className=" w-full h-full absolute z-40 flex flex-col justify-start items-start text-black">
            <p className="mt-[12.2rem] pl-[1.4rem] text-[14px] font-[500] text-[#898989]">
              {dayOfWeek}, {currentDate}
            </p>
            <div className="mt-[1.4rem] pl-[1.4rem] w-full flex flex-col justify-start items-start leading-[18px]">
              <p className="font-[500] text-[14px]">Tài khoản {numberSender}</p>
              <p className="font-[500] text-[14px] text-[#898989]">
                Số tiền GD: {category === "send" ? "-" : "+"} {noney}
              </p>
              <p className="font-[500] text-[14px] text-[#898989]">
                Số dư: {amount}
              </p>
              <p className="font-[500] text-[14px] text-[#898989]">{content}</p>
            </div>
            <div className="mt-[4.4rem] pl-[1.4rem] w-full flex flex-col justify-start items-start leading-[18px]">
              <p className="font-[500] text-[14px]">Tài khoản {numberSender}</p>
              <p className="font-[500] text-[14px] text-[#898989]">
                Số tiền GD: - 2,000,000
              </p>
              <p className="font-[500] text-[14px] text-[#898989]">
                Số dư: {newValue}
              </p>
              <p className="font-[500] text-[14px] text-[#898989]">
                {nameSender} chuyen tien
              </p>
            </div>
            <p className="mt-[1.6rem] pl-[1.4rem] text-[14px] font-[500] text-[#898989]">
              Thứ Sáu, {timeXuet1}
            </p>
            <div className="mt-[1.4rem] pl-[1.4rem] w-full flex flex-col justify-start items-start leading-[18px]">
              <p className="font-[500] text-[14px]">Tài khoản {numberSender}</p>
              <p className="font-[500] text-[14px] text-[#898989]">
                Số tiền GD: + 1,530,000
              </p>
              <p className="font-[500] text-[14px] text-[#898989]">
                Số dư: {newValue2}
              </p>
              <p className="font-[500] text-[14px] text-[#898989]">
                chuyen tien nhan vien
              </p>
            </div>
            <p className="mt-[1.6rem] pl-[1.4rem] text-[14px] font-[500] text-[#898989]">
              Thứ Năm, {timeXuet2}
            </p>
            <div className="mt-[1.4rem] pl-[1.4rem] w-full flex flex-col justify-start items-start leading-[18px]">
              <p className="font-[500] text-[14px]">Tài khoản {numberSender}</p>
              <p className="font-[500] text-[14px] text-[#898989]">
                Số tiền GD: + 4,250,000
              </p>
              <p className="font-[500] text-[14px] text-[#898989]">
                Số dư: {newValue3}
              </p>
              <p className="font-[500] text-[14px] text-[#898989]">
                {nameSender} chuyen tien
              </p>
            </div>
            <p className="mt-[1.6rem] pl-[1.4rem] text-[14px] font-[500] text-[#898989]">
              Thứ Năm, {timeXuet2}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BiendongTechcombank;
