import { jsonResponse, optionsResponse } from "@/utils/api";

export async function OPTIONS() {
  return optionsResponse();
}

export async function GET() {
  return jsonResponse([
    { id: 1, name: 'Easy' },
    { id: 2, name: 'Medium' },
    { id: 3, name: 'Hard' },
    { id: 4, name: 'Expert' },
  ]);
}
