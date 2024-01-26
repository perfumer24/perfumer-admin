import { LazyExoticComponent } from "react";

const PublicRoute = ({
  LazyComponent,
}: {
  isAuthRequired?: boolean;
  LazyComponent?: LazyExoticComponent<() => JSX.Element>;
}): React.ReactElement => {
  console.log(LazyComponent);

  return <LazyComponent />;
};

export default PublicRoute;
// 여기까지 오지도 않는다.
