import Hero from "./Components/Hero/Hero";
import Header from "./Components/Header/Header";
import Skills from "./Components/Skills/Skills";
import Projects from "./Components/Projects/Projects";
import Experience from "./Components/Experience/Experience";
import Education from "./Components/Education/Education";
import Contact from "./Components/Contact/Contact";
import { useRef, useState, useEffect } from "react";
import app from "../firebase";
import { getDatabase, ref, onValue } from "firebase/database";
function App() {
  const homeRef = useRef(null);
  const skillRef = useRef(null);
  const projectRef = useRef(null);
  const expRef = useRef(null);
  const eduRef = useRef(null);
  const contactRef = useRef(null);
  const [staticFiles, setStaticFiles] = useState([]);

  useEffect(() => {
    const db = getDatabase(app);
    const dataRefrence = ref(db, "/staticFiles");
    onValue(dataRefrence, (snapshot) => {
      setStaticFiles(snapshot.val());
    });
  }, []);

  const handleScroll = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div ref={homeRef} className="h-full">
      <Header
        homeRef={homeRef}
        skillRef={skillRef}
        projectRef={projectRef}
        expRef={expRef}
        eduRef={eduRef}
        contactRef={contactRef}
        handleScroll={handleScroll}
      />
      <Hero resume={staticFiles?.resume} />
      <Skills skillRef={skillRef} />
      <Projects projectRef={projectRef} />
      <Experience expRef={expRef} />
      <Education eduRef={eduRef} />
      <Contact contactRef={contactRef} />
    </div>
  );
}

export default App;
