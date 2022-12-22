import User from "../../models/User";
import Product from "../../models/Product";
import dummydata from "../../utils/dummydata";
import db from "../../utils/db";

const handler = async (req, res) => {
  await db.connect();
  await User.deleteMany();
  await User.insertMany(dummydata.users);
  await Product.deleteMany();
  await Product.insertMany(dummydata.products);
  res.send({ message: "seeded successfully" });
};
export default handler;
