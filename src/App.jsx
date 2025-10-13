import Header from "./components/Header";
import LearningStats from "./components/LearningStats";
import DashBoard from "./components/DashBoard";
import { ApplicationContextProvider } from "./contexts/ApplicationContext";

function App() {
  return (
    <div className="app">
      <div className="container">
        <Header />
        <ApplicationContextProvider>
          <LearningStats />
          <DashBoard />
        </ApplicationContextProvider>
      </div>
    </div>
  );
}

export default App;
