import axios from "axios";
import { useEffect, useState } from "react";

const useApps = () => {
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    axios("../appData.json")
      .then((data) => setApplications(data.data))
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, []);
  return { applications, loading, error };
};
export default useApps;

// .then(data => console.log(data.data))
