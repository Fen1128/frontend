import Footer from "./components/Footer";
import Intro from "./components/Intro";
import Navbar from "./components/Navbar";
import Superhero from "./components/Superhero";
import Trending from "./components/Trending";


function App() {
  return (
    <>
      <div className="intro" id="top">
        <Navbar/>
        <Intro/>
      </div>
        <Trending/>
        <a href="#top" className="btn btn-primary p-2 tombol">
          Go to top
        </a>
        <Superhero/>
        <Footer/>

    </>
  );
}

export default App;
