// import React, { useCallback, useMemo, useState } from "react";
// import FormElement from "../../Shared/partnerComponents/formElement";
// import FormCustom from "../../Shared/partnerComponents/formElement/formCustom";
// import { Form } from "antd";
// import FormMultiUploadFile from "../../Shared/partnerComponents/formElement/formMultiUploadFile";

// const FormList = (props) => {
//   const [form] = Form.useForm();

//   const [uploadFile, setUploadFile] = useState({
//     list: [],
//     deleteList: [],
//   });

//   const onFinish = useCallback((validData) => {
//     console.log(validData);
//   }, []);

//   const onValuesChange = useCallback((value, fullValue) => {
//     console.log(value, fullValue);
//   }, []);

//   const formOnChange = useCallback((value, propName, fullData) => {
//     console.log(value, propName, fullData);
//   }, []);

//   const formOnBlur = useCallback((value, propName) => {
//     console.log(value, propName);
//   }, []);

//   const deleteItemChange = useCallback((id) => {
//     // console.log(id);
//   }, []);

//   //Dosyaları statede günceller ve silinecekleri ekler
//   const uploadFileControl = useCallback((newList, deleteList) => {
//     setUploadFile((prev) => {
//       return {
//         list: newList,
//         deleteList: deleteList
//           ? [...prev.deleteList, deleteList]
//           : prev.deleteList,
//       };
//     });
//   }, []);

//   const formListData = useMemo(() => {
//     return [
//       {
//         formElementName: "textInput",
//         label: "lblName",
//         propName: "name",
//         className: "",
//         requiredStatus: true,
//         placeholder: "",
//         errorMessage: "",
//         disabled: false,
//         type: "",
//         formOnBlur,
//         formOnChange,
//       },
//       {
//         formElementName: "inputNumber",
//         label: "lblNumber",
//         propName: "number1",
//         className: "",
//         requiredStatus: true,
//         placeholder: "",
//         errorMessage: "",
//         disabled: false,
//         formOnBlur,
//         formOnChange,
//         // max: 99999999999,
//         // min: 0,
//       },
//       {
//         formElementName: "datePicker",
//         label: "lblDatePicker",
//         propName: "datePicker2",
//         className: "",
//         requiredStatus: false,
//         placeholder: "",
//         errorMessage: "",
//         disabled: false,
//         formOnChange,
//         disablePastTime: false,
//       },
//     ];
//   }, [formOnChange, formOnBlur]);

//   const selectData = useMemo(() => {
//     return [
//       { id: 1, name: "cihan" },
//       { id: 2, name: "kaya" },
//     ];
//   }, []);

