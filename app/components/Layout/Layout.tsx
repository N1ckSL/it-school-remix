import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";

type LayoutProps = {
  children: React.ReactNode;
};

export const Layout = (props: LayoutProps) => {
  return (
    <div className="container m-0 relative flex flex-col max-w-full min-w-screen">
      <Header />
      <main className="flex flex-col w-full px-[20px]">{props.children}</main>
      <Footer />
    </div>
  );
};
