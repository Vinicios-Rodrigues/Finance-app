import * as S from "./Header.styles";
import cifrao from "../../assets/cifrao.svg";
export const Header = () => {
  return (
    <S.Header>
      <div className="wrapper">
        <div className="containerTitle">
          <h1>Finance</h1>
          <img src={cifrao} alt="" />
        </div>
        <button className="button">Nova transação</button>
      </div>
    </S.Header>
  );
};
