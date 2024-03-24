import Routes from "./container/Routes";
import Header from "./container/Header";

import "./App.css";
function App() {
  return (
    <div>
      <Header />
      <div style={{ backgroundColor: "#DDD", textAlign: "center" }}>
        Get 10% off on business signup
      </div>
      <div
        style={{
          marginTop: "60px",
          width: "-webkit-fill-available",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            width: "50%",
            border: "1px solid black",
            borderRadius: "10px",
          }}
        >
          <Routes />
        </div>
      </div>
    </div>
  );
}

export default App;
