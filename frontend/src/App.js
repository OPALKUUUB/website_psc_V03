import Header from "./components/Header";
import Topic from "./components/Topic";
import WhatWeDo from "./components/WhatWeDo";
import ContactUs from "./components/ContactUs";
import "./App.css";

function App() {
  return (
    <>
      <div className="mustache"></div>
      <Header />
      <Topic topic="what we do ?" />
      <WhatWeDo />
      <Topic topic="contact us" />
      <ContactUs />
    </>
  );
}

export default App;
