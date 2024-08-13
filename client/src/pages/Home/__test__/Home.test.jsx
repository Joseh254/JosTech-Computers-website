import { getByRole, render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { MemoryRouter } from "react-router-dom";
import Home from "../Home";
describe("Home component", () => {
  it("render 17 links", () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>,
    );
    const links = screen.getAllByRole("link");
    expect(links).toHaveLength(18);
  });

  it("render a heading with the text  Welcome", () => {
    render(
      <MemoryRouter>
        {" "}
        <Home />{" "}
      </MemoryRouter>,
    );
    const heading = screen.getAllByRole("heading");
    expect(heading).toHaveLength(13);
  });
});
