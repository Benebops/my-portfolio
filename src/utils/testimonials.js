const testimonials = [
  {
    id: 1,
    testimony:
      "He creates and develops quality web apps that meets the needs of the public. His work is very creative and he meets up with deadlines. I am really satisfied with his work.",
    name: "Alex",
    title: "Starbucks",
    image:
      "data:image/jpeg;base64,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",
  },
  {
    id: 2,
    testimony:
      "He creates and develops quality web apps that meets the needs of the public. His work is very creative and he meets up with deadlines. I am really satisfied with his work.",
    name: "Joy",
    title: "Starbucks",
    image:
      "data:image/jpeg;base64,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",
  },
  {
    id: 3,
    testimony:
      "He creates and develops quality web apps that meets the needs of the public. His work is very creative and he meets up with deadlines. I am really satisfied with his work.",
    name: "Steven",
    title: "Starbucks",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRK5IF98-hyvbqHcy8yr704PjZhRv_j_z5wCfb6TsNlKGWSXVVZrFDOGkFr4YJSVQN759E&usqp=CAU",
  },
  {
    id: 4,
    testimony:
      "He creates and develops quality web apps that meets the needs of the public. His work is very creative and he meets up with deadlines. I am really satisfied with his work.",
    name: "Henry",
    title: "Starbucks",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvCdyi-jV5u0bVQC1BIH0LAH2wJT_p56qUNQ&s",
  },
];

export { testimonials };