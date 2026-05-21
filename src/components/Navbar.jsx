import React, { useState } from "react";
import { Link } from "react-router-dom";
import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-4 fixed top-0 z-20 bg-primary/95 backdrop-blur border-b border-border`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        {/* Logo + identity */}
        <Link
          to="/"
          className="flex items-center"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="Taj Sharma" className="w-8 h-9 object-contain" />
        </Link>

        {/* Desktop links */}
        <ul className="list-none hidden sm:flex flex-row gap-8">
          {navLinks.map((link) => (
            <li
              key={link.id}
              onClick={() => setActive(link.title)}
              className={`font-mono text-[13px] tracking-wide cursor-pointer transition-colors ${
                active === link.title
                  ? "text-accent"
                  : "text-text-secondary hover:text-text-primary"
              }`}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>

        {/* Mobile menu */}
        <div className="sm:hidden flex items-center">
          <button
            onClick={() => setToggle(!toggle)}
            className="p-1 text-text-secondary hover:text-text-primary transition-colors"
            aria-label="Toggle navigation"
          >
            {toggle ? (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            ) : (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <line x1="4" y1="6" x2="20" y2="6" />
                <line x1="4" y1="12" x2="20" y2="12" />
                <line x1="4" y1="18" x2="20" y2="18" />
              </svg>
            )}
          </button>

          {toggle && (
            <div className="absolute top-[65px] right-4 bg-surface border border-border rounded-xl p-5 min-w-[180px] shadow-card">
              <ul className="list-none flex flex-col gap-4">
                {navLinks.map((link) => (
                  <li
                    key={link.id}
                    onClick={() => {
                      setToggle(false);
                      setActive(link.title);
                    }}
                    className={`font-mono text-[13px] tracking-wide cursor-pointer transition-colors ${
                      active === link.title
                        ? "text-accent"
                        : "text-text-secondary hover:text-text-primary"
                    }`}
                  >
                    <a href={`#${link.id}`}>{link.title}</a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
