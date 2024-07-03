import { ReactNode } from "react";
import {
  descriptionCss,
  headerCss,
  logoCss,
  logoImageCss,
} from "./CompanyProfile.css";
import { sprinkles } from "@style/sprinkles.css";
import { useTranslation } from "react-i18next";

type Props = {
  companyLogoUrl: string;
  companyName: string;
  subtitle: ReactNode;
  description?: ReactNode;
};

export const CompanyProfile = ({
  companyLogoUrl,
  companyName,
  subtitle,
  description,
}: Props) => {
  const { t } = useTranslation();

  return (
    <div>
      <div className={headerCss}>
        <div className={logoCss}>
          <img
            className={logoImageCss}
            src={companyLogoUrl}
            alt={t("companyLogo", { companyName })}
          />
        </div>
        <div>
          <div className={sprinkles({ fontWeight: "bold" })}>{companyName}</div>
          <div>{subtitle}</div>
        </div>
      </div>
      <div className={descriptionCss}>{description}</div>
    </div>
  );
};
