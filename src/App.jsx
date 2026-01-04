import "./App.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import Artists from './pages/Artists';
import ArtistDetails from './pages/ArtistDetails';
import BookingRequest from "./pages/BookingForm";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/artists" element={<Artists />} />
          <Route path="/artists/:artistId" element={<ArtistDetails />} />
          <Route path="/booking" element={<BookingRequest />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;