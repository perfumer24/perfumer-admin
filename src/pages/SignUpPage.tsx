import AuthButton from "@/components/AuthButton";
import { ALLOWED_EMAILS } from "@/config";
import useSupabase from "@/hooks/useSupabase";
import { paths } from "@/router";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function SignUpPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const supabase = useSupabase();
  // useAuth로 리팩토링
  const navigate = useNavigate();
  const [session, setSession] = useState(null);
  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    supabase.auth.onAuthStateChange((_event, session) => {
      console.log("session", session);
      setSession(session);
    });
  }, [supabase]);

  if (session) {
    navigate("/");
  }

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

    const { data, error } = await supabase.auth.signUp({
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
    <div className="flex h-screen w-screen flex-col items-center justify-center">
      <h1 className="prose-2xl w-448px text-center">회원가입 페이지</h1>
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
            <Link to="/" className="btn btn-link">
              이미 회원이신가요?
            </Link>
            <AuthButton text="회원가입" handleSubmit={handleSubmit} />
          </div>
        </form>
      </main>
    </div>
  );
}
