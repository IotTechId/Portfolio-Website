import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "./i18n";
import App from "./App.jsx";
import "animate.css";
import Navbar from "./components/Navbar.jsx";
import "remixicon/fonts/remixicon.css";
import Footer from "./components/footer.jsx";
import Loading from "./components/Loading.jsx";

import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();

import { CodeBracketIcon } from "@heroicons/react/24/outline";

<CodeBracketIcon className="w-8 h-8 text-white" />;

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Loading></Loading>
    <div className="container mx-auto px-4">
      <Navbar />
      <App />
      <Footer />
    </div>
  </StrictMode>
);
