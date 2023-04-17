import './App.css'
// import SearchBar from "./Component/SearchEngine/SearchBar";
import HomePage from './container/HomePage/HomePage'
import Books from "./container/Books/Books";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Modal from './container/Modal/Modal';
import SearchProvider from './Component/context/SearchProvider';

function App() {

  return (
    <SearchProvider>
     <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />

          <Route path="/results" element={<Books />}/>
          <Route path="/results/:id" element={<Modal />} />
        </Routes>
      </div>
    </BrowserRouter> 
    </SearchProvider>
  )
}

export default App
