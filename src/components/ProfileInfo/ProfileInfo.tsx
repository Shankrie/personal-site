import photoUrl from "@assets/photo.jpg";
import {
  containerCss,
  imageContainerCss,
  imageCss,
  infoContainerCss,
  locationCss,
} from "./ProfileInfo.css";
import { PinIcon } from "@icons/PinIcon/PinIcon";
import { vars } from "@style/theme.css";
import { useTranslation } from "react-i18next";
import { Link } from "@components/Link/Link";
import { MailIcon } from "@icons/MailIcon/MailIcon";

export const ProfileInfo = () => {
  const { t } = useTranslation();

  return (
    <div className={containerCss}>
      <div className={imageContainerCss}>
        <img className={imageCss} src={photoUrl} alt={t("profilePicture")} />
      </div>

      <div className={infoContainerCss}>
        <h1>Henrikas Jasiūnas</h1>
        <h2>Frontend Engineer</h2>
        <div>
          <Link href="mailto:henrikas@outlook.com">
            <div className={locationCss}>
              <MailIcon fill={vars.color.text} size={16} /> henrikas@outlook.com
            </div>
          </Link>
          <div className={locationCss}>
            <PinIcon fill={vars.color.text} size={16} />
            Vilnius, Lithuania
          </div>
        </div>
      </div>
    </div>
  );
};
