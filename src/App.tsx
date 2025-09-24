import React from 'react';
const Header = React.lazy(() => import('header/Header'));
const Footer = React.lazy(() => import('footer/Footer'));


export default function App() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <React.Suspense fallback={<div style={{ padding: 8 }}>Loading header…</div>}>
        <Header />
      </React.Suspense>


      <main style={{ flex: 1, padding: 16 }}>
        <h2>Host: Travel Dashboard</h2>
        <p>This content is rendered by the <strong>Host</strong> app. Header & Footer are remote MF modules.</p>
      </main>


      <React.Suspense fallback={<div style={{ padding: 8 }}>Loading footer…</div>}>
        <Footer />
      </React.Suspense>
    </div>
  );
}