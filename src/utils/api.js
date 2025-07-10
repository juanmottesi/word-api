export const errorResponse = (status, message) => {
  return new Response(JSON.stringify({ message }), {
    status,
    headers: { "Content-Type": "application/json", 'Access-Control-Allow-Origin': '*' },
  });
}

export const jsonResponse = (data, headers = {}) => {
  return Response.json(
    data,
    { headers: { ...headers, 'Access-Control-Allow-Origin': '*' } },
  );
}

export const optionsResponse = () => {
  return new Response(null, {
    status: 204,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    },
  })
}
