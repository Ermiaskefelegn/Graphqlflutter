const { gql } = require("apollo-server");
module.exports = {
  typeDefs: gql`
    type UserS {
      id: Int!
      name: String!
      email: String!
      menu: [Recipe]!
    }
    type Recipe {
      id: Int!
      title: String!
      ingredients: String!
      direction: String!
      user: UserS!
    }

    type User {
      id: Int!
      firstname: String!
      lastname: String
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
      user_by_id(id: Int!): User
      all_users: [User!]
      all_recipe: [Recipe!]
      recipe_by_id(id: Int!): Recipe
    }

    type Query {
      user_by_id(id: Int!): User
      student_by_id(id: Int!): Student
      all_students: [Student!]
      student_by_schedule(schedule: String!): Student
      student_by_educationleve(educationlevel: String!): Student
      all_teachers: [Teacher!]
      teacher_by_location(kifleketema: String!): Teacher
      teacher_by_id(Id: Int!): Teacher
    }
    type Mutation {
      createUser(firstname: String!, lastname: String): User

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
