export default async (url, options = {}) => {
  return new Promise((resolve, reject) => {
    fetch(url, options)
      .then(response => {
        if (!response.ok) {
          reject(new Error(`HTTP error! Status: ${response.status}`));
        }
        return response.json(); // Assuming the response is JSON
      })
      .then(data => resolve(data))
      .catch(error => reject(error));
  });
}