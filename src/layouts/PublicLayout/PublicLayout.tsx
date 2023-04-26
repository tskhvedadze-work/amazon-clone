import { Header } from "./Header";
import { Footer } from "./Footer";

import { SMainContainer } from "@src/components/SMainContainer";
import { SPublicLayoutContainerWrapper } from "./SPublicLayout.styled";

import { Outlet } from "react-router-dom";

export function PublicLayout() {
  return (
    <div>
      <Header />
      <SPublicLayoutContainerWrapper>
        <SMainContainer>
          <Outlet />
        </SMainContainer>
      </SPublicLayoutContainerWrapper>
      <Footer />
    </div>
  );
}
