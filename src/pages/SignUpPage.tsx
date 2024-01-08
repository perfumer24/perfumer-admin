import AuthButton from "@/components/AuthButton";
import { ALLOWED_EMAILS } from "@/config";
import useSupabase from "@/hooks/useSupabase";
import { paths } from "@/router";
import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function SignUpPage() {
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

    const { data, error } = await client.auth.signUp({
      email,
      password,
      options: { emailRedirectTo: "http://localhost:5173" },
    });
    console.log(data, error);
    if (!error) {
      alert("이메일을 확인해주세요.");
    }
  };

  return (
    <div>
      <div>
        <h1>회원가입</h1>
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
          <AuthButton text="회원가입" handleSubmit={handleSubmit} />
        </form>
        <div>
          <h2>이미 회원이신가요?</h2>
          <Link to={paths.root}>로그인 페이지로 이동</Link>
        </div>
      </main>
    </div>
  );
}
