import dbConnect from "../../../lib/dbConnect";
import Pet from "../../../models/Pet";

export default async function handler(req, res) {
  const {
    query: { id },
    method,
  } = req;

  await dbConnect();

  if (method === "GET") {
    try {
      const pet = await Pet.findById(id);
      if (!pet) {
        return res.status(400).json({ message: "Not Found", success: false });
      }
      res.status(200).json({ success: true, data: pet });
    } catch (error) {
      res.status(400).json({ success: false });
    }
  } else if (method === "PATCH") {
    try {
      await Pet.findByIdAndUpdate(id, req.body);

      res.status(201).json({ success: true });
    } catch (error) {
      res.status(400).json({ success: false, error: error.message });
    }
  } else if (method === "DELETE") {
    try {
      await Pet.findByIdAndDelete(id);

      res.status(200).json({ success: true });
    } catch (error) {
      res.status(400).json({ success: false, error: error.message });
    }
  }
}
