import React, { useEffect, useState } from "react";

export default function ProtectedRouteHook() {
  const [UserData, setUserData] = useState(
    JSON.parse(localStorage.getItem("user"))
  );

  const [IsUser, setIsUser] = useState();
  const [IsAdmin, setIsAdmin] = useState();

  useEffect(() => {
    if (UserData != null) {
      if (UserData.role === "user") {
        setIsUser(true);
        setIsAdmin(false);
      } else {
        setIsUser(false);
        setIsAdmin(true);
      }
    } else {
      setIsUser(false);
      setIsAdmin(false);
    }
  }, []);

  return [UserData, IsAdmin, IsUser];
}
