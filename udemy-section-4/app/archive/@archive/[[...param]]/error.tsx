"use client";

export default function error({ error }: { error: Error }) {
  return (
    <>
      <div id="error">
        <h2>An error!</h2>
        <p>{error.message}</p>
      </div>
    </>
  );
}
