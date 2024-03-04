import React from "react";
import html2canvas from "html2canvas";
import bankgroundvietcombank1 from "../access/img/vietcombank/bankgroundvietcombank1.jpg";

const Home = () => {
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
    <div className="text-white">
      <h1>telegram: @truongnani</h1>
    </div>
  );
};
export default Home;
