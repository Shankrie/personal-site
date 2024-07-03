import { render, screen } from "@testing-library/react";
import { CopyButton } from "./CopyButton";

describe("CopyButton", () => {
  it("copies text and displays popup when button is clicked", async () => {
    const content = "Lorem ipsum";
    const title = "Click to copy";
    const writeTextMock = jest.spyOn(navigator.clipboard, "writeText");

    render(<CopyButton content={content} title={title} />);

    expect(screen.queryByRole("status")).not.toBeInTheDocument();

    screen.getByTitle(title).click();

    expect(await screen.findByRole("status")).toBeInTheDocument();
    expect(writeTextMock).toHaveBeenCalledWith(content);
  });
});
