import { renderToHtml } from "./helperFunctions";

const form = document.getElementById("urlForm");
if (form) {
  form.addEventListener("submit", handleSubmit);
}

function handleSubmit(event) {
  event.preventDefault();

  const formData = new FormData(form);
  const data = {};
  formData.forEach((value, key) => {
    data[key] = value;
  });

  console.log(data);
  postData("http://localhost:8000/submit", {
    title: data["title"],
    noOfStories: data["noOfStories"],
    language: data["language"],
  });
}
// Function to send data to the server
// Async function to post the data to the server from the client side
const postData = async (url, dataRecord) => {
  console.log(`POST request to ${url} with data:`, dataRecord);
  const request = await fetch(url, {
    method: "POST",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(dataRecord),
  });

  try {
    const newData = await request.json();
    console.log(newData);
    renderToHtml(newData);
    return newData;
  } catch (error) {
    console.log("Error", error);
    return null;
  }
};

export { handleSubmit, postData };
