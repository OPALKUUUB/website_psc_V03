import Header from "./components/Header";
import TopicWhatWeDo from "./components/TopicWhatWeDo";
import WhatWeDo from "./components/WhatWeDo";
import "./App.css";

function App() {
  return (
    <>
      <div className="mustache"></div>
      <Header />
      <TopicWhatWeDo topic="what we do ?" />
      <WhatWeDo />
      <TopicWhatWeDo topic="contact us" />
    </>
  );
}

export default App;
