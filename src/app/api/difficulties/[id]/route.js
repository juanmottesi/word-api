import { errorResponse, jsonResponse, optionsResponse } from "@/utils/api";
import { shuffleArray } from "@/utils/array";

import { getDifficulty } from "../difficulties";
import { wordsByLevel } from "../../checkWord/words";

export async function OPTIONS() {
  return optionsResponse();
}

export async function GET(request, { params }) {
  const { id } = await params;
  const difficulty = getDifficulty(id);
  if (!difficulty) {
    return errorResponse(404, "Difficulty not found");
  }
  const levels = wordsByLevel[id];
  const { sessionId, word } = shuffleArray(levels)[0]
  console.log(`Session ID: ${sessionId}, Word: ${word}`);
  return jsonResponse({ sessionId, difficulty, wordLenght: word.length });
}
