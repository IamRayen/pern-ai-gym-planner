import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Onboarding from "./pages/OnboardingPage";
import ProfilePage from "./pages/ProfilePage";
import AuthPage from "./pages/AuthPage";
import AccountPage from "./pages/AccountPage";
import Navbar from "./components/layout/Navbar";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        <main className="flex-1" >
          <Navbar />
          <Routes>
            <Route index element={<HomePage />} />
            <Route path="/onboarding" element={<Onboarding />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/auth/:pathname" element={<AuthPage />} />
            <Route path="/account/:pathname" element={<AccountPage />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
