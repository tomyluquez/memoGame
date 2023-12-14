export const createTable = (quantity: number): number[] => {
  const length = quantity * quantity;
  const totalNumbers = length / 2;
  const arrayMemotest: number[] = [];

  const availableIndices: number[] = Array.from(
    { length },
    (_, index) => index
  );

  for (let i = 1; i <= totalNumbers; i++) {
    const positionRandom1 = getRandomPosition(availableIndices);

    arrayMemotest[positionRandom1] = i;
    removeFromAvailableIndices(availableIndices, positionRandom1);

    const positionRandom2 = getRandomPosition(availableIndices);

    arrayMemotest[positionRandom2] = i;
    removeFromAvailableIndices(availableIndices, positionRandom2);
  }

  return arrayMemotest;
};

const getRandomPosition = (availableIndices: number[]): number => {
  const randomIndex = Math.floor(Math.random() * availableIndices.length);
  return availableIndices[randomIndex];
};

const removeFromAvailableIndices = (
  availableIndices: number[],
  index: number
): void => {
  const indexToRemove = availableIndices.indexOf(index);
  if (indexToRemove !== -1) {
    availableIndices.splice(indexToRemove, 1);
  }
};
