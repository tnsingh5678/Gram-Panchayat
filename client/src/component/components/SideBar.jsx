import { useState } from "react";
import Home from "../../Home";
import { Link } from "react-router-dom";


export default function SideBar({ menuItems }) {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="size-6"
        onClick={() => setToggle(!toggle)}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
        />
      </svg>
      {toggle ? (
        <div className="h-screen grid grid-cols-7 overflow-auto">
          <div className="h-screen text-center bg-orange-400 hover:bg-green-500">
            {menuItems.map((item) => (
              <li key={item.id} className="hover:bg-slate-400">
                <Link
                  to={{
                    pathname: item.path,
                    state: { rawData: `Navigating to ${item.name}` },
                  }}
                >
                  {item.name}
                </Link>
              </li>
            ))}
            <div className="text-center">hello</div>
          </div>
          <div className="col-span-6">
            <Home />
          </div>
        </div>
      ) : (
        <div>
          <Home />
        </div>
      )}
    </>
  );
}
