import React, { useState } from "react";
import "./ImageGrid.css";
import { Image, Image2, Image3, Image4, Image5, Image6 } from "../../assests";
import ImagePreviewModal from "../Modal";

const ImageGrid = () => {
  const imgs = [
    { id: 1, src: Image },
    { id: 2, src: Image2 },
    { id: 3, src: Image3 },
    { id: 4, src: Image4 },
    { id: 5, src: Image5 },
    { id: 6, src: Image6 },
  ];
  const [previewImgSrc, setPreviewImgSrc] = useState("");

  const [showPreviewModal, setShowPreviewModal] = useState(false);
  const handleCloseModal = () => setShowPreviewModal(false);

  const handleTileClick = (tile) => {
    setPreviewImgSrc(tile?.src);
    setShowPreviewModal(true);
  };
  return (
    <>
      <div className="image-grid">
        {imgs.map((galleryTile) => (
          <div
            className="image-item"
            key={galleryTile.id}
            onClick={() => handleTileClick(galleryTile)}
          >
            <img src={galleryTile?.src} alt="" />
          </div>
        ))}
      </div>

      <ImagePreviewModal
        open={showPreviewModal}
        handleClose={handleCloseModal}
        imgSrc={previewImgSrc}
        className={"image-preview"}
      />
    </>
  );
};

export default ImageGrid;
