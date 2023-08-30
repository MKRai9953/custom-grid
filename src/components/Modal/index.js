import React from "react";
import "../grid/ImageGrid.css";

const ImagePreviewModal = ({ open, className, imgSrc, handleClose }) => {
  return (
    <div className={`modal  ${open ? "" : "hidden"}`}>
      <div className={`modal-content ${className}`}>
        <div className="close_modal" onClick={handleClose}></div>
        <img src={imgSrc} alt="previewImgSrc" />
      </div>
    </div>
  );
};

export default ImagePreviewModal;
