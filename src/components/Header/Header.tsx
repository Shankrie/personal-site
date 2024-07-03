import { ProfileInfo } from "@components/ProfileInfo/ProfileInfo";
import { GitHubIcon } from "@icons/GitHubIcon/GitHubIcon";
import { LinkedInIcon } from "@icons/LinkedInIcon/LinkedInIcon";
import { PrintIcon } from "@icons/PrintIcon/PrintIcon";
import {
  actionLabelCss,
  headerCss,
  linkMenuContainerCss,
  menuContainerCss,
} from "./Header.css";
import { Button } from "@components/Button/Button";
import { PrintHidden } from "@components/PrintHidden/PrintHidden";
import { Link } from "@components/Link/Link";
import { vars } from "@style/theme.css";
import { useTranslation } from "react-i18next";

export const Header = () => {
  const { t } = useTranslation();

  const iconSize = 17;
  const iconColor = vars.color.text;

  return (
    <header className={headerCss}>
      <ProfileInfo />

      <div className={menuContainerCss}>
        <div className={linkMenuContainerCss}>
          <Link
            href="https://www.linkedin.com/in/henrikas-jasi%C5%ABnas-b048a3125/"
            target="_blank"
          >
            <span className={actionLabelCss}>
              <LinkedInIcon fill={iconColor} size={iconSize} />
              LinkedIn
            </span>
          </Link>
          <Link href="https://github.com/Shankrie" target="_blank">
            <span className={actionLabelCss}>
              <GitHubIcon fill={iconColor} size={iconSize} />
              GitHub
            </span>
          </Link>
        </div>
        <PrintHidden>
          <div>
            <Button onClick={() => window.print()}>
              <span className={actionLabelCss}>
                <PrintIcon fill={iconColor} size={iconSize} />
                {t("printSave")}
              </span>
            </Button>
          </div>
        </PrintHidden>
      </div>
    </header>
  );
};
