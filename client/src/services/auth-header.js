export default function authHeader() {
  const user = JSON.parse(localStorage.getItem("user"));
  console.log(user);
  if (user && user.accessToken) {
    console.log(user.accessToken);
    // For Spring Boot back-end
    // return { Authorization: "Bearer " + user.accessToken };

    // for Node.js Express back-end
    return {
      "x-access-token": user.accessToken,
      "Content-type": "application/json",
    };
  } else {
    return { "Content-type": "application/json" };
  }
}
