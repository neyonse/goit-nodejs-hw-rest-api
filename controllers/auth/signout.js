import { User } from "../../models/index.js";

export const signout = async (req, res, next) => {
  await User.findByIdAndUpdate(req.user._id, { token: "" });

  res.status(204).send();
};
