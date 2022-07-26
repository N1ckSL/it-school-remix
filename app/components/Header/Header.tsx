import { Navigation } from "../Navigation/Navigation";

export const Header = () => {
  return (
    <header className="fixed flex relative justify-center items-center w-full bg-primary">
      <div className="container flex w-full">
        <Navigation />
      </div>
    </header>
  );
};
