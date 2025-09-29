import './App.css'
import FaqSection from "./components/FaqSection";
import Footer from "./components/Footer";
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
        <Footer />
      </div>
    </>
  );
}

export default App
