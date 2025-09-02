export default function UploadMedicine() {
    return (
      <div style={{ padding: "1rem" }}>
        <h2>Upload Medicine</h2>
        <form>
          <input type="text" placeholder="Medicine Name" /><br />
          <input type="number" placeholder="Quantity" /><br />
          <input type="file" /><br />
          <button>Upload</button>
        </form>
      </div>
    );
  }
  