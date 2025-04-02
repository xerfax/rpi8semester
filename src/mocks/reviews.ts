import { Review } from "../types/review";

const reviews: Review[] = [
  {
    id: "1",
    comment: "A quiet cozy and picturesque that hides behind a river by the unique lightness of Amsterdam. The building is green and from 18th century.",
    date: "2025-03-25T21:00:00.456Z",
    rating: 4,
    user: {
      name: "Isaac",
      avatarUrl: "../public/img/avatar_4-mark-gen.jpg",
      isPro: true
    }
  },
  {
    id: "2",
    comment: "The place was clean and the host was very friendly. Highly recommend!",
    date: "2025-02-15T12:34:56.789Z",
    rating: 5,
    user: {
      name: "Emily",
      avatarUrl: "../public/img/avatar_2-marya-sten.jpg",
      isPro: false
    }
  }
];

export { reviews };
