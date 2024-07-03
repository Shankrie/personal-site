import { CompanyProfile } from "@components/CompanyProfile/CompanyProfile";
import vuLogo from "@assets/vu-logo.jpg";
import { TimeLine } from "@components/TimeLine/TimeLine";
import { useTranslation } from "react-i18next";

export const Education = () => {
  const { t } = useTranslation();

  return (
    <TimeLine
      items={[
        <CompanyProfile
          companyLogoUrl={vuLogo}
          companyName={"Vilnius University"}
          subtitle={
            <>
              {t("degreeTitle")}
              <br />
              2013 - 2017
            </>
          }
        />,
      ]}
    />
  );
};
