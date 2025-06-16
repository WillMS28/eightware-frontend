import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import * as useAuthModule from "@/hooks/useAuth";
import { useRouter } from "next/router";
import { SignupForm } from "@/components/signup-form";

jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}));

describe("SignupForm", () => {
  const mockSignup = jest.fn();
  const mockPush = jest.fn();

  beforeEach(() => {
    jest.spyOn(useAuthModule, "useAuth").mockReturnValue({
      login: jest.fn(),
      signup: mockSignup,
      isLoading: false,
      isError: false,
    });

    (useRouter as jest.Mock).mockReturnValue({
      push: mockPush,
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("renders the form inputs and buttons", () => {
    render(<SignupForm />);
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/^password$/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/confirm password/i)).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /create account/i })
    ).toBeInTheDocument();
  });

  it("calls signup function on form submit with correct data", async () => {
    render(<SignupForm />);

    const emailInput = screen.getByLabelText(/email/i);
    const passwordInput = screen.getByLabelText(/^password$/i);
    const confirmPasswordInput = screen.getByLabelText(/confirm password/i);
    const submitButton = screen.getByRole("button", {
      name: /create account/i,
    });

    await userEvent.type(emailInput, "newuser@example.com");
    await userEvent.type(passwordInput, "mypassword123");
    await userEvent.type(confirmPasswordInput, "mypassword123");

    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(mockSignup).toHaveBeenCalledWith({
        email: "newuser@example.com",
        password: "mypassword123",
        password_confirmation: "mypassword123",
      });
    });
  });
});
