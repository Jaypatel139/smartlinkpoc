import React from "react";
import logo from "../../freehand-by-invision.png";

const PreviewXS = ({ styles,documentsData, url }) => {
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
