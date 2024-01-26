import { ACCESS_TOKEN_KEY } from "@/constants";

export const getTokenFromLocalStorage = () => {
  const tokenWithUserJSON = localStorage.getItem(ACCESS_TOKEN_KEY);
  if (!tokenWithUserJSON) return null;
  const tokenWithUser = JSON.parse(tokenWithUserJSON);
  return tokenWithUser.user.id;
};
