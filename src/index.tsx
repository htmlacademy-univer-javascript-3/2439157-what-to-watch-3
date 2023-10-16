import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/App';

// eslint-disable-next-line react-refresh/only-export-components
const Setting = {
  PromoFilmName: 'The Grand Budapest Hotel',
  PromoFilmGenre: 'Drama',
  PromoFilmYear: 2014
} as const;

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App
      promoFilmName={Setting.PromoFilmName}
      promoFilmGenre={Setting.PromoFilmGenre}
      promoFilmYear={Setting.PromoFilmYear}
    />
  </React.StrictMode>
);
