import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import LeadForm from "./LeadForm";

describe("LeadForm", () => {
  it("renders form elements correctly", () => {
    render(<LeadForm />);

    expect(screen.getByLabelText(/name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/phone/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /submit/i })).toBeInTheDocument();
  });

  it("validates required fields", async () => {
    render(<LeadForm />);

    const submitButton = screen.getByRole("button", { name: /submit/i });
    fireEvent.click(submitButton);

    expect(await screen.findByText(/name is required/i)).toBeInTheDocument();
    expect(await screen.findByText(/email is required/i)).toBeInTheDocument();
  });

  it("submits form with valid data", async () => {
    const onSubmit = vi.fn();
    render(<LeadForm onSubmit={onSubmit} />);

    fireEvent.change(screen.getByLabelText(/name/i), {
      target: { value: "John Doe" },
    });

    fireEvent.change(screen.getByLabelText(/email/i), {
      target: { value: "john@example.com" },
    });

    fireEvent.change(screen.getByLabelText(/phone/i), {
      target: { value: "1234567890" },
    });

    fireEvent.click(screen.getByRole("button", { name: /submit/i }));

    expect(onSubmit).toHaveBeenCalledWith({
      name: "John Doe",
      email: "john@example.com",
      phone: "1234567890",
    });
  });

  it("validates email format", async () => {
    render(<LeadForm />);

    fireEvent.change(screen.getByLabelText(/email/i), {
      target: { value: "invalid-email" },
    });

    fireEvent.click(screen.getByRole("button", { name: /submit/i }));

    expect(
      await screen.findByText(/invalid email format/i),
    ).toBeInTheDocument();
  });
});
