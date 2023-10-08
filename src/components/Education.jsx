import React from "react";

function Education() {
  return (
    <div>
      <li>
        <div id="education-id" className="company">
          Chiang Mai University
        </div>
        <div className="position">
          Bachelor of Science – Animation, College of Arts, Media and Technology
        </div>
        <div className="years">
          <div className="icon-year">
            <FontAwesomeIcon icon={faCalendarDays} />
          </div>
          2013 - 2017
        </div>
      </li>
    </div>
  );
}

export default Education;
