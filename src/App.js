import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Header from "./Components/Header";
import { cart } from "./Redux/ReduxParent";
import { Provider } from "react-redux";
import { createContext, useState } from "react";

const wrapper = createContext();

function App() {
  const [count, setCount] = useState(0);

  return (
    <Provider store={cart}>
      <wrapper.Provider value={{ count, setCount }}>
        <div className="container-fluid p-0">
          <BrowserRouter>
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />{" "}
            </Routes>{" "}
          </BrowserRouter>{" "}
        </div>{" "}
      </wrapper.Provider>{" "}
    </Provider>
  );
}

export default App;

export { wrapper };
