import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';

const RemoteSearch = React.lazy(() => import('search/Search'));
const RemoteTrips = React.lazy(() => import('trips/Trips'));

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<RemoteSearch />} />
          <Route path="trips" element={<RemoteTrips />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}