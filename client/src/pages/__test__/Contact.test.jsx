import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Contact from "../Contact/Contact";
import '@testing-library/jest-dom';

import '@testing-library/jest-dom/extend-expect';

describe("Contact Component", () => {
  it("renders the Contact component correctly", () => {
    render(<Contact />);

    // Check if headings are present
    expect(screen.getByRole('heading', { name: /Get In Touch/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /Talk to sales/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /Contact customer support/i })).toBeInTheDocument();

    // Check if form elements are present
    expect(screen.getByRole('textbox', { name: /First Name/i })).toBeInTheDocument();
    expect(screen.getByRole('textbox', { name: /Last Name/i })).toBeInTheDocument();
    expect(screen.getByRole('textbox', { name: /Email/i })).toBeInTheDocument();
    expect(screen.getByRole('textbox', { name: /Location/i })).toBeInTheDocument();
    expect(screen.getByRole('textbox', { name: /Phone Number/i })).toBeInTheDocument();
    expect(screen.getByRole('textbox', { name: /Subject/i })).toBeInTheDocument();
    expect(screen.getByRole('textbox', { name: /Insert your message here/i })).toBeInTheDocument();

    // Check if the submit button is present
    expect(screen.getByRole('button', { name: /Send message/i })).toBeInTheDocument();
  });

  it("should submit the form when valid data is entered", () => {
    render(<Contact />);

    fireEvent.change(screen.getByRole('textbox', { name: /First Name/i }), { target: { value: 'John' } });
    fireEvent.change(screen.getByRole('textbox', { name: /Last Name/i }), { target: { value: 'Doe' } });
    fireEvent.change(screen.getByRole('textbox', { name: /Email/i }), { target: { value: 'john.doe@example.com' } });
    fireEvent.change(screen.getByRole('textbox', { name: /Location/i }), { target: { value: 'Nairobi' } });
    fireEvent.change(screen.getByRole('textbox', { name: /Phone Number/i }), { target: { value: '0712345678' } });
    fireEvent.change(screen.getByRole('textbox', { name: /Subject/i }), { target: { value: 'Inquiry' } });
    fireEvent.change(screen.getByRole('textbox', { name: /Insert your message here/i }), { target: { value: 'Hello, I have a question.' } });

    fireEvent.click(screen.getByRole('button', { name: /Send message/i }));

    // Optionally, you can check if certain functions like `handleSubmit` are called or check for a toast message
  });

  it("should show validation errors when required fields are empty", () => {
    render(<Contact />);

    fireEvent.click(screen.getByRole('button', { name: /Send message/i }));

    // Check for validation messages
    expect(screen.getByText(/First name is required/i)).toBeInTheDocument();
    expect(screen.getByText(/Last name is required/i)).toBeInTheDocument();
    expect(screen.getByText(/Email is required/i)).toBeInTheDocument();
    expect(screen.getByText(/Location is required/i)).toBeInTheDocument();
    expect(screen.getByText(/Phone number is required/i)).toBeInTheDocument();
    expect(screen.getByText(/Please include a subject/i)).toBeInTheDocument();
    expect(screen.getByText(/Include a message/i)).toBeInTheDocument();
  });
});
