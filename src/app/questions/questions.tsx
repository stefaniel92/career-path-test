import { z } from "zod";

const QuestionSchema = z.object({
  id: z.string(),
  text: z.string(),
});

const CareerPathTestSchema = z.object({
  ok: z.boolean(),
  questions: z.array(QuestionSchema),
});

type TQuestionSchema = z.infer<typeof QuestionSchema>;

export type TTestQuestion = {
  id: string;
  text: string;
};

export type TCareerPathTest = {
  ok: boolean;
  questions: TTestQuestion[];
};

export const getCareerPathTestData = async (
  user: string
): Promise<TCareerPathTest | null> => {
  const careerPathTestUrl = `https://fhc-api.onrender.com/questions?user=${user}`;

  try {
    const res = await fetch(careerPathTestUrl);
    const json = await res.json();

    if (!json || json === "null" || json === "") {
      console.error("Failed to fetch valid data.");
      return null;
    }

    const parsedResult = CareerPathTestSchema.safeParse(json);

    if (!parsedResult.success) {
      console.log("Parse error: ", parsedResult.error);
      return null;
    }

    const mappedQuestions: TTestQuestion[] = parsedResult.data.questions.map(
      (question: TQuestionSchema) => {
        return {
          id: question.id,
          text: question.text,
        };
      }
    );

    return {
      ok: parsedResult.data.ok,
      questions: mappedQuestions,
    };
  } catch (error) {
    console.error("Error fetching Career Path Test data:", error);
    return null;
  }
};
