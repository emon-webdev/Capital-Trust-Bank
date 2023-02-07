import { Select } from "@chakra-ui/react";
import React from "react";
import { useTranslation } from "react-i18next";
const LangChange = () => {
  const { t } = useTranslation();

  const changeLang = (e) => {
    const lanKey = e.target.value;
    let url = `${window.location.origin}${window.location.pathname}?lng=${lanKey}`;
    window.location.replace(url);
  };

  return (
    <div className="change-lang">
      <Select
        onChange={changeLang}
        defaultValue="en"
        className="bg-none lang-select"
      >
        <option value="en">{t("Language")}</option>
        <option value="en">English</option>
        <option value="bn">Bangla</option>
        <option value="ar">Arabic</option>
        <option value="hi">Hindi</option>
      </Select>
    </div>
  );
};

export default LangChange;
