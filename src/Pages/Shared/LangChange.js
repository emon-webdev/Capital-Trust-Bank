import React, { useEffect, useState } from "react";
const LangChange = () => {
  const [getLocalLang, setGetLocalLang] = useState("en");
  useEffect(() => {
    setGetLocalLang(localStorage.getItem("i18nextLng"));
  }, []);
  const changeLang = (e) => {
    const lanKey = e.target.value;
    let url = `${window.location.origin}${window.location.pathname}?lng=${lanKey}`;
    window.location.replace(url);
  };

  console.log(getLocalLang);

return (
    <div className="change-lang">
      <select
        onChange={changeLang}
        defaultValue={getLocalLang}
        className="bg-none lang-select"
      >
        <option value="en">English</option>
        <option value="bn">Bangla</option>
        <option value="ar">Arabic</option>
        <option value="hi">Hindi</option>
      </select>
    </div>
  );
};

export default LangChange;
