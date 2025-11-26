import type { ReactNode } from "react";
import { Route, Routes } from "react-router"
import { NotFound } from "./components/NotFound";

interface Props {
  children: ReactNode;
}

export const RoutesWithNotFound = ({ children }: Props) => {
  return (
    <Routes>
      {children}
      <Route path="/*" element={<NotFound/>} />
    </Routes>
  )
}