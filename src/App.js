import "./App.css";
import Header from "./components/header/header";
import Information from "./components/instructions/info";
import Reader from "./components/reader/reader";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="pseudobody">
        <Reader />
        <Information />
      </div>
    </div>
  );
}

export default App;
