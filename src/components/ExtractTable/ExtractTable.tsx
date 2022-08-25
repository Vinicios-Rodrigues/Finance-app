import { useEffect } from "react";
import * as S from "./table.styles";
import { api } from "../../services/api";

export const ExtractTable = () => {
  useEffect(() => {
    api.get("/transactions").then((response) => console.log(response.data));
  }, []);
  return (
    <S.Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Preço</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>desenvolvimento de website</td>
            <td>R$ 1200</td>
            <td>Venda</td>
            <td>13/04/2020</td>
          </tr>
          <tr>
            <td>Site</td>
            <td>R$ 1200</td>
            <td>Venda</td>
            <td>13/04/2020</td>
          </tr>
        </tbody>
      </table>
    </S.Container>
  );
};
