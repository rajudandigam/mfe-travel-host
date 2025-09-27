import React from 'react';
const Header = React.lazy(() => import('header/Header'));
const Footer = React.lazy(() => import('footer/Footer'));
import Search from './components/Search';


export default function App() {
  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'grid',
        gridTemplateRows: 'auto 1fr auto',
        background: '#f7f8fb',
      }}
    >
      <React.Suspense fallback={<div style={{ padding: 8 }}>Loading header…</div>}>
        <Header />
      </React.Suspense>


      <main
        style={{
          display: 'grid',
          justifyItems: 'center',
          alignContent: 'start',
          padding: '36px 20px 28px',
          minHeight: 0,
        }}
      >
        <Search />
      </main>


      <React.Suspense fallback={<div style={{ padding: 16 }}>Loading footer…</div>}>
        <Footer />
      </React.Suspense>
    </div>
  );
}