export async function GET() {
  return Response.json([
    { id: 1, name: 'Easy' },
    { id: 2, name: 'Medium' },
    { id: 3, name: 'Hard' },
    { id: 4, name: 'Expert' },
  ]);
}