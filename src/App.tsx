import React, { useEffect } from "react";

export function App() {
  useEffect(() => {
    fetch("/todos");
  }, []);

  return (
    <main>
      <h1>Hello</h1>
    </main>
  );
}
