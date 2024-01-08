import React from "react";
import { Link } from "react-router-dom";

export default function SignUpPage() {
  return (
    <div>
      <div>
        <h1>회원가입</h1>
      </div>
      <main>
        <form action="submit">
          <label htmlFor="email"></label>
          <input type="email" name="email" id="email" placeholder="이메일을 입력해주세요." />
          <label htmlFor="password"></label>
          <input type="password" name="password" id="password" placeholder="비밀번호를 입력해주세요." />
          <button type="submit">회원가입 완료</button>
        </form>
        <div>
          <h2>이미 회원이신가요?</h2>
          <Link to="/">로그인 페이지로 이동</Link>
        </div>
      </main>
    </div>
  );
}
