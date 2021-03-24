import { Link } from "react-router-dom";
export default function Layout({ children }) {
  return (
    <>
      <div className="px-6 py-6 min-h-screen bg-light-green-primary pt-10">
        <div className="flex  mb-4 justify-start mx-auto lg:max-w-screen-lg md:max-w-screen-md">
          <header className="border-2 border-black rounded-md w-1/4 p-1">
            <Link to="/">
              <p>Home</p>
            </Link>
          </header>
        </div>

        {children}
      </div>
    </>
  );
}
