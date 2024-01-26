import { useUserSession } from "@/hooks/useUserSession";
import { LazyExoticComponent } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const PublicRoute = ({
  LazyComponent,
}: {
  isAuthRequired?: boolean;
  LazyComponent?: LazyExoticComponent<() => JSX.Element>;
}): React.ReactElement => {
  const session = useUserSession();

  const { pathname } = useLocation();
  const navigate = useNavigate();

  // 로그인 후에는 회원가입페이지로 못가게 막는다.
  if (session && pathname === "/sign-up") {
    navigate("/");
  }

  return <LazyComponent />;
};

export default PublicRoute;
