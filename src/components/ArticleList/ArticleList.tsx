import { Link } from "@components/Link/Link";
import { List } from "@components/List/List";
import { ListItem } from "@components/ListItem/ListItem";

export const ArticleList = () => {
  return (
    <List>
      <ListItem>
        <Link
          href="https://www.nfq.lt/blog-posts/how-to-improve-react-component-type-safety-with-typescript-generics"
          target="_blank"
        >
          How to improve React component type-safety with Typescript generics?
        </Link>
      </ListItem>
    </List>
  );
};
