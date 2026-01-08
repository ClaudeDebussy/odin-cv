import { useState } from "react";
import IdentityForm from "./IdentityForm";
import EducationForm from "./EducationForm";
import WorkForm from "./WorkForm";
import CV from "./CV";

function App() {
  //IDENTITY
  const [identity, setIdentity] = useState({ name: "", email: "", phone: "" });
  const [hasName, setHasName] = useState(false);
  const [hasPhone, setHasPhone] = useState(false);
  const [hasEmail, setHasEmail] = useState(false);

  const handleIdentityChange = (event) => {
    const { name, value } = event.target;
    setIdentity((i) => ({ ...i, [name]: value }));
    if (identity.name) {
      setHasName(true);
    } else {
      setHasName(false);
    }
    if (identity.phone) {
      setHasPhone(true);
    } else {
      setHasPhone(false);
    }
    if (identity.email) {
      setHasEmail(true);
    } else {
      setHasEmail(false);
    }
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
    setEducationFormData((e) => ({ ...e, [name]: value }));
  };

  const handleEducationSubmit = (event) => {
    event.preventDefault();
    const newEducation = { ...educationFormData, id: crypto.randomUUID() };
    setEducationList((e) => [...e, newEducation]);
    setEducationFormData({ place: "", study: "", year: "" });
  };

  //WORK
  const [workFormData, setWorkFormData] = useState({
    company: "",
    position: "",
    description: "",
    startYear: "",
    endYear: "",
  });
  const [workList, setWorkList] = useState([]);

  const handleWorkChange = (event) => {
    const { name, value } = event.target;
    setWorkFormData((w) => ({ ...w, [name]: value }));
  };

  const handleWorkSubmit = (event) => {
    event.preventDefault();
    const newWork = { ...workFormData, id: crypto.randomUUID() };
    setWorkList((w) => [...w, newWork]);
    setWorkFormData({
      company: "",
      position: "",
      description: "",
      startYear: "",
      endYear: "",
    });
  };

  return (
    <>
      <div className="forms-container">
        <IdentityForm identity={identity} onChange={handleIdentityChange} />
        <EducationForm
          education={educationFormData}
          onChange={handleEducationChange}
          onSubmit={handleEducationSubmit}
        />
        <WorkForm
          work={workFormData}
          onChange={handleWorkChange}
          onSubmit={handleWorkSubmit}
        />
      </div>
      <CV
        identity={identity}
        hasName={hasName}
        hasPhone={hasPhone}
        hasEmail={hasEmail}
        education={educationList}
        work={workList}
      />
    </>
  );
}

export default App;
