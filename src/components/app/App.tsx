import MainPage from '../../pages/main-page/MainPage';

type AppProps = {
  promoFilmName: string;
  promoFilmGenre: string;
  promoFilmYear: number;
}

function App({ promoFilmName, promoFilmGenre, promoFilmYear }: AppProps): JSX.Element {
  return (
    <MainPage promoFilmName={promoFilmName} promoFilmGenre={promoFilmGenre} promoFilmYear={promoFilmYear} />
  );
}

export default App;
