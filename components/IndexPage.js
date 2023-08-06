function IndexPage() {
  const side = typeof window === "undefined" ? "server" : "client";

  return <div>You're currently on the {side}-side.</div>;
}

export default IndexPage;
