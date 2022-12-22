import User from "../../models/User";
import dummydata from "../../utils/dummydata";
import db from "../../utils/db";

const handler = async (req, res) => {
  await db.connect();
  await User.deleteMany();
  await User.insertMany(dummydata.users);
  res.send({ message: "seeded successfully" });
};
export default handler;
