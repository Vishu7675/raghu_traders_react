"use client"; // <-- Add this line

import { Provider } from "react-redux";
import { store } from "../store/store";

export function Providers({ children }) {
  return <Provider store={store}>{children}</Provider>;
}
