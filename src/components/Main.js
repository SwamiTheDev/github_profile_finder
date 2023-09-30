import React, { useCallback, useEffect, useState } from "react";

import Input from "./Input";
import Card from "./Card";

const Main = () => {
  const [user, setUser] = useState("swamithedev");
  const [choice, setChoice] = useState("swamithedev");
  const [error, setError] = useState("");

  const changeUser = (newUser) => {
    setChoice(newUser);
  };

  const fetchUserHandler = useCallback(async () => {
    setError("");

    try {
      const response = await fetch(`https://api.github.com/users/${choice}`);

      if (!response.ok) {
        throw new Error();
      }

      const newUser = await response.json();

      setUser(newUser);
    } catch (err) {
      console.log(err.message);
      setError("No results");
    }
  }, [choice]);

  useEffect(() => {
    fetchUserHandler();
  }, [fetchUserHandler]);

  return (
    <main>
      <Input changeUser={changeUser} error={error} />
      <Card user={user} />
    </main>
  );
};
export default Main;
