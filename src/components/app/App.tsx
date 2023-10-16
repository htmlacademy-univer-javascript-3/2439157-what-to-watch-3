import MainPage from '../../pages/main-page/main-page';

type AppProps = {
  promoFilmName: string;
  promoFilmGenre: string;
  promoFilmYear: number;
}

function App(props: AppProps): JSX.Element {
  return (
    <MainPage {...props} />
  );
}

export default App;
