import Hero from "./Components/Hero/Hero";
import Header from "./Components/Header/Header";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <section className="max-w-7xl m-auto my-4 p-4 min-h-[100vh]">
        <h2 className="text-2xl font-bold text-center">Skills</h2>
      </section>
    </>
  );
}

export default App;
