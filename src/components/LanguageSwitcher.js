import React from "react";
import { useTranslation } from "react-i18next";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const buttonStyle = {
    marginLeft: "10px",
    padding: "5px 10px",
    borderRadius: "5px",
    border: "none",
    cursor: "pointer",
    fontWeight: "bold"
  };

  return (
    <div>
      <button
        onClick={() => i18n.changeLanguage("en")}
        style={{ ...buttonStyle, backgroundColor: "#ffffff", color: "#4CAF50" }}
      >
        EN
      </button>
      <button
        onClick={() => i18n.changeLanguage("hi")}
        style={{ ...buttonStyle, backgroundColor: "#ffffff", color: "#4CAF50" }}
      >
        HI
      </button>
    </div>
  );
};

export default LanguageSwitcher;
