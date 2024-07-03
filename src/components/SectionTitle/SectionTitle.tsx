import { sectionTitleCss } from "./SectionTitle.css";
import { useState } from "react";
import { CopyButton } from "@components/CopyButton/CopyButton";
import { useTranslation } from "react-i18next";

type Props = {
  id: string;
  title: string;
};

export const SectionTitle = ({ id, title }: Props) => {
  const { t } = useTranslation();
  const [titleHovered, setTitleHovered] = useState(false);
  const [copyButtonFocused, setCopyButtonFocused] = useState(false);

  return (
    <h3
      id={id}
      className={sectionTitleCss}
      onMouseEnter={() => setTitleHovered(true)}
      onMouseLeave={() => setTitleHovered(false)}
    >
      {title}
      <span style={{ opacity: titleHovered || copyButtonFocused ? 1 : 0 }}>
        <CopyButton
          content={`${location.protocol}${location.host}/#${id}`}
          title={t("copyLinkToSection")}
          onFocus={() => setCopyButtonFocused(true)}
          onBlur={() => setCopyButtonFocused(false)}
        />
      </span>
    </h3>
  );
};
