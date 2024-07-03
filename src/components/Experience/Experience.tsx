import { CompanyProfile } from "@components/CompanyProfile/CompanyProfile";
import { TimeLine } from "@components/TimeLine/TimeLine";
import usbankLogo from "@assets/usbank-logo.jpg";
import nfqLogo from "@assets/nfq-logo.jpg";
import baLogo from "@assets/ba-logo.jpg";
import eisLogo from "@assets/eis-logo.jpg";
import { ListItem } from "@components/ListItem/ListItem";
import { Divider } from "@components/Divider/Divider";
import { List } from "@components/List/List";
import { useTranslation } from "react-i18next";

export const Experience = () => {
  const { t } = useTranslation();

  return (
    <TimeLine
      items={[
        <CompanyProfile
          companyLogoUrl={usbankLogo}
          companyName="U.S. Bank"
          subtitle={`2023 ${t("july")} - 2024 ${t("april")}`}
          description={
            <>
              {t("title")}: {t("seniorFrontendEngineer")}
              <br />
              {t("project")}: {t("administrativePosPanel")}
              <br />
              {t("techStack")}: React.js · TypeScript · Sass · Jest · Storybook
              <br />
              {t("responsibilities")}:
              <List>
                <ListItem>{t("usBankResposibility1")}</ListItem>
                <ListItem>{t("usBankResposibility2")}</ListItem>
                <ListItem>{t("usBankResposibility3")}</ListItem>
                <ListItem>{t("usBankResposibility4")}</ListItem>
              </List>
            </>
          }
        />,
        <CompanyProfile
          companyLogoUrl={nfqLogo}
          companyName="NFQ Technologies"
          subtitle={`2017 ${t("november")} - 2023 ${t("july")}`}
          description={
            <>
              {t("title")}: {t("midSeniorFrontendEngineer")}
              <br />
              {t("project")}: {t("startupInEcommerceLogistics")}
              <br />
              {t("duration")}: 2019 {t("november")} - 2023 {t("july")}
              <br />
              {t("techStack")}: React.js · TypeScript · Sass · Jest · Cypress ·
              Storybook
              <br />
              {t("responsibilities")}:
              <List>
                <ListItem>{t("nfqProject1Resposibility1")}</ListItem>
                <ListItem>{t("nfqProject1Resposibility2")}</ListItem>
                <ListItem>{t("nfqProject1Resposibility3")}</ListItem>
                <ListItem>{t("nfqProject1Resposibility4")}</ListItem>
                <ListItem>{t("nfqProject1Resposibility5")}</ListItem>
                <ListItem>{t("nfqProject1Resposibility6")}</ListItem>
              </List>
              <Divider />
              {t("title")}: {t("juniorFrontendEngineer")}
              <br />
              {t("project")}: {t("b2bEcommerceMarketplace")}
              <br />
              {t("duration")}: 2019 {t("january")} - 2019 {t("october")}
              <br />
              {t("techStack")}: Vue.js · TypeScript · Sass · Spryker
              <br />
              {t("responsibilities")}:
              <List>
                <ListItem>{t("nfqProject2Resposibility1")}</ListItem>
                <ListItem>{t("nfqProject2Resposibility2")}</ListItem>
                <ListItem>{t("nfqProject2Resposibility3")}</ListItem>
              </List>
              <Divider />
              {t("title")}: {t("juniorFrontendEngineer")}
              <br />
              {t("project")}: {t("startupInNoCodeApps")}
              <br />
              {t("duration")}: 2017 {t("november")} - 2018 {t("december")}
              <br />
              {t("techStack")}: AngularJS · Angular · TypeScript · Sass
              <br />
              {t("responsibilities")}:
              <List>
                <ListItem>{t("nfqProject3Resposibility1")}</ListItem>
                <ListItem>{t("nfqProject3Resposibility2")}</ListItem>
                <ListItem>{t("nfqProject3Resposibility3")}</ListItem>
                <ListItem>{t("nfqProject3Resposibility4")}</ListItem>
              </List>
            </>
          }
        />,
        <CompanyProfile
          companyLogoUrl={baLogo}
          companyName="Baltic Amadeus"
          subtitle={`2016 ${t("august")} - 2017 ${t("october")}`}
          description={
            <>
              {t("title")}: {t("juniorFrontendEngineer")}
              <br />
              {t("techStack")}: AngularJS
            </>
          }
        />,
        <CompanyProfile
          companyLogoUrl={eisLogo}
          companyName="EIS Group Lietuva"
          subtitle={`2015 ${t("june")} - 2015 ${t("august")}`}
          description={
            <>
              {t("title")}: {t("internBackend")}
              <br />
              {t("techStack")}: Java · Spring · Maven
            </>
          }
        />,
      ]}
    />
  );
};
