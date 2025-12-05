app.post("/submittodoitem", async (req, res) => {
  const { itemName, itemDescription } = req.body;

  await Todo.create({ itemName, itemDescription });

  res.json({ message: "Item Saved Successfully" });
});

