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
    url: data["url"],
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
  } catch (error) {
    console.log("Error", error);
  }
};

// Export the handleSubmit function
export { handleSubmit };
