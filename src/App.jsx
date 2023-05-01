import Content from "./components/Content/Content";
import Header from "./components/Header/Header";
import { useState, useEffect } from "react"
import { Modal } from "./components/Header/User/Modal";
import "./App.scss"

function App() {
  console.log("привет")
  const [scroll, setScroll] = useState(0);

  const handleScroll = () => {
    setScroll(window.scrollY);
    // console.log(scroll)
  };

  const handleUpButton = () => {
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);



  const [modal, setModal] = useState(false)

  const handel = () => {
    setModal(modal => !modal)
  }


  return (
    <div className="App">
      <Header opens={handel} />

      <Content shadow={scroll < 500 ?  false : true}>
        <button className={scroll < 1000 ? "btn" : "btn show"} onClick={handleUpButton}>Go Up</button>
      </Content>
      {modal === false ? null :
      <Modal setActive={setModal}>
        <h3>привет</h3>  
        <p>привет</p>  
      </Modal>}
    </div>
  );
}

export default App;
