import { connectToDb } from "../../utils/connectToDb";

export default async function handler(req, res) {
  if (
    typeof req.body.discordName !== "string" ||
    typeof req.body.technology !== "string"
  ) {
    throw new Error("bad input");
  }
  const db = await connectToDb();
  const today = new Date();
  await db.collection("queue").insert({
    discordName: req.body.discordName,
    technology: req.body.technology,
    date:
      today.getFullYear() +
      "-" +
      (today.getMonth() + 1) +
      "-" +
      today.getDate(),
  });
  res.status(200).json({ ok: true });
}
