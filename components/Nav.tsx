import React from "react";
import { classnames } from "tailwindcss-classnames";
import Link from "next/link";

interface navProps {}

export const Nav: React.FC<navProps> = ({}) => {
  return (
    <nav className="flex items-center justify-between flex-wrap bg-blue p-6">
      <div className="container">
        <Link href="/">
          <a>
            <div className="flex items-center flex-shrink-0 text-white mr-6">
              <img
                className={classnames("rounded-full")}
                src="/face.png"
                width="54"
                height="54"
              />
              <span className="ml-5 font-semibold text-xl tracking-tight">
                Pair Programming Queue
              </span>
            </div>
          </a>
        </Link>
      </div>
    </nav>
  );
};
