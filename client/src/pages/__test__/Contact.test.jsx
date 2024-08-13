import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Contact from "../Contact/Contact";
import { describe, it, expect } from "vitest";

describe("Contact Component", () => {
  it("renders the Contact component correctly", () => {
    render(
      <MemoryRouter>
        <Contact />
      </MemoryRouter>,
    );
    expect(
      screen.getByRole("heading", { name: /Talk to sales/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: /Contact customer support/i }),
    ).toBeInTheDocument();
  });
});
