import { HomeNavigation } from "@src/views/HomeView/HomeNavigation";

import { HomeContent } from "./HomeContent";
import { SHomeView, SHomeMainSection } from "./SHomeView.styled";

export default function HomeView() {
  return (
    <SHomeView>
      <SHomeMainSection>
        <HomeNavigation />
        <HomeContent />
      </SHomeMainSection>
    </SHomeView>
  );
}
