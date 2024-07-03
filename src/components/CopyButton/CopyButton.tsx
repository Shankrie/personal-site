import { useState } from "react";
import {
  linkButtonCss,
  popupCss,
  popupDurationInMilliseconds,
} from "./CopyButton.css";
import { LinkIcon } from "@icons/LinkIcon/LinkIcon";
import { t } from "i18next";

type Props = {
  content: string;
  title?: string;
  onFocus?: () => void;
  onBlur?: () => void;
};

export const CopyButton = ({ content, title, onFocus, onBlur }: Props) => {
  const [popupVisible, setPopupVisible] = useState(false);

  return (
    <button
      title={title}
      className={linkButtonCss}
      onClick={async () => {
        if (!popupVisible) {
          await navigator.clipboard.writeText(content);

          setPopupVisible(true);
          setTimeout(() => setPopupVisible(false), popupDurationInMilliseconds);
        }
      }}
      onFocus={onFocus}
      onBlur={onBlur}
    >
      <LinkIcon size={20} />
      {popupVisible && (
        <div className={popupCss} role="status" aria-live="polite">
          {t("copied")}
        </div>
      )}
    </button>
  );
};
