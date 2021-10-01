import Header from "./components/Header";

import "./App.css";

function App() {
  return (
    <>
      <Header />
      <section>
        <div
          style={{
            width: "100vw",
            background: "black",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "20vh",
          }}
        >
          <div>
            <h1 style={{ margin: "0" }}>what we do ?</h1>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
