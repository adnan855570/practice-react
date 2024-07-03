import { useEffect, useState } from "react";
import MenuItem from "./MenuItem";

const Cart = () => {
  const [firstItem, setFirstItem] = useState({
    name: "Biryani",
    quantity: 2,
  });
  useEffect(() => {
    setTimeout(() => {
setFirstItem(item => {
  return {
    ...item,
    quantity : 10
  }
});
    },1000)
  });
  return (
    <section>
      <h1>Cart</h1>
      <ul>
        <MenuItem item={firstItem} />
        <MenuItem
          item={{
            name: "qorma",
            quantity: 2,
          }}
        />
        <MenuItem
          item={{
            name: "Pulayo",
            quantity: 2,
          }}
        />
      </ul>
    </section>
  );
};

export default Cart;
