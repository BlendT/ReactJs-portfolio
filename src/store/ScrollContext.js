import React, { useState } from "react";

const ScrollContext = React.createContext({
  isScrolled: false,
  handleOnScroll: () => {},
  scrollToBottom: () => {},
});

export const ScrollProvider = (props) => {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleOnScroll = () => {
    setIsScrolled(!isScrolled);
  };

  const scrollToBottom = () => {
    window.scrollTo({
      top: 510,
      left: 0,
      behavior: "smooth",
    });
    console.log("scroll", document.body.scrollTo(0, 50));
  };

  return (
    <ScrollContext.Provider
      value={{
        isScrolled: isScrolled,
        handleOnScroll: handleOnScroll,
        scrollToBottom: scrollToBottom,
      }}
    >
      {props.children}
    </ScrollContext.Provider>
  );
};

export default ScrollContext;
