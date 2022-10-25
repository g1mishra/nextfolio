export const randomShuffleArray = (array: string[], size = 0) => {
  let cloneArr = [...array];
  let newArr: string[] = [];
  for (let index = 0; index < size; index++) {
    let elemIndex = Math.floor(Math.random() * cloneArr.length);
    newArr.push(cloneArr[elemIndex]);
    newArr.push(cloneArr[elemIndex]);
    cloneArr.splice(elemIndex, 1);
  }
  return shuffleArray(newArr);
};

export function shuffleArray(array: string[]) {
  const cloneArr = [...array];

  let currentIndex = cloneArr.length,
    randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [cloneArr[currentIndex], cloneArr[randomIndex]] = [
      cloneArr[randomIndex],
      cloneArr[currentIndex],
    ];
  }

  return cloneArr;
}
