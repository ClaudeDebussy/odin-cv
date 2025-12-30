import { useState } from "react";
import IdentityForm from "./IdentityForm";

function App() {
  const [identity, setIdentity] = useState({ name: "", email: "", phone: "" });

  const handleIdentityChange = (event) => {
    const { name, value } = event.target;
    setIdentity((i) => ({ ...i, [name]: value }));
  };

  const handleIdentitySubmit = (event) => {
    event.preventDefault();
    console.log("Form submitted with data:", identity);
  };

  return (
    <>
      <IdentityForm
        identity={identity}
        onChange={handleIdentityChange}
        onSubmit={handleIdentitySubmit}
      />
      {/* <IdentityDisplay /> */}
    </>
  );
}

export default App;
