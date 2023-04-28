import { Outlet } from "react-router-dom";

import { SAuthLayoutContent } from "./SAuthLayout.styled";
import { SMainContainer } from "@src/components/SMainContainer";

import { Header } from "./Header";
import { Wallpaper } from "./Wallpaper";

export function AuthLayout() {
  return (
    <SMainContainer>
      <Header />
      <SAuthLayoutContent>
        <Outlet />
        <Wallpaper />
      </SAuthLayoutContent>
    </SMainContainer>
  );
}
