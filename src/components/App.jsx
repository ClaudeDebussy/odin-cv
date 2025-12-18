import { useState } from "react";
import Form from "./Form";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleName = (e) => setName(e.target.value);
  const handleEmail = (e) => setEmail(e.target.value);
  const handlePhone = (e) => setPhone(e.target.value);

  return (
    <>
      <Form
        person={{
          name,
          email,
          phone,
          handleName,
          handleEmail,
          handlePhone,
        }}
      />
      <div>
        <h2>{name}</h2>
        <h2>{email}</h2>
        <h2>{phone}</h2>
      </div>
    </>
  );
}

export default App;
