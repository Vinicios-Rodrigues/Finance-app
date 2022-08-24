import * as S from "./Summary.styles";
import entrada from "../../assets/entrada.svg";
import saida from "../../assets/saida.svg";
import total from "../../assets/cifrao.svg";
export const Summary = () => {
  return (
    <S.Container>
      <div className="content">
        <header>
          <p>Entrada</p>
          <img src={entrada} alt="" />
        </header>
        <strong> R$ 17.400,00</strong>
      </div>
      <div className="content">
        <header>
          <p>Saída</p>
          <img src={saida} alt="" />
        </header>
        <strong>R$ 1.259,00</strong>
      </div>
      <div className="content">
        <header>
          <p>Total</p>
          <img src={total} alt="" />
        </header>
        <strong>R$ 16.141,00</strong>
      </div>
    </S.Container>
  );
};
