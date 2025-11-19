import React from "react";
import { useGetHealthStatusQuery } from "./healthApi";

export default function HealthStatus() {
  const { data, isLoading, isError } = useGetHealthStatusQuery();

  if (isLoading) return <p>Checking server health...</p>;
  if (isError) return <p>❌ Server offline</p>;

  return (
    <div>
      <h2>✅ Server Status</h2>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}