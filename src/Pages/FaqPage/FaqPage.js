import {
  Accordion,
  AccordionButton, AccordionIcon, AccordionItem, AccordionPanel,
  Box
} from "@chakra-ui/react";
import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import logo from "../../assets/faq/faqImage.png";
import DynamicBanner from "../Shared/DynamicBanner/DynamicBanner";
import "./FaqPage.css";

const FaqPage = () => {

  const { t } = useTranslation();


  return (
    <div>
      <DynamicBanner name={"FAQ"}></DynamicBanner>
      <div className="container my-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 bg-faq p-5">
        {/* faq image  */}
        <div>
          <img src={logo} alt="" />
        </div>
        {/* fag detail  */}
        <div>
          <h1 className="text-4xl font-semibold mb-3">
            {t("Frequently_title")}
          </h1>
          <p>{t("freq_subtitle")}</p>
          {/* Accordian  */}
          <div className="my-5">
            <Accordion defaultIndex={[0]} allowMultiple className="grid gap-5">
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box
                      as="span"
                      flex="1"
                      textAlign="left"
                      className="font-bold"
                    >
                      What is the minimum balance?
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  Rationally encounter consequences that are extremely painful
                  again there anyone who loves or pursues desire.
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box
                      as="span"
                      flex="1"
                      textAlign="left"
                      className="font-bold"
                    >
                      What is the rate of interest?
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  There anyone who loves or pursues desire rationally encounter
                  consequences that are extremely painful again .
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box
                      as="span"
                      flex="1"
                      textAlign="left"
                      className="font-bold"
                    >
                      When will I receive my account statement?
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  Consequences that are extremely painful again there anyone
                  rationally encounter who loves or pursues desire.
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box
                      as="span"
                      flex="1"
                      textAlign="left"
                      className="font-bold"
                    >
                      Can I use any branch across India?
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  Extremely painful again there anyone who rationally encounter
                  consequences that are loves or pursues desire.
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box
                      as="span"
                      flex="1"
                      textAlign="left"
                      className="font-bold"
                    >
                      How safe/secure is our net banking a/c?
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  Anyone who loves or pursues desire rationally encounter
                  consequences that are extremely painful again there .
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box
                      as="span"
                      flex="1"
                      textAlign="left"
                      className="font-bold"
                    >
                      How you safe/secure is our net banking a/c?
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  Pursues desire rationally encounter consequences that are
                  anyone who loves or extremely painful again there .
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box
                      as="span"
                      flex="1"
                      textAlign="left"
                      className="font-bold"
                    >
                      who loves or extremely painful again there?
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  Anyone who loves or extremely painful again there pursues
                  desire rationally encounter consequences that are.
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box
                      as="span"
                      flex="1"
                      textAlign="left"
                      className="font-bold"
                    >
                      Encounter who loves or pursues desire
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  That are extremely painful again there anyone rationally
                  encounter who loves or pursues desire consequences .
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </div>
          {/* footer  */}
          <div>
            <span>
              ✌️ By using question you to get{" "}
              <Link className="text-blue-600">Any Information</Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaqPage;
