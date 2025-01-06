const renderToHtml = (storiesObject) => {
  const resultsDiv = document.getElementById("results");
  resultsDiv.innerHTML = ""; // Clear previous results

  if (!storiesObject || storiesObject.length === 0) {
    const noResultsMessage = document.createElement("p");
    noResultsMessage.textContent = "No stories found.";
    resultsDiv.appendChild(noResultsMessage);
    return; // Exit early if no stories
  }

  storiesObject.forEach((story) => {
    const ul = document.createElement("ul");

    for (const key in story) {
      if (story.hasOwnProperty(key)) {
        const li = document.createElement("li");

        if (key === "permalink") {
          const a = document.createElement("a");
          a.href = story[key];
          a.textContent = "Article Link"; // Use concise link text
          a.target = "_blank"; // Open in new tab
          li.appendChild(a);
        } else if (Array.isArray(story[key])) {
          const span = document.createElement("span");
          span.classList.add("array-value");
          span.textContent = story[key].join(", ");
          li.appendChild(span);
          // Add a line break after array values for better formatting
          li.appendChild(document.createElement("br"));
        } else {
          li.textContent = `${key}: ${story[key]}`;
        }

        ul.appendChild(li);
      }
    }
    resultsDiv.appendChild(ul);
    ul.appendChild(document.createElement("hr"));
  });
};

export { renderToHtml };
