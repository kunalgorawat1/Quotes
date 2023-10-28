import { useState } from "react";
import "./App.css";
import getQuotes from "./api/quotesAPI";
import Button from "./components/Button";
import Output from "./components/Output";
import Select from "./components/Select";
import { categories } from "./constants";

function App() {
  const options = categories;
  const [selectedOption, setSelectedOption] = useState(options[0].value);
  const [resArray, setResArray] = useState([]);

  const handleClick = async (e) => {
    console.log("selected vale query", selectedOption);
    const res = await getQuotes(selectedOption);
    console.log("handle click called");
    console.log("res data ", res);
    setResArray(res);
  };

  return (
    <div className="App">
      <header className="App-header"></header>
      <body className="App-Body">
        <Select
          options={options}
          selectedOption={selectedOption}
          setSelectedOption={setSelectedOption}
        />
        <Button onClick={handleClick} />

        <Output quotes={resArray} />
      </body>
    </div>
  );
}

export default App;
