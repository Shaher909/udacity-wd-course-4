import { renderToHtml } from "../client/js/helperFunctions";

describe("renderToHtml", () => {
  beforeEach(() => {
    document.body.innerHTML = `<!DOCTYPE html><div id="results"></div>`;
  });

  it("should render an unordered list for each story object", () => {
    const stories = [
      {
        title: "Test Story 1",
        source: "Source 1",
        permalink: "https://example.com/story1",
        hashtags: ["#tag1", "#tag2"],
      },
      {
        title: "Test Story 2",
        source: "Source 2",
        permalink: "https://example.com/story2",
        hashtags: ["#tag3"],
      },
    ];

    renderToHtml(stories);

    const resultsDiv = document.getElementById("results");
    expect(resultsDiv.querySelectorAll("ul").length).toBe(2); // Two <ul> elements

    // Check the content of the first <ul> (story 1)
    const firstUL = resultsDiv.querySelector("ul:nth-child(1)"); // First <ul>
    expect(firstUL.querySelector("li:nth-child(1)").textContent).toBe(
      "title: Test Story 1"
    );
    expect(firstUL.querySelector("li:nth-child(2)").textContent).toBe(
      "source: Source 1"
    );
    expect(firstUL.querySelector("li:nth-child(3) a").href).toBe(
      "https://example.com/story1"
    ); // Check link
    expect(firstUL.querySelector("li:nth-child(4) span").textContent).toBe(
      "#tag1, #tag2"
    );
  });

  it("should render a 'No stories found' message if the input is empty or null", () => {
    renderToHtml(null); // Test with null
    renderToHtml([]); // Test with an empty array
    renderToHtml(undefined); // Test with undefined

    const resultsDiv = document.getElementById("results");
    expect(resultsDiv.textContent).toBe("No stories found.");
  });
});
