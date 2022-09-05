import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Bloglist from '../src/pages/bloglist';
import Blog from './pages/blog';
import { Link, BrowserRouter, Route, Routes } from "react-router-dom";


function App() {
  return (
    <div className="App">
      {/* <Bloglist/> */}

      <BrowserRouter>
            <Link to="/">Home Page</Link>
            <Link to="/blog">Blog Page</Link>
            <Routes>
                <Route path="/" element={<Bloglist />} />
                <Route path="/blog" element={<Blog />} />
            </Routes>
        </BrowserRouter>

      {/* <Blog/> */}
    </div>
  );
}

export default App;
