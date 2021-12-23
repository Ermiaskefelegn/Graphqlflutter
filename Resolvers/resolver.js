const { model } = require("mongoose");
const { bcrypt } = require("bcrypt");
const db = require("../models");
const { use } = require("bcrypt/promises");
const resolvers = {
  Query: {
    async fetchallusers(_, {}) {},
    async fetchsingleuser(_, { id }) {},
    async fetchallrecipe(_, { id }) {},
    async fetchsinglerecipie(_, { id }) {},

    async fetchsingleuser(_, { id }) {
      return await db.User.findById(id);
    },
    async fetchallteachers() {
      return await db.Teachers.findAll({});
    },
    async fetch_teacher_by_kifleketema(_, { kifleKetema }) {
      return await db.Teachers.findAll({ where: { kifleKetema } });
    },
    async fetch_teacher_by_id(_, { id }) {
      return await db.Teachers.findById(id);
    },
    async fetch_all_students(_, {}) {
      return await db.Students.findAll({});
    },
    async fetch_students_by_learning_schedule(_, { schedule }) {
      return await db.Students.findAll({ where: { schedule } });
    },
    async fetch_students_by_education_level(_, { educationLevel }) {
      return await db.Students.findAll({ where: { educationLevel } });
    },
    async fetch_students_by_id(_, { id }) {
      return await db.Students.findById(id);
    },
  },
  Mutation: {
    // async Createuser(_, { name, email, password }, { models }) {
    //   return model.User.create({
    //     name,
    //     email,
    //     password: await bcrypt.hash(password, 10),
    //   });
    // },
    // async createRecipe(
    //   _,
    //   { UserId, title, ingredients, direction },
    //   { models }
    // ) {
    //   return models.Recipe.create({
    //     UserId,
    //     title,
    //     ingredients,
    //     direction,
    //   });
    // },
    async CreateUser(_, { firstName, lastName }) {
      const user = await db.User.create({
        firstName,
        lastName,
      });
      console.log.user;
      return user;
    },
    async updateuser(_, { id, firstName, lastName }) {
      const user = await db.User.findById(id);
      await user.update({
         firstName,
        lastName,
      })
      console.log.user;
      return user;
    },
  },
};
module.exports = resolvers;
