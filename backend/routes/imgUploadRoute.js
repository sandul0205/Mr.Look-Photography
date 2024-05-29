import { Router } from "express";
import Book from "../models/imageModel";

const router = Router();

router.post('/books', async (request,response) =>{
  const newBook = {
      title: request.body.title,
      author: request.body.author,
      publishYear: request.body.publishYear,
  };

  const book = await Book.create(newBook);

  response.status(201).send({
      message: 'Book created successfully',
      book: book,
  });



});

export default router;