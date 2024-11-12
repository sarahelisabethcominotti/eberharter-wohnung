import React from "react";
import { Routes, Route } from "react-router-dom";
import Welcome from "./Welcome";
import ContactForm from "./ContactForm";

function Main() {
  return (
    <main className="App-main">
      <Routes>
        <Route exact path="/" element={<Welcome/>}></Route>
        <Route exact path="/contact" element={<ContactForm/>}></Route>
        {/* <Subscriptions/> */}
      </Routes>
    </main>
  );
}

export default Main;
