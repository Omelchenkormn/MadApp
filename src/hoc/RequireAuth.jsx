import { Navigate, useLocation } from 'react-router-dom';
import { authSelectors } from 'redux/authSelector';
import { useSelector } from 'react-redux';

export const RequireAuth = ({ children }) => {
  const location = useLocation();
  const loggedIn = useSelector(authSelectors.getloggedIn);

  if (!loggedIn) {
    return <Navigate to="/" state={{ from: location }} />;
  }

  return children;
};

 