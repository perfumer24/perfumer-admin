import { useUserSession } from "@/hooks/useUserSession";
import AuthPage from "@/pages/AuthPage";

const PrivateRoute = ({
  LazyComponent,
}: {
  isAuthRequired?: boolean;
  LazyComponent?: React.LazyExoticComponent<() => JSX.Element>;
}): React.ReactElement => {
  const session = useUserSession();
  if (!session) {
    return <AuthPage />;
  }

  return <LazyComponent />;
};

export default PrivateRoute;
