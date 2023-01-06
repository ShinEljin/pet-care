import dbConnect from "../../../lib/dbConnect";
import Pet from "../../../models/Pet";

export default async function handler(req, res) {
  const { body, method } = req;

  if (method === "POST") {
    try {
      const response = await Pet.create(body);
      res.status(201).json({ success: true, data: response });
    } catch (error) {
      res.status(400).json({ success: false, message: error });
    }
  }
}
