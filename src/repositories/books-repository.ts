import { CreateBook } from "../protocols/book";
import { CreateReview } from "../protocols/review";

import prisma from "../database";

export async function getBooks() {
  return prisma.book.findMany();
}

export async function getBook(id: number) {
  return prisma.book.findUnique({
    where: { id }
  });
}

export async function createBook(book: CreateBook) {
  await prisma.book.create({
    data: book
  });
}

export async function reviewBook(bookReview: CreateReview) {
  const { bookId, grade, review } = bookReview;

  await prisma.book.update({
    where: { id: bookId },
    data: {
      grade,
      review,
      read: true
    }
  });
}