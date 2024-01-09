import {Link} from 'react-router-dom';
import '../../../style/not-found-style/not-found-style.css';

function NotFoundPage() {
  return (
    <>
      <h1 className="error-code">404</h1>
      <h2 className="explanation-code-error">Страница не найдена</h2>
      <p className="information-not-found">Страница, на которую вы пытаетесь попасть, не существует или была
        удалена.
      </p>
      <p className="information-not-found">Перейдите на &nbsp;<Link to={'/'}>Главную страницу</Link></p>
    </>
  );
}

export default NotFoundPage;
