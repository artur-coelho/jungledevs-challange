const URL = "https://api.jungledevs.com/api/v1/challenge-newsletter/";

export async function postEmail(body) {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  };
  const response = await fetch(URL, options);
  const data = await response.json();
  console.log("api:", data);
  return data;
}
