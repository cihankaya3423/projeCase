import React, { useCallback } from "react";
import "./css/linkCreate.scss";
import FormCustom from "../../Shared/partnerComponents/formElement/formCustom";
import { Form } from "antd";
import FormTextInput from "../../Shared/partnerComponents/formElement/formTextInput";
import FormSubmitButton from "../../Shared/partnerComponents/formElement/formSubmitButton";
import { Link, useHistory } from "react-router-dom";
import {
  getLocalstorage,
  setLocalstorage,
} from "../../Shared/utils/localStore/localStorage";
import { message } from "antd";
import { randomId } from "../../Shared/utils/mixedControl";
const LinkCreate = () => {
  const { push } = useHistory();
  const [form] = Form.useForm();

  const onFinish = useCallback(
    (validData) => {
      const { url, name } = validData;

      const newItem = {
        id: randomId(),
        pointCount: 0,
        name,
        url,
        updateDate: new Date(),
        createDate: new Date(),
      };

      const oldData = getLocalstorage("data") || [];

      setLocalstorage("data", [newItem, ...oldData]);

      message.success(`${name} added `);
      push("/");
    },
    [push]
  );

  // // yeni link ekleme
  // const addLink = useCallback((item) => {
  //   setLinkList(item);
  // }, []);

  return (
    <div className="linkCreate">
      <Link to="/" className="linkCreate-back">
        <span className="material-icons">arrow_back</span>
        <span className="linkCreate-back__text">Return to List</span>
      </Link>

      <FormCustom
        onFinish={onFinish}
        initialValues={{}}
        formSettings={form}
        Form={Form}
      >
        <FormTextInput
          label="Link Name:"
          propName="name"
          requiredStatus={true}
        />
        <FormTextInput
          label="Link URL:"
          propName="url"
          requiredStatus={true}
          type="url"
          placeholder="https://www.google.com.tr"
        />

        <div className="linkCreate-btn">
          <FormSubmitButton label="ADD" btnColor="angularBlue" />
        </div>
      </FormCustom>
    </div>
  );
};

export default LinkCreate;
