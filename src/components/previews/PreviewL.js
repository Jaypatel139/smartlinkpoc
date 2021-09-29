import React from "react";

const PreviewL = (props) => {
  const { documentsData } = props;
  if (!documentsData) {
    return "";
  }
  return (
    <div>
      <iframe
        title="invision-large-preview"
        src={documentsData.previewUrl}
        style={{ height: "500px", width: "500px" }}
      />
    </div>
  );
};

export default PreviewL;
