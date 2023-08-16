import React from "react";
import Navbar from "./components/Navbar/Navbar";
import "./App.css";
import ContactHeader from "./components/ContactHeader/ContactHeader";
import Form from "./components/Form/Form";

const App = () => {
  return (
    <div>
      <Navbar />
      <div className="mainContainer">
        <ContactHeader />
        <Form />
      </div>
    </div>
  );
};

export default App;
