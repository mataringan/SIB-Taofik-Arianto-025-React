import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [valueCAD, setValueCAD] = useState();
  const [valueBuyCad, setValueBuyCad] = useState();
  const [valueSellCad, setValueSellCad] = useState();

  const [valueEUR, setValueEUR] = useState();
  const [valueBuyEur, setValueBuyEur] = useState();
  const [valueSellEur, setValueSellEur] = useState();

  const [valueIDR, setValueIDR] = useState();
  const [valueBuyIdr, setValueBuyIdr] = useState();
  const [valueSellIdr, setValueSellIdr] = useState();

  const [valueJPY, setValueJPY] = useState();
  const [valueBuyJpy, setValueBuyJpy] = useState();
  const [valueSellJpy, setValueSellJpy] = useState();

  const [valueCHF, setValueCHF] = useState();
  const [valueBuyChf, setValueBuyChf] = useState();
  const [valueSellChf, setValueSellChf] = useState();

  const [valueGBP, setValueGBP] = useState();
  const [valueBuyGbp, setValueBuyGbp] = useState();
  const [valueSellGbp, setValueSellGbp] = useState();

  useEffect(() => {
    fetch(
      "https://api.currencyfreaks.com/latest?apikey=e389a001cbaa4aea8e74e2d1f4e21b20"
    )
      .then((response) => response.json())
      .then((json) => {
        // console.log(json.rates.CAD);

        const resultBuySellCAD = (json.rates.CAD * 5) / 100;
        const resultBuySellEUR = (json.rates.EUR * 5) / 100;
        const resultBuySellIDR = (json.rates.IDR * 5) / 100;
        const resultBuySellJPY = (json.rates.JPY * 5) / 100;
        const resultBuySellCHF = (json.rates.CHF * 5) / 100;
        const resultBuySellGBP = (json.rates.GBP * 5) / 100;

        setValueCAD(json.rates.CAD);
        setValueBuyCad(parseFloat(json.rates.CAD) + resultBuySellCAD);
        setValueSellCad(parseFloat(json.rates.CAD) - resultBuySellCAD);

        setValueEUR(json.rates.EUR);
        setValueBuyEur(parseFloat(json.rates.EUR) + resultBuySellEUR);
        setValueSellEur(parseFloat(json.rates.EUR) - resultBuySellEUR);

        setValueIDR(json.rates.IDR);
        setValueBuyIdr(parseFloat(json.rates.IDR) + resultBuySellIDR);
        setValueSellIdr(parseFloat(json.rates.IDR) - resultBuySellIDR);

        setValueJPY(json.rates.JPY);
        setValueBuyJpy(parseFloat(json.rates.JPY) + resultBuySellJPY);
        setValueSellJpy(parseFloat(json.rates.JPY) - resultBuySellJPY);

        setValueCHF(json.rates.CHF);
        setValueBuyChf(parseFloat(json.rates.CHF) + resultBuySellCHF);
        setValueSellChf(parseFloat(json.rates.CHF) - resultBuySellCHF);

        setValueGBP(json.rates.GBP);
        setValueBuyGbp(parseFloat(json.rates.GBP) + resultBuySellGBP);
        setValueSellGbp(parseFloat(json.rates.GBP) - resultBuySellGBP);
      });
  });

  return (
    <div className="App">
      <div className="container">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Currency</th>
              <th scope="col">We Buy</th>
              <th scope="col">Exchange Rate</th>
              <th scope="col">We Sell</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>CAD</td>
              <td>{valueBuyCad}</td>
              <td>{valueCAD}</td>
              <td>{valueSellCad}</td>
            </tr>
            <tr>
              <td>EUR</td>
              <td>{valueBuyEur}</td>
              <td>{valueEUR}</td>
              <td>{valueSellEur}</td>
            </tr>
            <tr>
              <td>IDR</td>
              <td>{valueBuyIdr}</td>
              <td>{valueIDR}</td>
              <td>{valueSellIdr}</td>
            </tr>
            <tr>
              <td>JPY</td>
              <td>{valueBuyJpy}</td>
              <td>{valueJPY}</td>
              <td>{valueSellJpy}</td>
            </tr>
            <tr>
              <td>CHF</td>
              <td>{valueBuyChf}</td>
              <td>{valueCHF}</td>
              <td>{valueSellChf}</td>
            </tr>
            <tr>
              <td>GBP</td>
              <td>{valueBuyGbp}</td>
              <td>{valueGBP}</td>
              <td>{valueSellGbp}</td>
            </tr>
          </tbody>
        </table>
        <footer>
          <p>Rates are based from 1 USD.</p>
          <p>This Application uses API from https://currencyfreaks.com</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
