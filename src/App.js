import "./styleSheet/componentCSS.css";
import Body from "./components/transparentDiv";
import mountain from './images/mountain.jpg';
import SampleButton from "./components/buttons";

function App() {
  return (
    <>
      <div>
        <Body />
        <div class="gradient fitScreen layering1" />
        <SampleButton />
        <img src={mountain} class="fitScreen layering2"/>
      </div>
    </>
  );
}

export default App;
