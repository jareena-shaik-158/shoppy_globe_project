import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice"; // Ensure cartSlice.js exists

// ✅ Create Redux Store
const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

// ✅ Export Store Correctly
export default store; // Make sure this line is present
