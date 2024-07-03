import { render, screen } from "@testing-library/react";
import { Link } from "./Link";

describe("Link", () => {
  it("renders link", () => {
    render(<Link href="https://example.com">Lorem ipsum</Link>);

    expect(screen.getByRole("link")).toBeInTheDocument();
  });
});
