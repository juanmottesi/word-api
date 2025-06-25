const difficulties = [
  { id: 1, name: 'Easy' },
  { id: 2, name: 'Medium' },
  { id: 3, name: 'Hard' },
  { id: 4, name: 'Expert' },
];

export const getDifficulty = (id) => {
  return difficulties.find((d) => d.id === parseInt(id));
}

export default difficulties;