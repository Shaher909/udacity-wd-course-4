import { renderToHtml } from "./helperFunctions";

const form = document.getElementById("urlForm");
form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  const formData = new FormData(form);
  const data = {};
  formData.forEach((value, key) => {
    data[key] = value;
  });

  alert("form submitted");
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
  } catch (error) {
    console.log("Error", error);
  }
};

// Export the handleSubmit function
export { handleSubmit };
