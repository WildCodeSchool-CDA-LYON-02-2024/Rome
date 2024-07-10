export default const fetchData = (url, method, setData, setBool, setError) => {
  fetch(url, {
    method: method,
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => {
      if (!res.ok)
        throw new Error(
          `Data retrieval failed: ${res.status} ${res.statusMessage}`,
        );
      return res.json();
    })
    .then((data) => {
      setData(data);
      setBool(false);
    })
    .catch((err) => {
      setError(`Error: ${err.message}`);
      setBool(false);
    });
};
