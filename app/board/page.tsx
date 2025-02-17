export default function Page() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        position: "fixed",
        top: 0,
        left: 0,
        backgroundColor: "#FAFBFD",
      }}
    >
      <iframe
        style={{
          width: "100%",
          height: "100%",
          position: "absolute",
          top: 0,
          left: 0,
        }}
        src="https://embed.figma.com/design/3gVOKUq04oImJQsaGOqvau/temporary?node-id=0-1&embed-host=share"
        allowFullScreen
      ></iframe>
    </div>
  );
}
