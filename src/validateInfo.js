export default function validateInfo(values) {
  let errors = {};

  if (!values.username.trim()) {
    errors.username = "Nombres y apellidos es requerido";
  }

  if (!values.email) {
    errors.email = "Email es requerido";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "correo electrónico es inválida";
  }
  if (!values.password) {
    errors.password = "Contraseña es requerida";
  } else if (values.password.length < 6) {
    errors.password = "La contraseña debe tener 6 caracteres o más";
  }

  if (!values.password2) {
    errors.password2 = "Contraseña es requerida";
  } else if (values.password2 !== values.password) {
    errors.password2 = "Las contraseñas no coinciden";
  }
  return errors;
}
