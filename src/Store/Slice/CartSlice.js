import { createSlice, current } from "@reduxjs/toolkit";

const items=localStorage.getItem('cartItems')!==null?JSON.parse(localStorage.getItem('cartItems')):[];
const totalQuantity=localStorage.getItem('totalQuantity')!==null?JSON.parse(localStorage.getItem('totalQuantity')):0;
const totalAmount=localStorage.getItem('totalAmount')!==null?JSON.parse(localStorage.getItem('totalAmount')):0;

const setItem = (items, totalQuantity, totalAmount) => {
  localStorage.setItem("cartItems", JSON.stringify(items));
  localStorage.setItem("totalQuantity", JSON.stringify(totalQuantity));
  localStorage.setItem("totalAmount", JSON.stringify(totalAmount));
};

const initialState = {
  cartItems: items,
  totalQuantity:totalQuantity,
  totalAmount: totalAmount,
  isOpen: false,
};

const cartSlice = createSlice({
  name: "Cart",
  initialState,
  reducers: {
    addItem(state, action) {
      // console.log(action);
      const newItem = action.payload;
      const existingItem = state.cartItems.find(
        (item) => item.id === newItem.id
      );
      if (!existingItem) {
        state.cartItems.push({
          id: newItem.id,
          title: newItem.title,
          image01: newItem.image01,
          price: newItem.price,
          quantity: 1,
          totalprice: newItem.price,
        });

        // other Method
        // let clonedItem = {...newItem };
        //  clonedItem.quantity =1;
        //  state.totalQuantity +=clonedItem.quantity;
        //  state.totalAmount+= clonedItem.price;
        //  state.cartItems.push(clonedItem);
      } else {
        existingItem.quantity++;
        existingItem.totalprice += newItem.price;
      }
      state.totalQuantity = state.cartItems.length;
      console.log(current(state.cartItems));

      state.totalAmount = state.cartItems.reduce(
        (total, item) => total + Number(item.price) * Number(item.quantity),
        0
      );

      setItem(
        state.cartItems.map((item) => item),
        state.totalQuantity,
        state.totalAmount
      );
      return state;
    },
    removeItem(state, action) {
      const newItem = action.payload;
      const existingItem = state.cartItems.find(
        (item) => item.id === newItem.id
      );

      // state.totalQuantity--;

      if (!existingItem) {
        state.cartItems.pop({
          id: newItem.id,
          title: newItem.title,
          image01: newItem.image01,
          price: newItem.price,
          quantity: 1,
          totalprice: newItem.price,
        });
      } else {
        existingItem.quantity--;
        existingItem.totalprice -= newItem.price;
      }
      // state.totalQuantity = state.cartItems.length;
      // console.log(current(state.cartItems));
      state.totalAmount = state.cartItems.reduce(
        (total, item) => total + Number(item.price) * Number(item.quantity),
        0
      );
      setItem(
        state.cartItems.map((item) => item),
        state.totalQuantity,
        state.totalAmount
      );

      return state;
    },
    deleteItem(state, action) {
      const newItem = action.payload;
      console.log(newItem.id);
      const existingItem = state.cartItems.find(
        (item) => item.id === newItem.id
      );

      if (existingItem) {
        state.cartItems = state.cartItems.filter(
          (item) => item.id !== newItem.id
        );
        state.totalQuantity--;
        // state.totalQuantity=state.totalQuantity-existingItem.totalQuantity
      }

      // if (!existingItem) {
      //   state.cartItems.pop({
      //     id: newItem.id,
      //     title: newItem.title,
      //     image01: newItem.image01,
      //     price: newItem.price,
      //     quantity: 1,
      //     totalprice: newItem.price,
      //   });
      // } else {
      //   existingItem.quantity--;
      //   existingItem.totalprice -= newItem.price;
      // }
      // state.totalQuantity = state.cartItems.length;
      // console.log(current(state.cartItems));
      state.totalAmount = state.cartItems.reduce(
        (total, item) => total + Number(item.price) * Number(item.quantity),
        0
      );
      setItem(
        state.cartItems.map((item) => item),
        state.totalQuantity,
        state.totalAmount
      );

      return state;
    },
    smenu(state, action) {
      state.isOpen = !state.isOpen;
      return state;
    },
  },
});
export const cartAction = cartSlice.actions;
export default cartSlice;
