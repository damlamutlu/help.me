import "./App.css";
import { db } from "./utils/firebase/Firebase";
import { ref, set } from "firebase/database";
import { Routes, Route, Navigate } from "react-router-dom";
import Form from "./components/form/Form";
import Main from "./components/main/Main";
import Card from "./utils/card/Card";

const App = () => {
  const onClickHandler = (event) => {
    event.preventDefault();
    debugger;

    set(ref(db, "Name"), { name: "damla" })
      .then(() => console.log("Data saved!"))
      .catch((error) => console.log(error));
  };

  return (
    <Card className="App">
      <Routes>
        <Route exact path="/welcome" element={<Main />} />
        <Route exact path="/questions" element={<Form />} />
        <Route path="*" element={<Navigate to="/welcome" />} />
      </Routes>
    </Card>
  );
};

export default App;
