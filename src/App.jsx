import "./App.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import Artists from './pages/Artists';
import ArtistDetails from './pages/ArtistDetails';
import BookingRequest from "./pages/BookingForm";
import Faq from "./pages/Faq";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Studio from "./pages/Studio";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/eternal-bloom" element={<Home />} />
          <Route path="/eternal-bloom/artists" element={<Artists />} />
          <Route path="/eternal-bloom/artists/:artistId" element={<ArtistDetails />} />
          <Route path="/eternal-bloom/booking" element={<BookingRequest />} />
          <Route path="/eternal-bloom/faq" element={<Faq />} />
          <Route path="/eternal-bloom/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/eternal-bloom/studio" element={<Studio />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;