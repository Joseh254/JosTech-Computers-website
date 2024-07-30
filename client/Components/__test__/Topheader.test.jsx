import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Topheader from "../Topheader";
import { describe, it, expect } from "vitest";

describe("Topheader", () => {
  it("renders a header element", () => {
    render(
      <MemoryRouter>
        <Topheader />
      </MemoryRouter>,
    );
    const topheader = screen.getByRole("banner");
    expect(topheader).toBeInTheDocument();
  });
  it("renders a ");
});
