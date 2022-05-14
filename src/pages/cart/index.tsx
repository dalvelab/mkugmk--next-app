import Head from "next/head";
import { NextPage } from "next";

import { useTranslate } from "@hooks/useTranslate";

const CartPage: NextPage = () => {
  const translate = useTranslate();

  return (
    <>
      <Head>
        <title>Купить билет | Музейный комплекс УГМК</title>
      </Head>
      <section className="section__tickets">
        <h2 className="section__heading">{translate.cart.title}</h2>
      </section>
    </>
  );
};

export default CartPage;
