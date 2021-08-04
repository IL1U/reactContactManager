import React from 'react';
import ContactManager from "./Components/ContactManager";

export default function App() {
 
  const contacts = ["James Smith", "Thomas Anderson", "Bruce Wayne"];

  return (
    <div className="wrapper">
      <h1>Contact Manager</h1>
      <ContactManager data={contacts}/>
    </div>
  )
}