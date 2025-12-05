import React, { useState } from "react";
import axios from "axios";

function ToDoPage() {
  const [itemName, setItemName] = useState("");
  const [itemDescription, setItemDescription] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:5000/submittodoitem", {
      itemName,
      itemDescription,
    });
    alert("Item Submitted!");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Item Name"
        value={itemName} onChange={(e) => setItemName(e.target.value)} required />

      <input type="text" placeholder="Item Description"
        value={itemDescription} onChange={(e) => setItemDescription(e.target.value)} required />

      <button type="submit">Submit</button>
    </form>
  );
}

export default ToDoPage;

