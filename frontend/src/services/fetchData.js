export default function fetchData(url, method) {
  fetch(url, {
    method: method,
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => {
      console.log(res);
      if (!res.ok) throw new Error(`Error: ${res.status} ${res.statusText}`);
      return res.json();
    })
    .catch((err) => {
      console.error("Fetch operation failed:", err.message);
      throw err;
    });
}
