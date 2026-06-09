export default function Button() {
  function handleClick() {
    console.log("Button is clicked");
  }

  return (
    <div className="min-h-dvh p-10">
      <button className="mx-auto border p-2 rounded-md" onClick={handleClick}>
        আমি কিছু করি না
      </button>
      <button
        className="mx-auto border p-2 rounded-md"
        onClick={function handleClick() {
          console.log("Button is clicked");
        }}
      >
        আমি কিছু করি না
      </button>
      <button
        className="mx-auto border p-2 rounded-md"
        onClick={ () => {
          console.log("Button is clicked");
        }}
      >
        আমি কিছু করি না
      </button>
    </div>
  );
}
