import React from "react";
import NavBar from "./components/NavBar";
import WordAnalyzerContainer from "./components/WordAnalyzerContainer";
function App() {
  return (
    <div className="w-full min-h-screen bg-slate-200 font-mono">
      <NavBar />
      <WordAnalyzerContainer />
    </div>
  );
}

export default App;
