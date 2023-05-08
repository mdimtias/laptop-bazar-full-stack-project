import { useEffect, useState } from "react";

const useVerifyUser = (email) => {
  const [role, setRole] = useState("buyer");
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (email) {
      fetch(`${process.env.REACT_APP_API_URL}/users/admin/${email}`, {
        headers: {
          authorization: localStorage.getItem("token"),
        },
      })
        .then((res) => res.json())
        .then((data) => {
          setRole(data.role);
          setLoading(false);
        });
    }
  }, [email]);
  return [role, loading];
};

export default useVerifyUser;
