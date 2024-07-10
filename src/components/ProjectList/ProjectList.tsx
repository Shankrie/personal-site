import { Link } from "@components/Link/Link";
import { List } from "@components/List/List";
import { ListItem } from "@components/ListItem/ListItem";
import { useTranslation } from "react-i18next";

export const ProjectList = () => {
  const { t } = useTranslation();

  return (
    <List>
      <ListItem>
        <Link href="https://emojitosvg.com" target="_blank">
          {t("emojiToSvg")}
        </Link>{" "}
        - {t("emojiToSvgDescription")}
      </ListItem>
    </List>
  );
};
