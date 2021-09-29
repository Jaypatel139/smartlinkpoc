import React from "react";

const PreviewSM = ({ styles,documentsData, url }) => {
  if (!documentsData) {
    return "";
  }
  return (
    <div
      className={styles.previewSM}
      onClick={() => {
        window.open(documentsData.previewUrl, "_blank");
      }}
    >
      <div className={styles.card}>
        <img src={documentsData.previewImgUrl} alt="document" />
        <div className={styles.container}>
          <h4>
            <b>{documentsData.projectName}</b>
          </h4>
          <p>InVision {documentsData.shareType.split(".")[1]}</p>
        </div>
      </div>
    </div>
  );
};

export default PreviewSM;
