import React from "react";
import Nav from "../Nav/Nav";
import Landing from "../Landing/Landing";
import Footer from "../Footer/Footer";
import "./App.css";
class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Landing />
        {/* Landing Page */}
        {/* Challenge Sectiuon */}
        <Footer />
      </div>
    );
  }
}
export default App;
