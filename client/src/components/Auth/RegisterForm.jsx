import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import DialogContent from "@mui/material/DialogContent";
import { registerApi } from "../../api/user";
import { toast } from "react-toastify";

export default function RegisterForm({ setFormType }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const register = () => {
    registerApi(name, email, password)
      .then((response) => {
        setFormType("login");
      })
      .catch((err) =>
        toast("Something went wrong", {
          type: "error",
        })
      );
  };

  return (
    <div>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          id="name"
          label="Name"
          type="name"
          fullWidth
          variant="outlined"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          autoFocus
          margin="dense"
          id="email"
          label="Email Address"
          type="email"
          fullWidth
          variant="outlined"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          autoFocus
          margin="dense"
          id="password"
          label="Password"
          type="password"
          fullWidth
          variant="outlined"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button
          variant="contained"
          style={{ marginTop: 20 }}
          fullWidth
          onClick={() => register()}
        >
          Sign Up
        </Button>
      </DialogContent>
    </div>
  );
}
