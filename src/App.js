import "./styleSheet/componentCSS.css";
import Body from "./components/transparentDiv";
import mountain from './images/purple.jpg';
import SampleButton from "./components/buttons";

function App() {
  return (
    <>
      <div>
        <Body />
        <SampleButton />
        <div class="gradient fitScreen layering1" />
        <img src={mountain} class="fitScreen layering2"/>
      </div>
    </>
  );
}

export default App;
