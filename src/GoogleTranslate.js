import React, { useEffect } from "react";

// Google translate function and the display
const GoogleTranslate = () => {
  useEffect(() => {
    // in some cases, the google translate script adds a style to the opening html tag.
    // this added style disables scrolling.
    // the next 3 lines removes this added style in order to re-enable scrolling.
    if (window.document.scrollingElement.hasAttribute("style")) {
      window.document.scrollingElement.setAttribute("style", "");
    }
  });

  return (
    <div className="text-center py-5" id="google_translate_element"></div>
  );
};

export default GoogleTranslate;