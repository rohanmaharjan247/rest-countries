import './App.css';
import Layout from './components/Layout/component';
import Home from './features/View/Home/component';
import { Routes, Route, Navigate } from 'react-router-dom';
import CountryDetail from './features/View/CountryDetail/component';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />

        <Route path="/detail">
          <Route path=":countryName" index element={<CountryDetail />} />
        </Route>

        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
}

export default App;
