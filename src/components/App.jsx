import { useState } from "react";
import Form from "./Form";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [school, setSchool] = useState("");
  const [study, setStudy] = useState("");
  const [dateOfStudy, setDateOfStudy] = useState("");

  const handleName = (e) => setName(e.target.value);
  const handleEmail = (e) => setEmail(e.target.value);
  const handlePhone = (e) => setPhone(e.target.value);
  const handleSchool = (e) => setSchool(e.target.value);
  const handleStudy = (e) => setStudy(e.target.value);
  const handleDateOfStudy = (e) => setDateOfStudy(e.target.value);

  return (
    <>
      <Form
        person={{
          name,
          email,
          phone,
          school,
          study,
          dateOfStudy,
          handleName,
          handleEmail,
          handlePhone,
          handleSchool,
          handleStudy,
          handleDateOfStudy,
        }}
      />
      <div>
        <h2>{name}</h2>
        <h2>{email}</h2>
        <h2>{phone}</h2>
      </div>
      <div>
        <h2>{school}</h2>
        <h2>{study}</h2>
        <h2>{dateOfStudy}</h2>
      </div>
    </>
  );
}

export default App;
