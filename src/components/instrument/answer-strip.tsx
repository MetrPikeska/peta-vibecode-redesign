interface Answer {
  head: string;
  body: string;
}

/**
 * The short answer to "who is this and what do they do", placed directly under
 * the hero so it cannot end up behind the methodology. Three statements, split
 * by hairlines, each opening with its claim in the display face.
 */
export function AnswerStrip({ answers }: { answers: readonly Answer[] }) {
  return (
    <div className="answers">
      {answers.map((answer) => (
        <p key={answer.head} className="answers__cell">
          <strong>{answer.head}</strong>{" "}
          {answer.body}
        </p>
      ))}
    </div>
  );
}
