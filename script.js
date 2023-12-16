const API_KEY = "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";
const prompt = document.querySelector("#b");
const button = document.querySelector("#pulsar");
const res = document.querySelector("#res");

async function getCompletion(prompt) {
  const response = await fetch(`https://api.openai.com/v1/completions`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${API_KEY}`,
    },
    body: JSON.stringify({
      model: "text-davinci-003",
      prompt: prompt,
      max_tokens: 150,
    }),
  });

  const data = await response.json();
  return data;
}

button.addEventListener("click", async () => {
  const response = await getCompletion(prompt.value);
  res.innerHTML = response.choices[0].text;
});