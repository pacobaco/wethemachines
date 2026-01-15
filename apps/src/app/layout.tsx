import "../styles/globals.css";
import React, { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return <div className="app-layout">{children}</div>;
}
