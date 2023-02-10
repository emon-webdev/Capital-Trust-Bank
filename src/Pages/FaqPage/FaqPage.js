import { Accordion, AccordionButton, AccordionItem,AccordionIcon,AccordionPanel, Box } from "@chakra-ui/react";
import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import logo from "../../assets/faq/faqImage.png"
import DynamicBanner from "../Shared/DynamicBanner/DynamicBanner";
import "./FaqPage.css"


const FaqPage = () => {
  const {t} = useTranslation()
  return (
 <div>
  <DynamicBanner name={"FAQ"}></DynamicBanner>
   <div className="container my-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 bg-faq p-5">
    {/* faq image  */}
    <div>
        <img src={logo} alt=""/>
    </div>
    {/* fag detail  */}
    <div>
        <h1 className="text-4xl font-semibold mb-3"> {t("Frequently_title")}</h1>
<p>{t("freq_subtitle")}</p>
{/* Accordian  */}
<div className="my-5">
<Accordion defaultIndex={[0]} allowMultiple className="grid gap-5">
  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left' className="font-bold">
        {t("faq_1q")}
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    {t("faq_1q_ans")}
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left' className="font-bold">
        {t('faq_2q')}
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
   
    {t('faq_2q_ans')}

    </AccordionPanel>
  </AccordionItem>

  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left' className="font-bold">
        {t('faq_3q')}
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    {t('faq_3q_ans')}
    </AccordionPanel>
  </AccordionItem>


  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left' className="font-bold">
        {t('faq_4q')}
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    {t('faq_4q_ans')}
    </AccordionPanel>
  </AccordionItem>


  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left' className="font-bold">
{t('faq_5q')}
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    {t('faq_5q_ans')}
    </AccordionPanel>
  </AccordionItem>


  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left' className="font-bold">
{t('faq_6q')}
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    {t('faq_6q_ans')}
    </AccordionPanel>
  </AccordionItem>


  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left' className="font-bold">
{t('faq_7q')}
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    {t('faq_7q_ans')}
    </AccordionPanel>
  </AccordionItem>


  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left' className="font-bold">
{t('faq_8q')}
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    {t('faq_8q_ans')}
    </AccordionPanel>
  </AccordionItem>


</Accordion>
</div>
{/* footer  */}
<div>
    <span>✌️ {t('faq_footer_txt_01')} <Link className="text-blue-600">{t("faq_footer_txt_02")}</Link></span>
</div>
    </div>
  </div>
 </div>
  );
};

export default FaqPage;
