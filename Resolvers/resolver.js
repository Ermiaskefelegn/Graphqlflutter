const db = require("../models");
module.exports = {
  resolvers: {
    Query: {
      fetchallusers: async () => {
        return db.User.findAll()
          .then((result) => {
            console.log(result);
            return result;
          })
          .catch((err) => {
            return err;
          });
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
      CreateUser: async (
        _,
        { Userinfo: { id, firstName, lastName } },
        context
      ) => {
        return db.User.create({
          id,
          firstName,
          lastName,
        })
          .then((res) => {
            return res;
          })
          .catch((err) => {
            return err;
          });
      },
      // async updateuser(_, { id, firstName, lastName }) {
      //   const user = await db.User.findById(id);
      //   await user.update({
      //     firstName,
      //     lastName,
      //   });
      //   console.log.user;
      //   return user;
      // },
    },
  },
};
