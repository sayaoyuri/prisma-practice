import { Book } from "@prisma/client";

export type CreateReview = Pick<Book, "review" | "grade"> & { 
  bookId: number;
};
