import { Route, Routes, Navigate } from "react-router-dom";
import classes from "./App.module.css";
import Card from "./UI/Card/Card";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";

function App() {
  return (
    <Card className={classes["main-container"]}>
      <Routes>
        <Route path="/" exact element={<Navigate to="/home" />}></Route>
        <Route path="/home" element={<HomePage />}></Route>
        <Route path="/about" element={<AboutPage />}></Route>
      </Routes>
    </Card>
  );
}

export default App;
