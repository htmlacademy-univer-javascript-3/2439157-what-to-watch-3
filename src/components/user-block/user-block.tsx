import {Link, useNavigate} from 'react-router-dom';
import {logoutAction} from '../../store/api-actions.ts';
import {useAppDispatch} from '../../hooks/hooks-index.ts';


function UserBlock() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const onClick = ()=>{
    dispatch(logoutAction());
  };
  return (
    <ul className="user-block">
      <li className="user-block__item">
        <div className="user-block__avatar">
          <img src={'img/avatar.jpg'} alt="User avatar" width="63" height="63" onClick={()=>navigate('/mylist')}/>
        </div>
      </li>
      <li className="user-block__item">
        <Link to='/login' className="user-block__link" onClick={onClick}>Sign out</Link>
      </li>
    </ul>
  );
}

export default UserBlock;
