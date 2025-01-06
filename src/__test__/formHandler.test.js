import { postData } from "../client/js/formHandler";
import { renderToHtml } from "../client/js/helperFunctions";

global.fetch = jest.fn(); // Mock the fetch function

// Mock renderToHtml
jest.mock("../client/js/helperFunctions", () => ({
  renderToHtml: jest.fn(),
}));

describe("postData function", () => {
  const mockUrl = "http://localhost:8000/submit";
  const mockDataRecord = {
    title: "Squid",
    noOfStories: 1,
    language: "en",
  };

  it("should call fetch with correct arguments and return server response", async () => {
    const mockResponse = [
      {
        title:
          "Black Ops 6 players baffled as new Squid Game event resets operator skins every game",
        source: "Dexerto.com",
        permalink:
          "https://www.dexerto.com/call-of-duty/black-ops-6-players-baffled-as-new-squid-game-event-resets-operator-skins-every-game-3022520/",
        hashtags: ["#BlackOps6", "#SquidGame", "#GamingNews"],
      },
    ];

    // Correctly mock fetch response
    fetch.mockResolvedValueOnce({
      ok: true, // Simulate HTTP success
      json: async () => mockResponse, // Mock JSON response
    });

    const result = await postData(mockUrl, mockDataRecord);

    // Assert fetch was called with correct arguments
    expect(fetch).toHaveBeenCalledWith(mockUrl, {
      method: "POST",
      credentials: "same-origin",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(mockDataRecord),
    });

    // Validate response structure to contain those fields
    const expectedStructure = {
      title: "string",
      source: "string",
      permalink: "string",
      hashtags: "object", // or just an array
    };

    const isValidStructure = validateStructure(result[0], expectedStructure);
    expect(isValidStructure).toBe(true);
  });
});

// Utility function to validate structure
const validateStructure = (data, expectedStructure) => {
  return Object.keys(expectedStructure).every((key) => key in data);
};
