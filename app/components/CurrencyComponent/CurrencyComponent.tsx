import style from "./Currency.module.scss";
import { useGetCurrencyQuery } from "@/app/redux/features/currencySlice";
import { Loader } from "../Loader/Loader";
import { InputGetCurrency } from "./InputGetCurrency";
import { Currency } from "../types";

const filterCurrency = (data: Currency[]) => {

 let result = data?.filter(
    (e) =>
      e.cc == "USD" ||
      e.cc == "EUR" ||
      e.cc == "PLN" ||
      e.cc == "GBP" ||
      e.cc == "CHF" ||
      e.cc == "CAD"
  );
  return result?.sort((a, b) => b.r030 - a.r030);
};

export const CurrencyComponent = () => {
  const { data = [],
    isLoading,
    isError,
    isSuccess,
    error } = useGetCurrencyQuery('');

  return (

    <div className={`${style.currency} col-lg-12 col-sm-7 col-md-5 mx-auto col-10`}>
      <h3 className={style.title}>Exchange rate</h3>
      {isLoading && <Loader/> }
        {data && (
          filterCurrency(data)?.map((element: Currency, i) => <InputGetCurrency curency={element} key={i} />)
        )}
     </div>

  );
};
