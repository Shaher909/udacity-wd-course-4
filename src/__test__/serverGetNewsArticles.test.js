const { getNewsArticles } = require("../server/index");

describe("Articles Fetching API Integration", () => {
  test("should return an array of articles", async () => {
    const inputTitle = "Squid";
    const noOfStories = 1;
    const language = "en";

    const result = await getNewsArticles(inputTitle, noOfStories, language);

    const expectedKeys = {
      title: expect.any(String),
      source: expect.any(String),
      permalink: expect.any(String),
      hashtags: expect.any(Array),
    };

    expect(result).toEqual(
      expect.arrayContaining([expect.objectContaining(expectedKeys)])
    );
  });
});
