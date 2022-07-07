import React from "react";
import s from "./Text.module.css";
interface TextProps {
  size: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  fw?: "100" | "200" | "300" | "400" | "500" | "600" | "700" | "800";
  color?:
    | "success"
    | "info"
    | "primary"
    | "danger"
    | "warning"
    | "orange"
    | "black"
    | "default";
  children?: JSX.Element | JSX.Element[];
}

const Text: React.FC<TextProps> = ({
  children,
  fw = "400",
  size = "h6",
  color = "default",
}) => {
  return (
    <span
      style={{ fontWeight: fw }}
      className={`${s.text} ${s[color]} ${size} ${s[size]}`}
    >
      {children}
    </span>
  );
};

export default Text;
