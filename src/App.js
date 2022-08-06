import React from "react";
import FormBuilder from "./FormBuilder";

/**
 * formFields is the array of props passed to the form Builder.
 * @prop {String} fileldType - type of widget to be used. Can be used for adding custom widget types
 * @prop {String} labelPos - Should the label be displayed on the right or left
 * @prop {Object} fieldAttributes - props to be passed to <input> html element
 * @prop {Function} onChange - Callback function to be executed on value change of the field - optional
 */
const formFields = [
  {
    fileldType: "input",
    labelPos: "left",
    fieldAttributes: {
      type: "text",
      style: {
        color: "blue",
      },
      label: "Username",
    },
    onChange: function (value) {
      console.log("valueChanged", value);
    },
  },
  {
    fileldType: "input",
    labelPos: "left",
    fieldAttributes: {
      type: "text",
      label: "Password",
    },
    onChange: function (value) {
      console.log("valueChanged", value);
    },
  },
  {
    fileldType: "input",
    labelPos: "right",
    fieldAttributes: {
      type: "checkbox",
      style: {
        color: "green",
      },
      label: "I am not a robot",
    },
  },
  {
    fileldType: "input",
    labelPos: "right",
    fieldAttributes: {
      type: "submit",
      style: {
        alignText: "center",
      },
      value: "Sign In",
    },
  }
];

/**
 * Callback function that is used to capture the submit event.
 */
const handleSubmit = (e) => {
  e.preventDefault();
  console.log("FormSubmitted", e);
};

const App = () => {
  return (
    <div>
      <FormBuilder formFields={formFields} handleSubmit={handleSubmit} />
    </div>
  );
};

export default App;
