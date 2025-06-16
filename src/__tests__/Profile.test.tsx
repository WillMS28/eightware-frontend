import { render, screen, waitFor } from "@testing-library/react";
import ProfilePage from "@/app/profile/page";
import { AppRouterContext } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { useUser } from "@/hooks/useUser";

const mockPush = jest.fn();

jest.mock("@/hooks/useUser", () => ({
  useUser: jest.fn(() => ({
    data: { email: "test@example.com" },
    isLoading: false,
    error: null,
  })),
}));

jest.mock("@/hooks/useLogout", () => ({
  useLogout: jest.fn(() => ({
    logout: jest.fn(),
  })),
}));

// Mock do useRouter do app router
jest.mock("next/navigation", () => ({
  useRouter: () => ({
    push: mockPush,
  }),
}));

describe("ProfilePage", () => {
  beforeEach(() => {
    mockPush.mockClear();
  });

  it("renders user email", async () => {
    render(
      <AppRouterContext.Provider value={{ push: mockPush } as any}>
        <ProfilePage />
      </AppRouterContext.Provider>
    );

    expect(
      await screen.findByText(/welcome, test@example.com/i)
    ).toBeInTheDocument();
  });

  it("redirects to /unauthorized on error", async () => {
    // Mocka o useUser para simular erro
    (useUser as jest.Mock).mockReturnValueOnce({
      data: null,
      isLoading: false,
      error: new Error("Unauthorized"),
    });

    render(
      <AppRouterContext.Provider value={{ push: mockPush } as any}>
        <ProfilePage />
      </AppRouterContext.Provider>
    );

    await waitFor(() => {
      expect(mockPush).toHaveBeenCalledWith("/unauthorized");
    });
  });
});
