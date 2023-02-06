import { MenuItem, Select } from "@mui/material";
import React, { useState } from "react";
const LangChange = () => {
  const [localLang, setLocalLang] = useState("");
  const [getLocalLang, setGetLocalLang] = useState("");

  const changeLang = (e) => {
    const lanKey = e.target.value;
    const localSet = localStorage.setItem("Lang", lanKey);
    console.log(localSet);
    setLocalLang(localSet);
    let url = `${window.location.origin}${window.location.pathname}?lng=${lanKey}`;
    window.location.replace(url);
  };

  // useEffect(() => {
  //   console.log(localStorage.getItem("Lang"));
  // }, [localLang]);

  // console.log(localLang);

  return (
    <div className="change-lang">
      <Select
        onChange={changeLang}
        defaultValue="Language"
        className="bg-none lang-select"
      >
        <MenuItem value="Language">Language</MenuItem>
        <MenuItem value="en">English</MenuItem>
        <MenuItem value="bn">Bangla</MenuItem>
        <MenuItem value="ar">Arabic</MenuItem>
        <MenuItem value="hi">Hindi</MenuItem>
      </Select>
    </div>
  );
};

export default LangChange;
