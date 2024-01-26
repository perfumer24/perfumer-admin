// import { getUserId } from "./getUserId";

const PrivateRoute = ({
  LazyComponent,
}: {
  isAuthRequired?: boolean;
  LazyComponent?: React.LazyExoticComponent<() => JSX.Element>;
}): React.ReactElement => {
  console.log("PrivateRoute");
  // 인증 여부 확인

  return <LazyComponent />;
};

export default PrivateRoute;
