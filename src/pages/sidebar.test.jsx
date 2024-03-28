import React from "react";
import { render, screen } from "@testing-library/react";
import Sidebar from "./sidebar";

describe("Sidebar component", () => {
  test("renders sidebar with correct content and styles", () => {
    // Render the Sidebar component
    render(<Sidebar />);

    // Check if the sidebar container element exists and has the correct class
    const sidebarContainer = screen.getByTestId("sidebar-container");
    expect(sidebarContainer).toBeInTheDocument();
    expect(sidebarContainer).toHaveClass("custom-sidebar-bg");

    // Check if the sidebar content exists
    const sidebarContent = screen.getByText("User");
    expect(sidebarContent).toBeInTheDocument();

    // Optionally, test other styles if they are critical to the component's functionality
    // Check if the sidebar has the correct background color
    expect(sidebarContainer).toHaveStyle({ backgroundColor: "#e7e7e7" });

    // Check if the sidebar has the correct width
    expect(sidebarContainer).toHaveStyle({ width: "200px" });
  });
});
