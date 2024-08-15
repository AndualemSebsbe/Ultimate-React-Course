import { formatCurrency } from "../../utils/helpers";
// import { getCurrentQuantityById } from "./cartSlice";
import DeleteItem from "./DeleteItem";
import UpdateItemQuantity from "./UpdateItemQuantity";

function CartItem({ item }) {
  const { pizzaId, name, quantity, totalPrice } = item;
  // const currentQuantity = useSelector(getCurrentQuantityById(pizzaId));
  const currentQuantity = "";

  return (
    <li className="sm:flex sm:items-center sm:justify-between py-3">
      <p className="mb-1 sm:mb-0">
        {quantity}&times; {name}
      </p>
      <div className="flex items-center justify-between sm:gap-6">
        <p className="text-sm font-bold">{formatCurrency(totalPrice)}</p>
        <div className="flex items-center gap-3 justify-end">
          <UpdateItemQuantity
            pizzaId={pizzaId}
            currentQuantity={currentQuantity}
          />
          <DeleteItem pizzaId={pizzaId} />
        </div>
      </div>
    </li>
  );
}

export default CartItem;
