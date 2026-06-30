import React from "react";
import { useTheme } from "./ThemeContext"; // افترضنا أنك تستخدم Context للثيم

const ThemeCard = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <button
      className={`${theme} theme-btn`}
      onClick={toggleTheme}
      type="button"
    >
      {theme === "light" ? "DARK 🌙" : "LIGHT ☀️"}
    </button>
  );
};

export default ThemeCard;
