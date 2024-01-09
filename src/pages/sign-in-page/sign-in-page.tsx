import Logo from '../../components/logo/logo.tsx';
import Copyright from '../../components/copyright/copyright.tsx';
import {FormEvent, ReactNode, useRef, useState} from 'react';
import {useAppDispatch} from '../../hooks/hooks-index.ts';
import {loginAction} from '../../store/api-actions.ts';
import {useNavigate} from 'react-router-dom';
import {AuthInfo} from '../../types/auth-info.ts';
import {SignInError, ValidationPattern} from '../../const/const.ts';

type SingInProps = {
  children?: ReactNode;
}

export function SignInPage({ children}: SingInProps) {
  const [invalidFields, setInvalidFields] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const loginRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const onSubmit = (authData: AuthInfo) => {
    dispatch(loginAction(authData));
  };
  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (loginRef.current && passwordRef.current) {
      const isEmailValid = ValidationPattern.Email.test(loginRef.current.value);
      const isPasswordValid = ValidationPattern.Password.test(passwordRef.current.value);

      if (isEmailValid && isPasswordValid) {
        onSubmit({
          login: loginRef.current.value,
          password: passwordRef.current.value,
        });
        setInvalidFields(false);
        setErrorMessage('');
        navigate('/');
      } else {
        setInvalidFields(true);
        const error = !isEmailValid ? SignInError.InvalidEmail : SignInError.InvalidPassword;
        setErrorMessage(error);
      }
    }
  };

  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo className={'logo__link'}/>
        <h1 className="page-title user-page__title">Sign in</h1>
      </header>
      <div className="sign-in user-page__content">
        <form action="#" className="sign-in__form" onSubmit={handleSubmit}>
          {invalidFields &&
            <div className='sign-in__message'>
              <p>{errorMessage}</p>
            </div>}
          {children}
          <div className="sign-in__fields">
            <div className="sign-in__field">
              <input ref={loginRef} className="sign-in__input" type="email" placeholder="Email address" name="user-email" id="user-email" data-testid="user-email"/>
              <label className="sign-in__label visually-hidden" htmlFor="user-email">Email address</label>
            </div>
            <div className="sign-in__field">
              <input ref={passwordRef} className="sign-in__input" type="password" placeholder="Password" name="user-password" id="user-password" data-testid="user-password"/>
              <label className="sign-in__label visually-hidden" htmlFor="user-password">Password</label>
            </div>
          </div>
          <div className="sign-in__submit">
            <button className="sign-in__btn" type="submit">Sign in</button>
          </div>
        </form>
      </div>

      <footer className="page-footer">
        <Logo className={'logo__link logo__link--light'}/>
        <Copyright/>
      </footer>
    </div>

  );
}
