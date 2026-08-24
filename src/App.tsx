import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout";
import HomePage from "./pages/HomePage";
import ChampionsPage from "./pages/ChampionsPage";
import EquipePage from "./pages/EquipePage";
import NotFoundPage from "./pages/NotFoundPage";

const App = () => {
  return (
    <BrowserRouter>
      <div className="flex min-h-screen flex-col bg-slate-950 p-8">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="champions" element={<ChampionsPage />} />
            <Route path="equipe" element={<EquipePage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
