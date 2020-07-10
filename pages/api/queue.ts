import { connectToDb } from "../../utils/connectToDb";

export default async function handler(req, res) {
  const db = await connectToDb();
  const queue = await db.collection("queue").find().toArray();
  res.status(200).json(queue);
}
