import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../typescript/hook";
import { fetchProducts } from "./ShoppingCartSlice";
import { incrementByAmount } from "./CounterSlice";

const ShoppingCartPage = () => {
  const dataProducts = useAppSelector((state) => state.shoppingCart);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);
  // const total = dataProducts?.reduce(
  //   (total, cur) => cur.price * cur.quantity + total,
  //   0
  // );

  return (
    <>
      <div className="grid grid-flow-row grid-cols-5 gap-x-5 gap-y-4 w-[1405px] mx-auto">
        {dataProducts?.map((item) => {
          return (
            <div
              key={item.id}
              className="p-2 relative flex flex-col space-y-5 items-center rounded-lg"
            >
              <div className="text-red-400 px-2 py-1 rounded-md bg-white  flex justify-evenly space-x-3">
                <div>{item.createdAt}</div>
                <div>{item.description}</div>
                <div> Author: {item.author}</div>
              </div>
              <div>name: {item.name}</div>
              <div>
                <img
                  src={item.thumbnail}
                  alt="image-product"
                  className="rounded-md"
                />
                <button onClick={() => dispatch(incrementByAmount(1))}>
                  Add
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ShoppingCartPage;
