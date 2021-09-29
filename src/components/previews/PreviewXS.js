import React from "react";
import logo from "../../freehand-by-invision.png";
import styles from "./smartpreview.module.css";

const PreviewXS = ({ documentsData, url }) => {
  if (!documentsData) {
    return "";
  }
  return (
    <div className={styles.previewXS}>
      <img src={logo} alt="invision" />
      <a href={url} target="_blank" rel="noreferrer">
        {documentsData.projectName}
      </a>
    </div>
  );
};

export default PreviewXS;
