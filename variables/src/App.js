import logo from './logo.svg';
import './App.css';
import MarksSheet from "./components/MarksSheet";

function App() {

  return (
    <div className="App">
      <MarksSheet name="Maahesh" 
      scimarks="76" 
      engmarks="88" 
      hinmarks="90"
      telmarks="95"
      matmarks="34"
      socmarks="88"/>

      <MarksSheet name="Charan"
      scimarks="87" 
      engmarks="94" 
      hinmarks="88"
      telmarks="88"
      matmarks="100"
      socmarks="95"/>

      <MarksSheet name="Surya"
      scimarks="89" 
      engmarks="80" 
      hinmarks="76"
      telmarks="90"
      matmarks="27"
      socmarks="81"/>

    </div>
  );
}

export default App;
