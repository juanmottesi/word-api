import dictionary from "dictionary-es";
import NSpell from "nspell";
import { getWordBySessionId } from "./words";
import { errorResponse } from "@/utils/api";

const spell = NSpell(dictionary);

const solutionWithLetter = (letter, index, currentWord) => {
  if (currentWord[index] === letter) {
    return 'correct';
  } 
  if (currentWord.includes(letter)) {
    return 'elsewhere';
  } 
  return 'absent';
}

export async function POST(request) {
  const body = await request.json();
  const { sessionId, word } = body;
  if (!sessionId || !word) {
    return errorResponse(400, "Invalid request");
  }
  const sessionWord = getWordBySessionId(sessionId);
  if (!sessionWord) {
    return errorResponse(404, "Session not found");
  }
  const isCorrect = spell.correct(word);
  if (!isCorrect) {
    return errorResponse(400, "Incorrect word");
  }
  const arrayWord = [...word];
  const response = arrayWord.map((letter, index) => {
    return {
      letter,
      solution: solutionWithLetter(letter, index, sessionWord.word),
    }
  })
  return Response.json(response); 
}
