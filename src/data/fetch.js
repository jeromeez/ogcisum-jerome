export async function createsample(type, name, body) {
  const response = await fetch(
    process.env.REACT_APP_API_URL +
      "?apikey=" +
      process.env.REACT_APP_API_KEY +
      "&mode=create&endpoint=samples&sampleType" +
      type +
      "&sampleName=" +
      name,
    {
      method: "post",
      body: JSON.stringify(body),
    }
  );
  const json = await response.json();
}

export async function getSample(data) {
  const response = await fetch(
    "http://wmp.interaction.courses/api/v1/?apiKey=" +
      process.env.REACT_APP_API_KEY +
      "&mode=read&endpoint=samples"
  );
  const json = await response.json();
  data(json.samples);
  return json.samples;
}
