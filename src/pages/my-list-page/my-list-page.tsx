import { Helmet } from 'react-helmet-async';
import Logo from '../../components/logo/logo';
import CatalogFilmsList from '../../components/catalog-films-list/catalog-films-list';
import { Films } from '../../types/film';

type MyListPageProps = {
  films: Films;
}

function MyListPage({films}: MyListPageProps): JSX.Element {
  return (
    <div className="user-page">
      <Helmet><title>My List</title></Helmet>
      <header className="page-header user-page__head">
        <Logo className='logo__link' />
        <h1 className="page-title user-page__title">
          My list <span className="user-page__film-count">9</span>
        </h1>
        <ul className="user-block">
          <li className="user-block__item">
            <div className="user-block__avatar">
              <img src="img/avatar.jpg" alt="User avatar" width={63} height={63} />
            </div>
          </li>
          <li className="user-block__item">
            <a className="user-block__link">Sign out</a>
          </li>
        </ul>
      </header>
      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>
        <CatalogFilmsList films={films} />
      </section>
      <footer className="page-footer">
        <Logo className='logo__link logo__link--light' />
        <div className="copyright">
          <p>© 2019 What to watch Ltd.</p>
        </div>
      </footer>
    </div>
  );
}

export default MyListPage;
