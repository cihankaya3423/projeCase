import React, { memo, useCallback, useMemo } from "react";
import { Form, Select } from "antd";
import FormTextInput from "./formTextInput";
import { findData, yearSelectBox } from "../../utils/mixedControl";
import FormElementLabel from "./formElementLabel";
import PropTypes from "prop-types";

// data Tipi
// const selectboxData = [{id:1 , name:"E2132" },{id:2 , name:"E2509" },]

//const selectBoxOnChange = (value, propName, fullData) => {}

//<FormSelectBox
//label="Selectbox (Test)"
//selectData={selectData}
//propName="selectBox1"
//requiredStatus={true}
//errorMessage=""
//otherStatus={true}
//otherPropName=""
//form={form} // form other için lazım
//disabled={true}
//mountDataActive ={true} // true yollanırsa otamik olarak ayları doldurur
//yearActice={2017} // belirli bir yıl yolladıktan sonra bugün ki yıla kadar doldurur selectbox
//mode="multiple" // multi seçimi aktif ediyor.
//showSearch={true} // search yapmayaı açıyor
//className=""
//selectBoxOnChange={func}
// placeholder="lbl"
//fullDataReturn={true} //onChange olduğunda tüm verileri geri döndermesini istiyorsak
//allowClear={false}
///>

const FormSelectBox = memo((props) => {
  const {
    propName,
    selectData,
    label,
    requiredStatus,
    className,
    otherStatus,
    form,
    disabled,
    mountDataActive,
    yearActice,
    mode,
    showSearch,
    selectBoxOnChange,
    placeholder,
    fullDataReturn,
    allowClear,
    otherPropName,
  } = props;

  // ay , yıl veya başka bir veri gönderilirse ona göre ayrım yapıyor ve selectbox veriyor
  const selectboxDataControl = useCallback(() => {
    if (mountDataActive) {
      return [];
    } else if (yearActice) {
      return yearSelectBox(yearActice);
    } else {
      if (otherStatus) {
        const otherItem = [];
        return selectData ? [...selectData, ...otherItem] : otherItem;
      } else if (selectData) {
        return selectData;
      } else {
        return [];
      }
    }
  }, [mountDataActive, yearActice, selectData, otherStatus]);

  // other aktif ise onu setliyor
  const handleChange = useCallback(
    (value) => {
      if (otherStatus) {
        form.setFieldsValue();
      }
      if (selectBoxOnChange) {
        const selectFullData = fullDataReturn
          ? findData(selectboxDataControl(), "id", value)
          : null;
        selectBoxOnChange(value, propName, selectFullData);
      }
    },
    [
      propName,
      selectBoxOnChange,
      otherStatus,
      form,
      fullDataReturn,
      selectboxDataControl,
    ]
  );

  const selectDataControl = useMemo(() => {
    const newSelectData = selectboxDataControl();
    if (newSelectData) {
      return newSelectData.map((element, index) => {
        return (
          <Select.Option key={index} value={element.id}>
            {element.name}
          </Select.Option>
        );
      });
    } else {
      return null;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectData]);

  return (
    <div
      className={
        "formSelectBox " +
        (mode === "multiple" ? " formSelectBox-multiple " : "") +
        (className ? className : "")
      }
    >
      <FormElementLabel labelName={label} requiredStatus={requiredStatus} />
      <Form.Item
        name={propName}
        rules={
          requiredStatus
            ? [
                {
                  validator: (_, value) => {
                    return value
                      ? Promise.resolve()
                      : Promise.reject(" Lütfen Boş Alanları Doldurun.");
                  },
                },
              ]
            : null
        }
      >
        <Select
          className={propName + " formSelectBox__select "}
          onChange={handleChange}
          disabled={disabled}
          mode={mode || ""}
          showSearch={showSearch}
          showArrow
          allowClear={allowClear}
          placeholder={placeholder}
          filterOption={
            showSearch
              ? (input, option) =>
                  option?.value
                    ?.toString()
                    .toLowerCase()
                    .indexOf(input?.toString().toLowerCase()) >= 0
              : null
          }
        >
          {selectDataControl}
        </Select>
      </Form.Item>

      {/* alt kısım other seçildiğinda aktif olacak kısım */}
      {otherStatus && (
        <Form.Item
          shouldUpdate={(prevValues, currentValues) =>
            prevValues[propName] !== currentValues[propName]
          }
        >
          {({ getFieldValue }) => {
            return getFieldValue(propName) === "other" ? (
              <FormTextInput
                label={label + "Other"}
                propName={otherPropName}
                requiredStatus={requiredStatus}
              />
            ) : null;
          }}
        </Form.Item>
      )}
    </div>
  );
});

FormSelectBox.propTypes = {
  propName: PropTypes.string.isRequired,
  className: PropTypes.string,
  label: PropTypes.string,
  requiredStatus: PropTypes.bool,
  placeholder: PropTypes.string,
  errorMessage: PropTypes.string,
  disabled: PropTypes.bool,
  selectData: PropTypes.array,
  otherStatus: PropTypes.bool,
  mountDataActive: PropTypes.bool,
  yearActice: PropTypes.number,
  mode: PropTypes.string,
  showSearch: PropTypes.bool,
  selectBoxOnChange: PropTypes.func,
  fullDataReturn: PropTypes.bool,
  allowClear: PropTypes.bool,
  otherPropName: PropTypes.string,
};

export default FormSelectBox;
