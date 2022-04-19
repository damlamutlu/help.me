import "./App.css";
import React, { useState, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Form from "./components/form/Form";
import Main from "./components/main/Main";
import Card from "./components/UI/card/Card";
import Last from "./components/last/Last";

import { database } from "./utils/firebase/Firebase";
import { collection, getDocs } from "firebase/firestore";

const App = () => {
  const [cities, setCities] = useState();
  const [budgets ,setBudgets] = useState();

  useEffect(async () => {
    const citiesCol = collection(database, "cities");
    const citySnaphot = await getDocs(citiesCol);
    const cityList = citySnaphot.docs.map((doc) => doc.data());
    let cityNameList = [];
    cityList.forEach(city => cityNameList.push(city.cityName));
    setCities(cityNameList);

    const budgetCol = collection(database, "budget");
    const budgetSnapshot = await getDocs(budgetCol);
    const budgetList = budgetSnapshot.docs.map((doc) => doc.data());
    let budgetAmountList = [];
    budgetList.forEach(budget => budgetAmountList.push(budget.amount));
    setBudgets(budgetAmountList);

  }, []);

  return (
    <Card className="App">
      <Routes>
        <Route exact path="/welcome" element={<Main />} />
        <Route exact path="/questions" element={<Form cities={cities} budgets={budgets} />} />
        <Route exact path="/goodby" element={<Last />} />
        <Route path="*" element={<Navigate to="/welcome" />} />
      </Routes>
    </Card>
  );
};

export default App;
