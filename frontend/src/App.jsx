import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import DashboardPage from "./pages/DashboardPage";
import EditProfilePage from "./pages/EditProfilePage";
import AccountSettingsPage from "./pages/AccountSettingsPage";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

import "./assets/styles/tailwind.css";

export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />

        <main className="flex-1 pt-14 pb-14 overflow-y-auto">
          <Routes>
            <Route path="/mypage" element={<DashboardPage />} />
            <Route path="/edit-profile" element={<EditProfilePage />} />
            <Route path="/account-settings" element={<AccountSettingsPage />} />
            {/* その他のルートもここに追加可能 */}
            {/* <Route path="/anotherPage" element={<AnotherPage />} /> */}
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}