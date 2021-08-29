import { useSelector } from "react-redux";
import { useRouter } from "next/router";

// TYPES
import { FC } from "react";

// COMPONENTS
import Link from "next/link";

interface RootState {
  cart: {
    tickets: any;
  };
}

const CartButton: FC = () => {
  const router = useRouter();

  // REDUX STATE
  const cart = useSelector((state: RootState) => state.cart.tickets);

  return (
    <>
      {router.pathname !== "/cart" && cart.length > 0 ? (
        <Link href="/cart">
          <a className="button__cart--status">
            <div className="badge--amount">{cart.length}</div>
            <i className="fal fa-shopping-bag"></i>
          </a>
        </Link>
      ) : null}
    </>
  );
};

export default CartButton;
