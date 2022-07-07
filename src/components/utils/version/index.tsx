import metadata from "../../../version.json";

function Version() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div style={{ display: "flex", lineHeight: "20px" }}>
        &copy; bruno rinaldi.com.br 2021
      </div>
      <div style={{ display: "flex", lineHeight: "20px" }}>
        {`version ${metadata.buildMajor}.
        ${metadata.buildMinor}.
        ${metadata.buildRevision} 
        ${metadata.buildTag}`}
      </div>
    </div>
  );
}
export default Version;
