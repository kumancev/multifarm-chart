import { Routes, Route } from "react-router-dom";
import { Item } from "./components/Item";
import Logo from "./components/logo";


const App = (): JSX.Element => {
  return (
    <div className="w-full px-10">
      <Logo className="logo" />
      <Routes>
        <Route path="/" element={<Item />} />
      </Routes>
    </div>
  );
};

export default App;
