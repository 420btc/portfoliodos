import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { motion } from "framer-motion";
import { Analytics } from "@vercel/analytics/react";
import { Navbar } from "./components/navbar";
import { Footer } from "./components/footer";
import { Home } from "./pages/home";
import { Projects } from "./pages/projects";
import { Novel } from "./pages/novel";
import { Contact } from "./pages/contact";
import { About } from "./pages/about";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-background text-foreground">
        <Navbar />
        <motion.main 
          className="flex-grow"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/projects" component={Projects} />
            <Route path="/novel" component={Novel} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
          </Switch>
          <Analytics />
        </motion.main>
        <Footer />
      </div>
    </Router>
  );
}