import { Navigation } from "../Navigation/Navigation";

export const Header = () => {
  return (
    <header className="fixed flex justify-center items-center w-full bg-primary py-4 px-[20px] z-50">
      <div className="container flex w-full">
        <Navigation />
      </div>
    </header>
  );
};
