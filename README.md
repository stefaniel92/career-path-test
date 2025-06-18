This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

My notes:

Added 18 June: Upon refelction, I should have made the test a <form> element, with each answer from 0-7 being a radio input that corresponded to each question.

Given the time limit, I decided to focus my efforts on what I feel my strong suit is, which is semantic HTML and styling. Given more time, I would do the following (at minimum!):

1. Of course, complete the test functionality with submitting the test, saving results, and deciding whether or not to show the test or the results based on whether or not the user, fetched from the query parameters, had previously submitted a test.

2. I just noticed in the post submission that the answers should be 0-7 not 1-8, so I would fix that!

3. I would have a smoother transition to the next step after answering the last question.

4. As I mentioned in a comment, I would make sure to replace the answer from a previously answered question if the user changed the answer, not simply add the question again to the array.

5. I would ensure the test was fully mobile responsive (and finish styling it of course!).

6. I would make the test experience more screen reader friendly by:

   - Making it more clear what each answer represented on the questions so the user knew they were selcting an answer between 0-7 on a scale of how much they agree or disagree with a statement
   - Potentially having the progress percentage in an aria-live section so they hear when it updates - though I would weigh this with the fact that each question does say how many questions there are and which question the user is on
   - Trying to see if there is a way to alert the user that the focus has moved to the next question after answering the previous one. Perhaps by placing the focus on the next question, though weighing this against the fact it is not best practice to focus upon a non-focusable element.

7. Making sure the test doesn't scroll you back down to your current question if you're going back to review answers but instead takes you to the question after the one you've just modified your answer for.

8. Put the comment about reviewing your answers outside of each answer.

9. Make sure the test doesn't break if you change your answers after filling in your last answer.

10. Have a better loading state for when the API is connecting
