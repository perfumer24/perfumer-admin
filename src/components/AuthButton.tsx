import React from "react";

type ButtonProps = {
  text: string;
  handleSubmit: () => void;
};

export default function AuthButton({ text, handleSubmit }: ButtonProps) {
  return (
    <button type="submit" onClick={handleSubmit} className="btn btn-primary">
      {text}
    </button>
  );
}
