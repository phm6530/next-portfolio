"use client";

export default function errorPage({ error }: { error: unknown }) {
  let errorMessage = "";

  if (error instanceof Error) {
    errorMessage = error.message;
  } else {
    errorMessage = "알수 없는 오류입니다.";
  }

  return (
    <main className="error">
      <h1>An error occured!</h1>
      <p>{errorMessage}</p>
    </main>
  );
}
