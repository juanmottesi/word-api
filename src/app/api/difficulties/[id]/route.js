import { errorResponse, shuffleArray } from "@/utils/api";
import { wordsByLevel } from "../../checkWord/words";

export async function GET(request, { params }) {
  const { id } = await params;
  const levels = wordsByLevel[id];
  if (!levels) {
    return errorResponse(404, "Difficulty not found");
  }
  const { sessionId } = shuffleArray(levels)[0]
  return Response.json({ sessionId, difficulty: id });
}