import React, { memo, useMemo } from "react";
import { Form, Button } from "antd";
import Loading from "../loading/loading";
import PropTypes from "prop-types";

//<FormSubmitButton
//  label="SUBMIT"
//  className=""
//  textColor=""
//  backgroundColor =""
//  loadingActive={true}
//  disabled={true}
//  btnColor="ant-redBtn" / "ant-angularBlue"
//  width={"100%"}
//  style={{}}
// />

const FormSubmitButton = memo(
  ({
    label,
    backgroundColor,
    className,
    loadingActive,
    textColor,
    disabled,
    btnColor,
    width,
    style,
  }) => {
    const btnClassControl = useMemo(() => {
      switch (btnColor) {
        case "red":
          return "ant-redBtn";

        case "angularBlue":
          return "ant-angularBlue";

        default:
          return "ant-redBtn";
      }
    }, [btnColor]);

    return (
      <div
        className={"formSubmitButton " + (className ? className : "")}
        style={{ width }}
      >
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            style={{ backgroundColor, ...style }}
            disabled={loadingActive || disabled}
            className={btnClassControl}
          >
            <span style={{ color: textColor }}>{label}</span>
            {loadingActive && <Loading size="small" innerPageActive={true} />}
          </Button>
        </Form.Item>
      </div>
    );
  }
);

FormSubmitButton.propTypes = {
  label: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string,
  className: PropTypes.string,
  loadingActive: PropTypes.bool,
  textColor: PropTypes.string,
  disabled: PropTypes.bool,
  btnColor: PropTypes.string,
  style: PropTypes.object,
  width: PropTypes.node,
};

export default FormSubmitButton;
