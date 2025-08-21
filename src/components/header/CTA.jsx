import React from "react";
import CV from "../../assets/cv.pdf";
import { FiDownload } from "react-icons/fi";

const CTA = () => {
  return (
    <div className="cta">
      <a href={CV} download className="btn">
        Tải CV <FiDownload />
      </a>
      <a href="#contact" className="btn btn-primary">
        Liên hệ
      </a>
    </div>
  );
};

export default CTA;
