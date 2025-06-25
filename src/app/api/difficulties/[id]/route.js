import { errorResponse, jsonResponse, optionsResponse } from "@/utils/api";
import { shuffleArray } from "@/utils/array";

import { wordsByLevel } from "../../checkWord/words";

export async function OPTIONS() {
  return optionsResponse();
}

export async function GET(request, { params }) {
  const { id } = await params;
  const levels = wordsByLevel[id];
  if (!levels) {
    return errorResponse(404, "Difficulty not found");
  }
  const { sessionId, word } = shuffleArray(levels)[0]
  return jsonResponse({ sessionId, difficulty: difficultyId, wordLenght: word.lenght });
}
