import React, { memo } from "react";
import PropTypes from "prop-types";

//<FormElementLabel
//   labelName="lbl"
//   requiredStatus={false}
//   className=""
// />;

const FormElementLabel = memo(({ labelName, requiredStatus, className }) => {
  return labelName ? (
    <span
      className={
        "formElementLabel " +
        (requiredStatus ? " required " : "") +
        (className ? className : "")
      }
    >
      {labelName}
    </span>
  ) : null;
});

FormElementLabel.propTypes = {
  labelName: PropTypes.string,
  className: PropTypes.string,
  requiredStatus: PropTypes.bool,
};

export default FormElementLabel;
