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
    const ul = document.createElement("ul"); // Create a new <ul> for each story

    for (const key in story) {
      // Iterate over the properties of the story object
      if (story.hasOwnProperty(key)) {
        // Check if property belongs to object
        const li = document.createElement("li");
        li.textContent = `${key}: ${
          Array.isArray(story[key]) ? story[key].join(", ") : story[key] //handle arrays nicely
        }`; // Format string
        ul.appendChild(li);
      }
    }
    resultsDiv.appendChild(ul); // Add each list to resultsDiv
  });
};

// Export the handleSubmit function
export { renderToHtml };
