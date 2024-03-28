import React from "react";
import { render, waitFor, screen } from "@testing-library/react";
import UserList from "./userList";

const axios = require("axios");

jest.mock("axios");

const mockedAxios = axios as jest.Mocked<typeof axios>;

describe("UserList component", () => {
  test("renders user list correctly", async () => {
    // Mock response data
    const mockApiResponse: any = {
      data: [
        {
          id: 1,
          first_name: "John",
          last_name: "Doe",
          email: "john@example.com",
          avatar: "avatar1.jpg",
        },
        {
          id: 2,
          first_name: "Jane",
          last_name: "Doe",
          email: "jane@example.com",
          avatar: "avatar2.jpg",
        },
      ],
    };

    // Mock axios.get to resolve with mockData
    mockedAxios.get.mockResolvedValueOnce(mockApiResponse);

    // Render UserList component
    render(<UserList />);

    // Wait for the user data to be loaded
    await waitFor(() => {
      expect(axios.get).toHaveBeenCalledTimes(1);
    });

    // Check if the header is rendered correctly
    expect(screen.getByText("User List")).toBeInTheDocument();

    // Check if the user list table is rendered correctly
    const idColumnHeaders = screen.getAllByText("ID");
    expect(idColumnHeaders).toHaveLength(1);

    // Check if the user data is rendered correctly
    expect(screen.getByText("John")).toBeInTheDocument();
    expect(screen.getByText("Doe")).toBeInTheDocument();
    expect(screen.getByText("john@example.com")).toBeInTheDocument();
    expect(screen.getByAltText("Avatar of John Doe")).toBeInTheDocument();
  });

  test("renders loader while fetching data", async () => {
    // Mock axios.get to simulate loading state
    mockedAxios.get.mockImplementationOnce(() => new Promise(() => {}));

    // Render UserList component
    render(<UserList />);

    // Check if loader is rendered
    expect(screen.getByTestId("loader")).toBeInTheDocument();
  });
});
