import './App.css'
import HomePage from './container/HomePage/HomePage'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Modal from './container/Modal/Modal';
import SearchProvider from './Component/context/SearchProvider';
import CreateBooks from './Component/context/CreateBooks';


function App() {

  return (
    <CreateBooks>
    <SearchProvider>
     <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/results/:id" element={<Modal />} />
        </Routes>
      </div>
    </BrowserRouter> 
    </SearchProvider>
    </CreateBooks>
  )
}

export default App
