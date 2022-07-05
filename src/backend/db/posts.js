import { v4 as uuid } from "uuid";
// import { formatDate } from "../utils/authUtils";

/**
 * Posts can be added here.
 * You can add default posts of your wish with different attributes
 * */

export const posts = [
  {
    _id: uuid(),
    content: "Learning",
    likes: {
      likeCount: 5,
      likedBy: [],
      dislikedBy: [],
    },
    username: "sharmaryan",
    firstName: "Aryan",
    lastName: "Sharma",
    createdAt: "2022-05-20T07:10:37+05:30",
    updatedAt: "2022-05-20T07:10:37+05:30",
    comments: [
      {
        _id: uuid(),
        username: "shubhamsoni",
        text: "Acha",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        username: "sohamshah",
        text: "Wow!",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
  },
  {
    _id: uuid(),
    content:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.",
    likes: {
      likeCount: 5,
      likedBy: [],
      dislikedBy: [],
    },
    username: "shubhamsoni",
    firstName: "Shubham",
    lastName: "Soni",
    createdAt: "2022-01-05T07:10:37+05:30",
    updatedAt: "2022-01-05T07:10:37+05:30",
    comments: [
      {
        _id: uuid(),
        username: "shubhamsoni",
        text: "Interesting",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        username: "sohamshah",
        text: "Wow!",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
  },
  {
    _id: uuid(),
    content: "This is my content",
    likes: {
      likeCount: 2,
      likedBy: [],
      dislikedBy: [],
    },
    username: "sharmaryan",
    firstName: "Aryan",
    lastName: "Sharma",
    createdAt: "2022-03-10T07:10:37+05:30",
    updatedAt: "2022-03-10T07:10:37+05:30",
    comments: [
      {
        _id: uuid(),
        username: "shubhamsoni",
        text: "Interesting",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        username: "sohamshah",
        text: "Acha!",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
  },

  {
    _id: uuid(),
    content:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.",
    likes: {
      likeCount: 3,
      likedBy: [],
      dislikedBy: [],
    },
    username: "adarshbalika",
    firstName: "Adarsh",
    lastName: "Balika",
    createdAt: "2022-06-01T07:10:37+05:30",
    updatedAt: "2022-06-01T07:10:37+05:30",
    comments: [
      {
        _id: uuid(),
        username: "shubhamsoni",
        text: "Interesting",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        username: "sohamshah",
        text: "Wow!",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
  },
];
