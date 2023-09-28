import Center from "./components/Center";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Left from "./components/Left";
import Right from "./components/Right";
import './App.css';
import Banner from "./components/Banner";

// import Contact from "./Contact";
import { useState } from "react";

function App() {
  const [activeContent, setActiveContent] = useState('post');
  return (
    <div className="App">
      <Header setActiveContent={setActiveContent}></Header>
      <div className="main">
      <Left></Left>
      <Center activeContent={activeContent}></Center>  
      
      <Right></Right>
      </div>
      <Banner />
      <Footer></Footer>
    </div>
  );
}

export default App;