//   return (
//     <div className="formList" style={{ width: "100%" }}>
//       <FormCustom
//         onFinish={onFinish}
//         onValuesChange={onValuesChange}
//         initialValues={{}}
//         formSettings={form}
//         Form={Form}
//       >
//         <FormElement
//           formElementName="textInput"
//           label="lblTextInput"
//           propName="name1"
//           className=""
//           requiredStatus={true}
//           placeholder="lblTextInput"
//           errorMessage=""
//           disabled={false}
//           type=""
//           formOnBlur={formOnBlur}
//           formOnChange={formOnChange}
//           autoFocus={false}
//           maxLength={50}
//         />
//         <FormElement
//           formElementName="selectBox"
//           label="lblSelectBox"
//           propName="name2"
//           className=""
//           requiredStatus={true}
//           placeholder="lblSelectBox"
//           errorMessage=""
//           disabled={false}
//           formOnChange={formOnChange}
//           selectData={selectData}
//           otherStatus={true}
//           form={form}
//           otherPropName="other"
//           mountDataActive={false}
//           // yearActice={2017}
//           // mode="multiple"
//           showSearch={true}
//           fullDataReturn={false}
//           allowClear={false}
//         />
//         <FormElement
//           formElementName="selectBox"
//           label="lblMultiSelect"
//           propName="name3"
//           className=""
//           requiredStatus={true}
//           placeholder="lblMultiSelect"
//           errorMessage=""
//           disabled={false}
//           formOnChange={formOnChange}
//           // selectData={selectData}
//           otherStatus={true}
//           form={form}
//           otherPropName="other"
//           mountDataActive={false}
//           yearActice={2000}
//           mode="multiple"
//           showSearch={true}
//           fullDataReturn={false}
//           allowClear={true}
//         />
//         <FormElement
//           formElementName="inputNumber"
//           label="lblInputNumber"
//           propName="name4"
//           className=""
//           requiredStatus={true}
//           placeholder="lblInputNumber"
//           errorMessage=""
//           disabled={false}
//           formOnBlur={formOnBlur}
//           formOnChange={formOnChange}
//           max={99999}
//           min={0}
//           // type="password"
//           maxLength={6} // harf sayısı
//         />
//         <FormElement
//           formElementName="textArea"
//           label="lblTextArea"
//           propName="textArea"
//           className=""
//           requiredStatus={true}
//           placeholder="lblTextArea"
//           errorMessage=""
//           disabled={false}
//           formOnBlur={formOnBlur}
//           formOnChange={formOnChange}
//         />
//         <FormElement
//           formElementName="passwordInput"
//           label="lblPasswordInput"
//           propName="name999"
//           className=""
//           requiredStatus={true}
//           placeholder="lblPasswordInput"
//           errorMessage=""
//           formOnBlur={formOnBlur}
//           formOnChange={formOnChange}
//         />
//         <FormElement
//           formElementName="formMask"
//           label="lblFormMask"
//           formOnChange={formOnChange}
//           propName="formMask"
//           className=""
//           requiredStatus={true}
//           errorMessage=""
//           format="phoneNumber"
//           placeholder="0(5__)___-____"
//         />
//         <FormElement
//           formElementName="checkboxSingle"
//           label="lblCheckboxSingle"
//           propName="name8235"
//           className=""
//           requiredStatus={true}
//           errorMessage=""
//           disabled={false}
//           formOnChange={formOnChange}
//           labelGetwordClose={false}
//         />
//         <FormElement
//           formElementName="checkboxSingle"
//           label="lblCheckboxContract"
//           propName="contract"
//           className=""
//           requiredStatus={true}
//           errorMessage=""
//           disabled={false}
//           formOnChange={formOnChange}
//           labelGetwordClose={false}
//           contractText={"text"}
//           contractActive={true}
//         />
//         <FormElement
//           formElementName="timePicker"
//           label="lblTimePicker"
//           propName="TimePicker"
//           className=""
//           requiredStatus={true}
//           placeholder="lblTimePicker"
//           errorMessage=""
//           disabled={false}
//           formOnChange={formOnChange}
//           format={"HH:mm"}
//         />
//         <FormElement
//           formElementName="datePicker"
//           label="lblDatePicker"
//           propName="name1253334"
//           className=""
//           requiredStatus={true}
//           placeholder="lblDatePicker"
//           errorMessage=""
//           disabled={false}
//           formOnChange={formOnChange}
//           disablePastTime={false}
//           // picker="month"
//           allowClear={true}
//         />
//         <FormElement
//           formElementName="dateAndTimePicker"
//           label="lblDatePicker"
//           formOnChange={formOnChange}
//           dateData={{
//             propName: "date",
//             className: "",
//             requiredStatus: true,
//             placeholder: "lblDatePicker",
//             errorMessage: "",
//             disabled: false,
//             disablePastTime: false,
//           }}
//           timeData={{
//             propName: "time",
//             className: "",
//             requiredStatus: true,
//             placeholder: "lblDateTime",
//             errorMessage: "",
//             disabled: false,
//             format: "HH:mm",
//           }}
//         />

//         <FormElement
//           formElementName="radioGroup"
//           label="lblRadioGroup"
//           formOnChange={formOnChange}
//           propName="radiogroup"
//           className=""
//           requiredStatus={true}
//           errorMessage=""
//           radioData={[
//             { id: 1, name: "cihan" },
//             { id: 2, name: "kaya" },
//             { id: "other", name: "other" },
//           ]}
//           form={form}
//           otherStatus={true}
//         />

//         <FormElement
//           formElementName="switch"
//           className=""
//           label="lblSwitch"
//           requiredStatus={true}
//           propName="swxitch"
//           errorMessage=""
//           disabled={false}
//           formOnChange={formOnChange}
//         />

//         <FormElement
//           formElementName="listInputs"
//           label="lblFormListInputs"
//           propName="formListGroup"
//           formList={formListData}
//           buttonName="lblAdd"
//           className=""
//           deleteItemChange={deleteItemChange}
//         />

//         <FormMultiUploadFile
//           uploadFile={uploadFile.list}
//           uploadFileControl={uploadFileControl}
//           label="lblUpload"
//           // activeFileNameList={["png", "jpeg"]}
//           maxUploadFile={1}
//           requiredStatus={true}
//           multiple={false}
//           disabled={false}
//         />

//         <FormElement
//           formElementName="button"
//           label="lblFormBtn"
//           className=""
//           disabled={false}
//           loadingActive={false}
//           textColor=""
//           backgroundColor=""
//           btnColor="green"
//           width="100%"
//           labelGetwordClose={true}
//           style={{ width: 200 }}
//         />
//       </FormCustom>
//     </div>
//   );
// };

// export default FormList;
