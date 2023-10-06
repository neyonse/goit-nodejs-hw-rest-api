import { HttpError } from "../helpers/index.js";
import { ctrlWrapper } from "../decorators/index.js";
import Contact from "../models/Contact.js";

const getAll = async (req, res, next) => {
  const result = await Contact.find();
  res.json(result);
};

const getById = async (req, res, next) => {
  const { id } = req.params;
  const result = await Contact.findById(id);

  if (!result) {
    throw HttpError(404);
  }

  res.json(result);
};

const add = async (req, res, next) => {
  const result = await Contact.create(req.body);

  res.status(201).json(result);
};

const updateById = async (req, res, next) => {
  const { id } = req.params;

  const result = await Contact.findByIdAndUpdate(id, req.body);

  if (!result) {
    throw HttpError(404);
  }

  res.status(201).json(result);
};

const updateStatusContact = async (req, res, next) => {
  const { id } = req.params;

  const result = await Contact.findByIdAndUpdate(id, req.body);

  if (!result) {
    throw HttpError(404);
  }

  res.status(201).json(result);
};

const removeById = async (req, res, next) => {
  const { id } = req.params;
  const result = await Contact.findByIdAndRemove(id);

  if (!result) {
    throw HttpError(404);
  }

  res.json({ message: "contact deleted" });
};

export default {
  getAll: ctrlWrapper(getAll),
  getById: ctrlWrapper(getById),
  add: ctrlWrapper(add),
  updateById: ctrlWrapper(updateById),
  updateStatusContact: ctrlWrapper(updateStatusContact),
  removeById: ctrlWrapper(removeById),
};
