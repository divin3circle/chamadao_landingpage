import { useEffect } from "react";
import { useOverlayStore } from "./hooks/overlayStore";
import Contact from "./pages/Contact";
import Error from "./pages/Error";
import Invest from "./pages/Invest";
import Landing from "./pages/Landing";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";

export default function App() {
  const { isOverlayOpen } = useOverlayStore();

  useEffect(() => {
    if (isOverlayOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  }, [isOverlayOpen]);

  return (
    <BrowserRouter>
      {isOverlayOpen && (
        <div className="w-full absolute inset-0 bottom-0 top-0 h-screen bg-black/70"></div>
      )}
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/invest" element={<Invest />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Toaster />
    </BrowserRouter>
  );
}
