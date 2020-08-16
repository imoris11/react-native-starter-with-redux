export const makeApiCall = async (url) => {
  const response = await fetch(url);
  return response.json();
};
