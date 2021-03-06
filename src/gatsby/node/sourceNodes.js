module.exports = ({ actions }) => {
  actions.createTypes(`
    type Article implements Node {
      id: ID!
      slug: String!
      title: String!
      date: Date! @dateformat
      updatedAt: String!
      author: String!
      excerpt(pruneLength: Int = 140): String!
      body: String!
      hero: File @fileByRelativePath
      heroRef: String!
      timeToRead: Int
    }
  `);
};
