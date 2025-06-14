import { TIconCard } from "../../molecules/icon-card/icon-card";

export const IconCardGridData: TIconCard[] = [
  {
    title: "24 questions",
    bodyCopy:
      "Answer 24 questions about your working style and career preferences",
    icon: {
      variant: "orange",
      image: {
        src: "/clipboard-question.svg",
        alt: "",
      },
    },
    id: "icon-card-1",
  },
  {
    title: "2 minutes",
    bodyCopy: "Gain insights into your future career in just two minutes",
    icon: {
      variant: "purple",
      image: {
        src: "/stopwatch.svg",
        alt: "",
      },
    },
    id: "icon-card-2",
  },
  {
    title: "Personalised advice",
    bodyCopy: "Receive personalised advice to guide you on your next steps",
    icon: {
      variant: "yellow",
      image: {
        src: "/scissor-cutting.svg",
        alt: "",
      },
    },
    id: "icon-card-3",
  },
];
