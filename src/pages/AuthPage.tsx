import { paths } from "@/router";
import React from "react";
import { Link } from "react-router-dom";

// ui 만들기
// 이메일, 비밀번호로 form으로 로그인 후,
// 중간에 edge function으로 우리가 제한하는 것을 검증

export default function AuthPage() {
  return (
    <div>
      <div>
        <h1>admin이시라면 로그인 하세요</h1>
      </div>
      <main>
        <form action="submit">
          <label htmlFor="email"></label>
          <input type="email" name="email" id="email" placeholder="이메일을 입력해주세요." />
          <label htmlFor="password"></label>
          <input type="password" name="password" id="password" placeholder="비밀번호를 입력해주세요." />
          <button type="submit">로그인</button>
        </form>
        <div>
          <h2>아직 회원이 아니신가요?</h2>
          <Link to={paths.signUp}>회원가입페이지로 이동</Link>
        </div>
      </main>
    </div>
  );
}
