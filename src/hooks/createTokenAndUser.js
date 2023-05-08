export const createTokenAndUser = (user, email) => {
  fetch(`${process.env.REACT_APP_API_URL}/users/${email}`, {
    method: "PUT",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(user),
  })
    .then((res) => res.json())
    .then((data) => {
      localStorage.setItem("token", `bearer ${data.token}`);
      return data;
    })
    .catch((error) => console.log(error));
};
