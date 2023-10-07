import React from "react";
import "./stylePage/style-jobPreview.css";
function JobPreviews() {
  return (
    <div className="card-container">
      <div className="top-row">
        <div className="card-item">
          <div className="title">Dash Dash VR World</div>
          <div className="poster-1"></div>
        </div>
        <div className="card-item">
          <div className="title">Nazhe 2019</div>
          <div className="poster-2"></div>
        </div>
      </div>
      <div className="bottom-row">
        <div className="card-item">
          <div className="title">Lego Friends 2018</div>
          <div className="poster-3"></div>
        </div>
        <div className="card-item">
          <div className="title">Evermoon</div>
          <div className="poster-4"></div>
        </div>
      </div>
    </div>
  );
}

export default JobPreviews;
