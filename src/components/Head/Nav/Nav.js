import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import CollapseButton from "../../../UI/CollapseButton/CollapseButton";
import classes from "./Nav.module.css";

const Nav = () => {
  const [visible, setVisible] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [match, setIsMatch] = useState({
    matches: window.matchMedia("(max-width: 927px)").matches,
  });

  useEffect(() => {
    const handler = (target) => {
      setIsMatch({ matches: target.matches });
    };
    window.matchMedia("(max-width: 927px)").addEventListener("change", handler);
  }, []);

  const toggleCollapse = (event) => {
    event.preventDefault();
    setIsCollapsed(!isCollapsed);
  };

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;

    if (scrolled > 40) {
      setVisible(true);
    } else if (scrolled <= 40) {
      setVisible(false);
    }
  };
  window.addEventListener("scroll", toggleVisible);

  const cssClasses = visible
    ? `${classes["nav-item"]} ${classes["nav-item-scrolled"]}`
    : classes["nav-item"];

  const navClass = visible
    ? `${classes.navLink} ${classes["navLink-scroll"]}`
    : classes.navLink;

  const buttonClass = visible
    ? `${classes["toggle-btn-collapse"]} ${classes["toggle-btn-scrolled"]}`
    : classes["toggle-btn-collapse"];

  return (
    <div className={cssClasses}>
      <h2>
        <span>Bl</span>endi
      </h2>
      {match.matches && (
        <CollapseButton
          onClick={toggleCollapse}
          isShown={isCollapsed}
          className={buttonClass}
          isScrolled={visible}
        ></CollapseButton>
      )}
      {!(match.matches && isCollapsed) && (
        <div className={classes["scroll-nav"]}>
          <header className={classes.cls}>
            <nav>
              <ul>
                <li>
                  <NavLink
                    to="/home"
                    className={({ isActive }) =>
                      isActive
                        ? `${navClass} ${classes["navLink-active"]}`
                        : navClass
                    }
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/about"
                    className={({ isActive }) =>
                      isActive
                        ? `${navClass} ${classes["navLink-active"]}`
                        : navClass
                    }
                  >
                    About
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/service"
                    className={({ isActive }) =>
                      isActive
                        ? `${navClass} ${classes["navLink-active"]}`
                        : navClass
                    }
                  >
                    Service
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/resume"
                    className={({ isActive }) =>
                      isActive
                        ? `${navClass} ${classes["navLink-active"]}`
                        : navClass
                    }
                  >
                    Resume
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/portfolio"
                    className={({ isActive }) =>
                      isActive
                        ? `${navClass} ${classes["navLink-active"]}`
                        : navClass
                    }
                  >
                    Portfolio
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/blog"
                    className={({ isActive }) =>
                      isActive
                        ? `${navClass} ${classes["navLink-active"]}`
                        : navClass
                    }
                  >
                    Blog
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/contact"
                    className={({ isActive }) =>
                      isActive
                        ? `${navClass} ${classes["navLink-active"]}`
                        : navClass
                    }
                  >
                    Contact
                  </NavLink>
                </li>
              </ul>
            </nav>
          </header>
        </div>
      )}
    </div>
  );
};

export default Nav;
