import { ACCESS_TOKEN_KEY } from "@/constants";
import { LazyExoticComponent } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const PublicRoute = ({
  LazyComponent,
}: {
  isAuthRequired?: boolean;
  LazyComponent?: LazyExoticComponent<() => JSX.Element>;
}): React.ReactElement => {
  const token = localStorage.getItem(ACCESS_TOKEN_KEY);
  // 토큰이 있으면 회원가입페이지로 못가게 막는다.
  const { pathname } = useLocation();
  const navigate = useNavigate();

  if (token && pathname === "/signup") {
    navigate("/");
  }

  return <LazyComponent />;
};

export default PublicRoute;
// 여기까지 오지도 않는다.
