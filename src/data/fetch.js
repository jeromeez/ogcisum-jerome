/**
 * This function will POST the API data to save the API.
 * @param {String} type - The type (piano, guitar, etc)
 * @param {String} data - The name of the sample
 * @param {String} body - The body of API
 */
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

/**
 * This function will fetch the API data specifically the samples.
 * @param {String} data - The selected ID of data in date API
 */
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
