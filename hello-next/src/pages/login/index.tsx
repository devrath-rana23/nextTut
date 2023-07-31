import React, { useState } from "react";
import jwt from "jsonwebtoken";

interface FormFields {
  username: string;
  password: string;
}

const index = () => {
  const [formFields, setFormFields] = useState<FormFields>({
    username: "",
    password: "",
  });
  const [message, setMessage] = useState<string>("You are not logged in");
  const [secret, setSecret] = useState<string>("");

  const handleChange = (ev: any, fieldName: string) => {
    setFormFields({ ...formFields, [fieldName]: ev.target.value });
  };

  const handleSubmit = async (ev: any) => {
    ev.preventDefault();
    const postBody = {
      username: formFields.username,
      password: formFields.password,
    };
    const res: any = await fetch("/api/login", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(postBody),
    }).then((r) => r.json());
    const token = res.token;
    if (token) {
      const json = jwt.decode(token) as { [key: string]: string };
      json.admin
        ? setMessage("you are logged in and you are admin!")
        : setMessage("you are logged in and you are not admin!");
      const res: any = await fetch("/api/secret", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ token }),
      }).then((r) => r.json());
      if (res.secretAdminCode) {
        setSecret(res.secretAdminCode);
      } else {
        setSecret("nothing available");
      }
      return;
    }
    return setMessage("Something went wrong");
  };

  return (
    <>
      <h1>{message}</h1>
      <h1>Secret: {secret}</h1>
      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", flexDirection: "column", gap: "5px" }}
      >
        <input
          type="text"
          name="username"
          value={formFields.username}
          style={{ border: "2px solid black" }}
          onChange={(ev: any) => handleChange(ev, "username")}
        />
        <input
          type="password"
          name="password"
          id=""
          value={formFields.password}
          style={{ border: "2px solid black" }}
          onChange={(ev: any) => handleChange(ev, "password")}
        />
        <input
          type="submit"
          value="Submit"
          style={{ background: "red", cursor: "pointer" }}
        />
      </form>
    </>
  );
};

export default index;
