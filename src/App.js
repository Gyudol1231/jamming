import './App.css';
import Header from "./components/Header";
import HeaderM from "./components/HeaderM";
import Main from "./components/Main";
import MainM from "./components/MainM";

import { useMediaQuery } from "react-responsive";

function App() {
  const isPC = useMediaQuery({
    query: "(min-width: 1200px)",
  });
  return (
  <>
  {isPC ?
    <>
      <Header />
      <Main />
    </>
    :
    <>
      <HeaderM />
      <MainM />
    </>
  }
  </>
  );
}

export default App;
