import { jsonResponse, optionsResponse } from "@/utils/api";
import difficulties from "./difficulties";

export async function OPTIONS() {
  return optionsResponse();
}

export async function GET() {
  return jsonResponse(difficulties);
}
