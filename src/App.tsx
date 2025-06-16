import { BrowserRouter as Router, Switch, Route, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { Analytics } from "@vercel/analytics/react";
import { Navbar } from "./components/navbar";
import { Footer } from "./components/footer";
import { Home } from "./pages/home";
import { Projects } from "./pages/projects";
import { Novel } from "./pages/novel";
import { Contact } from "./pages/contact";
import { About } from "./pages/about";
import { ChatPopup } from "./components/chat-popup";
import { useEffect, useState } from "react";

// Componente para manejar el scroll al inicio de la página
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function AppRoutes() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/projects" component={Projects} />
      <Route path="/novel" component={Novel} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
    </Switch>
  );
}

export default function App() {
  const [isChatOpen, setIsChatOpen] = useState(false);

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-background text-foreground">
        <Navbar />
        <motion.main 
          className="flex-grow"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <AppRoutes />
          <Analytics />
        </motion.main>
        <Footer />
        <ChatPopup isOpen={isChatOpen} onToggle={toggleChat} />
      </div>
    </Router>
  );
}