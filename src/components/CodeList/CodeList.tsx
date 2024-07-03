import { Link } from "@components/Link/Link";
import { List } from "@components/List/List";
import { ListItem } from "@components/ListItem/ListItem";
import { useTranslation } from "react-i18next";

export const CodeList = () => {
  const { t } = useTranslation();

  return (
    <List>
      <ListItem>{t("personalSite")}</ListItem>
      <ListItem>
        <Link href="https://github.com/chakra-ui/zag/pull/881" target="_blank">
          {t("bugInChakra")}
        </Link>
      </ListItem>
    </List>
  );
};