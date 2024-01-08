import AuthButton from "@/components/AuthButton";
import { ALLOWED_EMAILS } from "@/config";
import useSupabase from "@/hooks/useSupabase";
import { paths } from "@/router";
import React, { useState } from "react";
import { Link } from "react-router-dom";

// ui 만들기
// 이메일, 비밀번호로 form으로 로그인 후,
// 중간에 edge function으로 우리가 제한하는 것을 검증

export default function AuthPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const client = useSupabase();
  // useAuth로 리팩토링
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const isInvalidEmail = !ALLOWED_EMAILS.includes(email);
    if (isInvalidEmail) return;

    await client.auth.signInWithPassword({
      email,
      password,
      options: { redirectTo: "http://localhost:5173" },
    });
  };

  return (
    <div>
      <div>
        <h1>admin이시라면 로그인 하세요</h1>
      </div>
      <main>
        <form action="submit">
          <label htmlFor="email"></label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="이메일을 입력해주세요."
            value={email}
            onChange={handleEmailChange}
          />
          <label htmlFor="password"></label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="비밀번호를 입력해주세요."
            value={password}
            onChange={handlePasswordChange}
          />
          <AuthButton text="로그인" handleSubmit={handleSubmit} />
        </form>
        <div>
          <span className="text-3xl font-bold">아직 회원이 아니신가요?</span>
          <Link to={paths.signUp}>회원가입페이지로 이동</Link>
        </div>
      </main>
    </div>
  );
}
