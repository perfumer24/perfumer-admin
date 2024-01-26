import { getTokenFromLocalStorage } from "./getTokenFromLocalStorage";

const PrivateRoute = ({
  LazyComponent,
}: {
  isAuthRequired?: boolean;
  LazyComponent?: React.LazyExoticComponent<() => JSX.Element>;
}): React.ReactElement => {
  const token = getTokenFromLocalStorage();

  return token ? <LazyComponent /> : <div>로그인이 필요합니다</div>;
};

export default PrivateRoute;
