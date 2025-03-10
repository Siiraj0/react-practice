import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header"
import Body from "./components/Body"
import RestuarentCard from "./components/RestuarantCard";







// Main App Layout
const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

// Render the App
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
