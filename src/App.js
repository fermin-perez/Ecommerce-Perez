import "./App.css";
import { Footer } from "./components/Footer/Footer";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer";
import { NavBar } from "./components/NavBar/NavBar";

function App() {
  return (
    <div className="App">
      <header>
        <NavBar />
      </header>
      <main>
        <ItemListContainer greeting="Productos" />
        <ItemDetailContainer />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
