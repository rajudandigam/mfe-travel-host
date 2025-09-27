import React from 'react';
import { Outlet } from 'react-router-dom';

const Header = React.lazy(() => import('header/Header'));
const Footer = React.lazy(() => import('footer/Footer'));

export default function Layout() {
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
        <React.Suspense fallback={<div>Loading content…</div>}>
          <Outlet />
        </React.Suspense>
      </main>


      <React.Suspense fallback={<div style={{ padding: 8 }}>Loading footer…</div>}>
        <Footer />
      </React.Suspense>
    </div>
  );
}
