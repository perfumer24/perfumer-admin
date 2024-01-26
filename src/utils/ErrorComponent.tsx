import { useNavigate } from "react-router-dom";
import { ERROR_TEXTS } from "./ErrorText";

// 에러 컴포넌트 정의
export const ErrorComponent = () => {
  const navigate = useNavigate();
  return (
    <div>
      <header>{ERROR_TEXTS.headerText}</header>
      <div>{ERROR_TEXTS.apologyText}</div>
      <div>{ERROR_TEXTS.errorText}</div>
      <button
        onClick={() => navigate("/")}
        text={ERROR_TEXTS.returnText}
        className="btn btn-primary"
      />
    </div>
  );
};
