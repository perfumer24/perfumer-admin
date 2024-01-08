import React from "react";

type ButtonProps = {
  text: string;
  handleSubmit: () => void;
};

export default function AuthButton({ text, handleSubmit }) {
  return (
    <button type="submit" onClick={handleSubmit} className="btn">
      {text}
    </button>
  );
}
