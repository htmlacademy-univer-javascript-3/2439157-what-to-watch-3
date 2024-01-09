import {Navigate} from 'react-router-dom';

export enum AuthorizationStatus{
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN'
}
type PrivateRouteProps={
  authorizationStatus: string;
  children: JSX.Element;
}
function PrivateRoute(props: PrivateRouteProps){
  const {authorizationStatus, children} = props;
  return(
    authorizationStatus === AuthorizationStatus.Auth ? children : <Navigate to={'/login'}/>
  );
}
export default PrivateRoute;
