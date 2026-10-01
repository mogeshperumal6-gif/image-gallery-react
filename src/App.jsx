import Gallery from "./components/Gallery";
import images from "./data/images";
import "./App.css";

function App() {
  return (
    <>
      <h1 className="title">My Image Gallery</h1>
      <Gallery images={images} />
    </>
  );
}

export default App;
