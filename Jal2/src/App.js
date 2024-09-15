import { Route, Routes } from "react-router-dom";
import Dashboard from "./Pages/Dashboard/Dashboard";
import { HeaderProvider } from "./Context/HeaderContext";
import GraphicalDashboard from "./Pages/Dashboard/GraphicalDashboard";
import { SessionProvider } from "./Context/SessionContext";

function App() {
  return (
    <SessionProvider>
    <HeaderProvider>
      <Routes>
        <Route path="/" element={<GraphicalDashboard />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </HeaderProvider>
    </SessionProvider>
  );
}

export default App;
