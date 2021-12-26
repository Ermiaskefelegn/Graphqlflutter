const { gql } = require("apollo-server-express");
module.exports = {
  typeDefs: gql`
    scalar Date
    type Message {
      message: String
    }

    type User {
      id: Int!
      firstName: String!
      lastName: String
      createdAt: Date
      updatedAt: Date
    }
    input Userinfo {
      id: Int!
      firstName: String!
      lastName: String!
    }

    type Teacher {
      id: Int!
      firstname: String!
      lastname: String!
      phoneno: String!
      profilepicture: String!
      address: String!
      kifleketema: String!
      teachingschedule: String!
      educationlevel: String
      students: [Student]!
    }
    type Student {
      id: Int!
      firstname: String!
      lastname: String!
      studentpicture: String!
      gradeearned: String!
      perforamanceofstudent: String!
      educationlevel: String!
      schedule: String!
      teacher: Teacher!
    }

    type Query {
      fetchallusers: [User!]
      fetch_students_by_id(id: Int!): Student
      fetch_all_students: [Student!]
      fetch_students_by_learning_schedule(schedule: String!): Student
      fetch_students_by_education_level(educationlevel: String!): Student
      fetchallteachers: [Teacher!]
      fetch_teacher_by_kifleketema(kifleketema: String!): Teacher
      fetch_teacher_by_id(Id: Int!): Teacher
    }
    type Mutation {
      CreateUser(Userinfo: Userinfo): User

      createStudent(
        firstname: String!
        lastname: String!
        studentpicture: String!
        gradeearned: String!
        perforamanceofstudent: String!
        educationlevel: String!
        schedule: String!
      ): Student

      createTeacher(
        firstname: String!
        lastname: String!
        phoneno: String!
        profilepicture: String!
        address: String!
        kifleketema: String!
        teachingschedule: String!
        educationlevel: String
      ): Teacher
    }
  `,
};
