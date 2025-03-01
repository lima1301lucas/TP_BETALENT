import "./Header.css";
import logo from "../assets/logo.png"; 

export function Header() {
  return (
    <header className="header">
      <div className="container">
        <img src={logo} alt="Logotipo" className="logo" />
      </div>
    </header>
  );
}