import React, { useState } from "react";
import "./FormPaciente.css";
import "./Form.css";
import FormSignup from "./FormSignupPacy";
import FormSuccess from "./FormSuccess";
import Imagen from "./img/img-3.svg";

const FormPac = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <>
      <div className="form-container">
        <div className="form-content-left">
          <img className="form-img" src={Imagen} alt="imagen doctora" />
        </div>
        {!isSubmitted ? (
          <FormSignup submitForm={submitForm} />
        ) : (
          <FormSuccess />
        )}
      </div>
    </>
  );
};

export default FormPac;
