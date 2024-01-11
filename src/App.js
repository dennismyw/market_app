import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./NavBar";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ArticlesListPage from "./pages/ArticlesListPage";
import ArticlePage from "./pages/ArticlePage";
import NotFoundPage from "./pages/NotFoundPage";
import LoginPage from "./pages/LoginPage";
import CreateAccountPage from "./pages/CreateAccountPage";
import FirebaseImageUpload from "./FirebaseImageUpload";
import ButtonUsage from "./pages/ButtonUsage";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />

        <div
          id="page-body"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/photo" element={<FirebaseImageUpload />} />
            <Route path="/button" element={<ButtonUsage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/articles" element={<ArticlesListPage />} />
            <Route path="/articles/:articleId" element={<ArticlePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/create-account" element={<CreateAccountPage />} />
            <Route path="*" element={<NotFoundPage />} />
            {/* <Route path="/photo" element={<Photo />} /> */}
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
