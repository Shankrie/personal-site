import { render } from "@testing-library/react";
import { List } from "./List";

describe("List", () => {
  it("renders ordered list when 'ordered' flag is true", () => {
    const children = "Lorem ipsum";

    const { container } = render(<List ordered>{children}</List>);

    const listElement = container.querySelector("ol");

    expect(listElement).toBeInTheDocument();
    expect(listElement).toHaveTextContent(children);
  });

  it("renders unordered list when 'ordered' flag is false", () => {
    const children = "Lorem ipsum";

    const { container } = render(<List ordered={false}>{children}</List>);

    const listElement = container.querySelector("ul");

    expect(listElement).toBeInTheDocument();
    expect(listElement).toHaveTextContent(children);
  });
});
