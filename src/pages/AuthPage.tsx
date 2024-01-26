import AuthButton from "@/components/AuthButton";
import { ALLOWED_EMAILS } from "@/config";
import useSupabase from "@/hooks/useSupabase";
import { paths } from "@/router";
import React, { useState } from "react";
import { Link } from "react-router-dom";

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
    <div className="flex h-screen w-screen flex-col items-center justify-center">
      <h1 className="prose-2xl w-448px text-center">로그인 페이지</h1>
      <main className="h-80 w-448px bg-gray-200 px-40px py-32px">
        <form
          action="submit"
          className="flex h-full w-full flex-col justify-around"
        >
          <p>Email</p>
          <label htmlFor="email"></label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="이메일을 입력해주세요."
            value={email}
            onChange={handleEmailChange}
            className="input input-bordered w-full"
          />
          <p>Password</p>
          <label htmlFor="password"></label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="비밀번호를 입력해주세요."
            value={password}
            onChange={handlePasswordChange}
            className="input input-bordered w-full"
          />
          <div className="flex justify-between">
            <Link to="/sign-up" className="btn btn-link">
              Join Us
            </Link>
            <AuthButton text="Login" handleSubmit={handleSubmit} />
          </div>
        </form>
      </main>
    </div>
  );
}
