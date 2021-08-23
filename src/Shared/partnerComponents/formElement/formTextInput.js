import React, { memo, useCallback, useMemo, useState } from "react";
import { Form, Input } from "antd";
import FormElementLabel from "./formElementLabel";
import PropTypes from "prop-types";
import { validURL } from "../../utils/mixedControl";

//<FormTextInput
//  label="lbl"
//  propName="title6"
//  className="clas"
//  type=""
//  requiredStatus={false}
//  placeholder="lbl"
//  errorMessage=""
//  disabled={true}
//  textInputOnBlur={func}
//  textInputOnChange={func}
//  autoFocus={false}
//  maxLength={50}
///>

const FormTextInput = memo(
  ({
    propName,
    label,
    requiredStatus,
    type,
    placeholder,
    className,
    errorMessage,
    disabled,
    textInputOnBlur,
    textInputOnChange,
    autoFocus,
    maxLength,
  }) => {
    const [focusedOut, setFocusedOut] = useState(false);

    // email formatında olup olmadığını control ediyor
    const validateEmail = (email) => {
      const re =
        /^(([^<>()\\[\]\\.,;:\s@"]+(\.[^<>()\\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(email).toLowerCase());
    };

    const rulesControl = useMemo(() => {
      if (type === "email") {
        return requiredStatus
          ? [
              {
                type: type,
                validator: (_, value) =>
                  value && !focusedOut
                    ? Promise.resolve()
                    : value && focusedOut && validateEmail(value)
                    ? Promise.resolve()
                    : Promise.reject("Lütfen Boş Alanları Doldurun."),
              },
            ]
          : null;
      } else if (type === "url") {
        return requiredStatus
          ? [
              {
                type: "text",
                validator: (_, value) =>
                  value && !focusedOut
                    ? Promise.resolve()
                    : value && focusedOut && validURL(value)
                    ? Promise.resolve()
                    : Promise.reject("Lütfen Boş Alanları Doldurun."),
              },
            ]
          : null;
      } else {
        return [
          {
            // type: type ? type : "text", // burayı time dan dolayı kapattım
            required: requiredStatus,
            message: "Lütfen Boş Alanları Doldurun.",
          },
        ];
      }
    }, [requiredStatus, focusedOut, type]);

    const onBlur = useCallback(
      (e) => {
        if (type === "email" || type === "url") {
          setFocusedOut(true);
        }

        if (textInputOnBlur) {
          textInputOnBlur(e.target.value, propName);
        }
      },
      [propName, textInputOnBlur, type]
    );

    const onChange = useCallback(
      (e) => {
        if (textInputOnChange) {
          textInputOnChange(e.target.value, propName);
        }
      },
      [propName, textInputOnChange]
    );

    return (
      <div className={"formTextInput " + (className || "")}>
        <FormElementLabel labelName={label} requiredStatus={requiredStatus} />

        <div className="formTextInput-inner">
          <Form.Item name={propName} rules={rulesControl}>
            <Input
              className={propName + " formTextInput__input "}
              type={"text"} // burayı time dan dolayı type bağladım
              onBlur={onBlur}
              onFocus={() => {
                setFocusedOut(false);
              }}
              placeholder={placeholder}
              disabled={disabled}
              onChange={onChange}
              autoFocus={autoFocus}
              maxLength={maxLength}
            />
          </Form.Item>
        </div>
      </div>
    );
  }
);

FormTextInput.propTypes = {
  propName: PropTypes.string.isRequired,
  className: PropTypes.string,
  label: PropTypes.string,
  requiredStatus: PropTypes.bool,
  placeholder: PropTypes.string,
  errorMessage: PropTypes.string,
  disabled: PropTypes.bool,
  textInputOnBlur: PropTypes.func,
  textInputOnChange: PropTypes.func,
  type: PropTypes.string,
  autoFocus: PropTypes.bool,
  maxLength: PropTypes.number,
};

export default FormTextInput;
