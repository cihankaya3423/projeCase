import React from "react";
import { Modal } from "antd";

//confirmModal("type" , "lblTitle", "mesaj", confirmFunction , confirmReturnData , "btnCancelText" , "btnOkText");
//msg getword ile yolla
//title da getword bağlı
//type  = "confirm" / "error" / "info" / "warning" / "success"

export default function confirmModal(
  type,
  title,
  msg,
  confirmFunction,
  confirmReturnData,
  btnCancelText,
  btnOkText
) {
  const classNameControl = () => {
    switch (type) {
      case "confirm":
        return "confirmModal--confirm";
      case "error":
        return "confirmModal--error";
      case "success":
        return "confirmModal--success";
      case "info":
        return "confirmModal--info";
      case "warning":
        return "confirmModal--warning";

      default:
        break;
    }
  };

  Modal[type || "confirm"]({
    title: title || "",
    className: "confirmModal " + classNameControl(),
    cancelText: btnCancelText || "Cancel",
    okText: btnOkText || "Ok",
    content: msg ? <div className="confirmModal-container">{msg}</div> : "",
    onOk() {
      if (confirmFunction) {
        confirmFunction(confirmReturnData);
      }
    },
    onCancel() {},
  });
}
