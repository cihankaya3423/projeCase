import React, { memo, useCallback } from "react";
import PropTypes from "prop-types";

const FormCustom = memo(
  ({
    initialValues,
    onFinish,
    onValuesChange,
    className,
    children,
    Form,
    formSettings,
  }) => {
    const onFinishFailed = useCallback((errorInfo) => {
      const propName = errorInfo?.errorFields?.[0]?.name?.[0];
      if (propName) {
        document.getElementById(propName)?.focus();
      }
    }, []);

    return (
      <Form
        className={className}
        form={formSettings}
        autoCorrect="off"
        autoComplete="off"
        onValuesChange={onValuesChange}
        onFinish={onFinish}
        initialValues={initialValues}
        onFinishFailed={onFinishFailed}
      >
        {children}
      </Form>
    );
  }
);

FormCustom.propTypes = {
  initialValues: PropTypes.object,
  onFinish: PropTypes.func,
  onValuesChange: PropTypes.func,
  className: PropTypes.string,
  Form: PropTypes.elementType.isRequired,
  formSettings: PropTypes.object.isRequired,
};

export default FormCustom;
