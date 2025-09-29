import './App.css'
import FaqSection from "./components/FaqSection";
import GetInTouch from "./components/GetInTouch";

const fontFamilyInter = {
  fontFamily: "Inter, sans-serif",
};

function App() {
  return (
    <>
      <div style={fontFamilyInter}>
        <h2 className="bg-blue-300 p-4 font-bold text-center">
          Technical Task One
        </h2>
        <FaqSection />
        <GetInTouch />
      </div>
    </>
  );
}

export default App
