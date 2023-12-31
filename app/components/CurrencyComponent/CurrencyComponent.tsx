import style from './Currency.module.scss';
import { useGetCurrencyQuery } from '@/app/redux/features/currencySlice';
import { Loader } from '../Loader/Loader';
import { InputGetCurrency } from './InputGetCurrency';
import { Currency } from '../types';

const filterCurrency = (data: Currency[]) => {
  const result = data?.filter(
    (e) =>
      e.cc == 'USD' ||
      e.cc == 'EUR' ||
      e.cc == 'PLN' ||
      e.cc == 'GBP' ||
      e.cc == 'CHF' ||
      e.cc == 'CAD',
  );
  return result?.sort((a, b) => b.r030 - a.r030);
};

export const CurrencyComponent = () => {
  const { data = [], isLoading, isError } = useGetCurrencyQuery('');

  return (
    <>
      {isError && (
        <div>
          <h1>error</h1>
        </div>
      )}
      <div className={`${style.currency}`}>
        <h3 className={style.title}>Exchange rate</h3>
        <div className={style.row}>
          <h4>Currency</h4>
          <h4>UAH</h4>
        </div>
        {isLoading && <Loader />}
        {data &&
          filterCurrency(data)?.map((element: Currency, i: number) => (
            <InputGetCurrency curency={element} key={i} />
          ))}
      </div>
    </>
  );
};
