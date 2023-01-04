import {
  FormControl,
  InputLabel,
  TextField,
  FormHelperText,
  TextareaAutosize,
} from "@mui/material";
import React, { Fragment, useState } from "react";

export default function Contact() {
  const [activeType, setActiveType] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    subject: "",
    email: "",
    message: "",
  });

  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const enviarDatos = () => {
    console.log(formData);
  };

  return (
    <div>
      <h1>Formulario</h1>
      <FormControl>
        <TextField id="outlined-basic" label="Nombre" variant="outlined" />
        <TextField
          id="outlined-basic"
          label="Empresa/Entidad"
          variant="outlined"
        />
        <TextField id="outlined-basic" label="Email" variant="outlined" />
        <TextField multiline rows={3} maxRows={4} placeholder="Mensaje" />
      </FormControl>
    </div>
  );
}
