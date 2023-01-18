const UserModel = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { createError } = require("../helpers");

const dotenv = require("dotenv");
dotenv.config();
const { JWT_SECRET_KEY } = process.env;

class User {
  async addNewUser(req, res, next) {
    const { name, password } = req.body;
    try {
      const duplicateName = await UserModel.findOne({ name: name });
      if (duplicateName) {
        throw createError(409, "User not created. Name is duplicate");
      }

      const hashPassword = await bcrypt.hash(password, 12);

      const user = await UserModel.create({
        ...req.body,
        password: hashPassword,
      });

      const data = { user };
      res.json(data);
    } catch (error) {
      next(error);
    }
  }

  async userLogin(req, res, next) {
    try {
      const { name, password } = req.body;
      const user = await UserModel.findOne({ name });

      if (!user) {
        throw createError(401, `Name or password is wrong`);
      }

      const isPassword = await bcrypt.compare(password, user.password);

      if (!isPassword) {
        throw createError(401, `Name or password is wrong`);
      }

      const token = jwt.sign({ id: user._id }, JWT_SECRET_KEY, {
        expiresIn: "30d",
      });

      const result = await UserModel.findByIdAndUpdate(user._id, { token });
      console.log(result);

      const data = { user, token };
      return res.json(data);
    } catch (error) {
      next(error);
    }
  }

  async getCurrentUser(req, res, next) {
    try {
      const { name } = req.user;
      const user = await UserModel.findOne({ name });
      if (!user) {
        throw createError(404);
      }
      const data = { user };
      return res.json(data);
    } catch (error) {
      next(error);
    }
  }

  async logOutUser(req, res, next) {
    try {
      const { _id } = req.user;
      const user = await UserModel.findByIdAndUpdate(_id, { token: "" });
      if (!user) {
        throw createError(404);
      }
      return res.status(204);
    } catch (error) {
      next(error);
    }
  }

  async deleteUser(req, res, next) {
    try {
      const { _id } = req.user;
      const user = await UserModel.findOne(_id);
      if (!user) {
        throw createError(404);
      }
      await UserModel.findByIdAndRemove(_id);
      return res.status(200).json({ message: "Status 200. User was deleted." });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new User();
