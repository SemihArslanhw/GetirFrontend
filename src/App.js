import {
    BrowserRouter,
    Routes,
    Route
  } from "react-router-dom";
import Header from "./components/header/Header";
import Category from "./pages/Category";
import Home from './pages/Home';

function App() {

    
    return(
        <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/kategori" element={<Category/>} />
          <Route path="/kategori/:categoryName" element={<Category/>} />
          <Route path="/kategori/:categoryName/:subCategoryName" element={<Category/>} />
        </Routes>
      </BrowserRouter>
    )
 
}

export default App;
