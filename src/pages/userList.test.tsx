import React from "react";
import { render, waitFor, screen } from "@testing-library/react";
import UserList from "./userList";

const axios = require("axios");

jest.mock("axios");

const mockedAxios = axios as jest.Mocked<typeof axios>;

describe("UserList component", () => {
  test("renders user list correctly", async () => {
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

    mockedAxios.get.mockResolvedValueOnce(mockApiResponse);

    render(<UserList />);

    await waitFor(() => {
      expect(axios.get).toHaveBeenCalledTimes(1);
    });

    expect(screen.getByText("User List")).toBeInTheDocument();

    const idColumnHeaders = screen.getAllByText("ID");
    expect(idColumnHeaders).toHaveLength(1);

    expect(screen.getByText("John")).toBeInTheDocument();
    expect(screen.getByText("Doe")).toBeInTheDocument();
    expect(screen.getByText("john@example.com")).toBeInTheDocument();
    expect(screen.getByAltText("Avatar of John Doe")).toBeInTheDocument();
  });

  test("renders loader while fetching data", async () => {
    mockedAxios.get.mockImplementationOnce(() => new Promise(() => {}));

    render(<UserList />);

    expect(screen.getByTestId("loader")).toBeInTheDocument();
  });
});
