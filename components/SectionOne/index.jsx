import "./style.css";
import imga from "../../assets/section-one.svg"

function SectionOne() {
  return (
    <section className="section-one">
      <div className="section-one-content">
        <h1>Управление запасами розничного магазина</h1>
        <p>
          Использование сервиса 1С-Товары позволяет значительно упростить работу
          по формированию заявок поставщику.
        </p>
        <button className="section-one-button">
          <a href="#">Заказать демонстрацию</a>
        </button>
      </div>
      <img src={imga} alt="" />
    </section>
  );
}

export default SectionOne;
