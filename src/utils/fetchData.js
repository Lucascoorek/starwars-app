export default async (query = "") => {
  const uri = "https://challenge.codetain.com/api/v1/charging_status";
  let response;
  if (query === "") {
    response = await fetch(uri);
  } else {
    response = await fetch(uri + `?priority=${query}`);
  }
  const { charging_status } = await response.json();
  return charging_status;
};
