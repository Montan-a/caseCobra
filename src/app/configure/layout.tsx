import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Providers from "@/components/Provider";
import Steps from "@/components/Steps";
import { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <MaxWidthWrapper className="flex-1 flex flex-col">
      <Steps />
      <Providers>{children}</Providers>
    </MaxWidthWrapper>
  );
};

export default Layout;
