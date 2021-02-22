import React from "react";
import { ThemeContext, themes } from "./theme/theme-context";

import About from "./containers/About";
import Portfolio from "./containers/Portfolio";
import Social from "./containers/Social";
import Experience from "./containers/Experience";
import Footer from "./containers/Footer";

import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Divider from "./components/Divider";
import useContentfulClient from "./hooks/useContentfulClient";

export default function App() {
  const [showNavbar, setShowNavbar] = React.useState(true);
  const [theme, setTheme] = React.useState(themes.light);
  const client = useContentfulClient();

  function toggleTheme() {
    setTheme(theme === themes.light ? themes.dark : themes.light);
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <Navbar showNavbar={showNavbar} client={client} />
      <Header client={client} />

      <About id="about" client={client} />

      <Divider
        id="portfolio"
        bgColor="rgba(48,116,60,0.83)"
        title="<Portfolio />"
        subtitle="Selected personal projects"
      />

      <Portfolio client={client} />

      <Divider
        id="experience"
        bgColor="rgba(179,129,19,0.83)"
        title="<Experience />"
        subtitle="Things I have done so far"
      />

      <Experience client={client} />

      <Social />

      <Footer />
    </ThemeContext.Provider>
  );
}
