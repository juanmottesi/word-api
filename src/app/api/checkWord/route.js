import NSpell from "nspell";
import path from 'path';
import fs from 'node:fs/promises'


import { getWordBySessionId } from "./words";
import { errorResponse } from "../../../utils/api";

const spellCheck = async (word) => {
  const aff = await fs.readFile(path.join(process.cwd(), 'public/index.aff'));
  const dic = await fs.readFile(path.join(process.cwd(), 'public/index.dic'));

  const spell = NSpell(aff, dic);
  return spell.correct(word);
}

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
  const isCorrect = await spellCheck(word);
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
