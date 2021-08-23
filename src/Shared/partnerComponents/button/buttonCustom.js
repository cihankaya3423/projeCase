import React, { memo, useMemo } from "react";
import { Button } from "antd";
import GetWord from "../../utils/language/getWord";
import Loading from "../loading/loading";
import PropTypes from "prop-types";

//<ButtonCustom
// label="lblDatePicker"
// className=""
// disabled={false}
// loadingActive={true}
// textColor=""
// backgroundColor=""
// btnColor="angularBlue"
// onClick={() => console.log("1")}
// style={{ width: 200 }}
// width={500}
// />

const ButtonCustom = memo(
  ({
    label,
    backgroundColor,
    className,
    loadingActive,
    textColor,
    disabled,
    btnColor,
    onClick,
    style,
    width,
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
        <Button
          type="primary"
          htmlType="button"
          style={{ backgroundColor, ...style }}
          disabled={loadingActive || disabled}
          className={btnClassControl}
          onClick={onClick}
        >
          <span style={{ color: textColor }}>{GetWord(label)}</span>
        </Button>
        {loadingActive && <Loading innerPageActive={true} size="small" />}
      </div>
    );
  }
);

ButtonCustom.propTypes = {
  label: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string,
  className: PropTypes.string,
  loadingActive: PropTypes.bool,
  textColor: PropTypes.string,
  disabled: PropTypes.bool,
  btnColor: PropTypes.string,
  onClick: PropTypes.func,
  style: PropTypes.object,
  width: PropTypes.node,
};

export default ButtonCustom;
