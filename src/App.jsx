import MainContent from "./components/MainContent"
import Sidebar from "./components/Sidebar.jsx"

import "./styles/components/app.sass"


function App() {
  return (
    <div id="portfolio">
      <h1>Leandro de Jesus</h1>
      <Sidebar />
      <MainContent />
    </div>
  );
}

export default App;
