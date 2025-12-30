import { useState } from "react";
import IdentityForm from "./IdentityForm";
import EducationForm from "./EducationForm";

function App() {
  //IDENTITY
  const [identity, setIdentity] = useState({ name: "", email: "", phone: "" });

  const handleIdentityChange = (event) => {
    const { name, value } = event.target;
    setIdentity((i) => ({ ...i, [name]: value }));
  };

  const handleIdentitySubmit = (event) => {
    event.preventDefault();
    console.log("Form submitted with data:", identity);
  };

  //EDUCATION
  const [educationFormData, setEducationFormData] = useState({
    place: "",
    study: "",
    year: "",
  });
  const [educationList, setEducationList] = useState([]);

  const handleEducationChange = (event) => {
    const { name, value } = event.target;
    setEducationFormData((f) => ({ ...f, [name]: value }));
  };

  const handleEducationSubmit = (event) => {
    event.preventDefault();
    const newEducation = { ...educationFormData, id: crypto.randomUUID() };
    setEducationList((e) => [...e, newEducation]);
    setEducationFormData({ place: "", study: "", year: "" });
    console.log("Form submitted with data:", educationFormData);
  };

  //WORK
  const [workFormData, setWorkFormData] = useState([
    { company: "", position: "", description: "", startYear: "", endYear: "" },
  ]);
  const [workList, setWorkList] = useState([]);

  return (
    <>
      <IdentityForm
        identity={identity}
        onChange={handleIdentityChange}
        onSubmit={handleIdentitySubmit}
      />
      <EducationForm
        education={educationFormData}
        onChange={handleEducationChange}
        onSubmit={handleEducationSubmit}
      />
    </>
  );
}

export default App;
