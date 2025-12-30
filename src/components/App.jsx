import { useState } from "react";

function App() {
  const [identity, setIdentity] = useState({ name: "", email: "", phone: "" });

  function handleIdentity(event) {
    setIdentity({...identity, })
  }

  <IdentityForm />
  <IdentityDisplay />
}
