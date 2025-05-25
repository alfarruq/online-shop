import "./style.css";
import logo from "../../assets/Logo.svg";

function Header() {
  return (
    <header>
      <div className="logo">
        <img src={logo} alt="Logo" className="logo-img" />
        <h2 className="logo-text">1С-Товары</h2>
      </div>
      <ul className="header-links-list">
        <li>
          <a href="#">Как это работает</a>
        </li>
        <li>
          <a href="#">Инструкции</a>
        </li>
        <li>
          <a href="#">Продукты</a>
        </li>
        <li>
          <a href="#">База знаний </a>
        </li>
        <li>
          <a href="#"> О нас</a>
        </li>
        <li className="Join">
          <button>
            <a href="#">Вход</a>
          </button>
        </li>
      </ul>
    </header>
  );
}

export default Header;
