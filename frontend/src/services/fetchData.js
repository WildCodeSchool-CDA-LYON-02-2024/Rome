export default function fetchData(url, method, setState, setError, setLoading) {
  fetch(url, {
    method: method,
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => {
      if (!res.ok) throw new Error(`Error: ${res.status} ${res.statusText}`);
      return res.json();
    })
    .then((data) => {
      setState(data);
      setLoading(false);
    })
    .catch((err) => {
      console.error("Fetch operation failed:", err.message);
      setError(err.message);
      setLoading(false);
    });
}
