import React from "react";
import "./FormBuilder.css";

const renderLabel = (fieldAttributes, pos) => {
  return (
    <React.Fragment>
      {fieldAttributes.label ? (
        <label className={pos} htmlFor={fieldAttributes.label}>
          {fieldAttributes.label}
        </label>
      ) : null}
    </React.Fragment>
  );
};

// Function to render field
const renderField = ({ fileldType, fieldAttributes, onChange, labelPos }) => {
  switch (fileldType) {
    case "input":
      return (
        <React.Fragment>
          {labelPos === "left" ? renderLabel(fieldAttributes, "left") : null}
          <input
            {...fieldAttributes}
            onChange={(e) => onChange ? onChange(e.target.value) : null}
          ></input>
          {labelPos === "right" ? renderLabel(fieldAttributes, "right") : null}
        </React.Fragment>
      );
    //Add cases for custom components here
    default:
      return null;
  }
};

// Function to iterate over the form fields
const renderFormFields = (formFields) => {
  return formFields.map((formField, index) => {
    return (
      <div key={index} className="field-container">
        {renderField(formField)}
      </div>
    );
  });
};

// Form Builder Component
const FormBuilder = ({ formFields, handleSubmit }) => {
  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        {renderFormFields(formFields)}
      </form>
    </div>
  );
};

export default FormBuilder;
