import React from "react";
import "./logo.css";

export const Logo = () => {
  return (
    <div class="logo-container">
      <img class="logo-image" src="/logo.png" alt="Logo 1" />
      <img class="logo-image-hidden" src="/logo3.png" alt="Logo 2" />
    </div>
  );
};
