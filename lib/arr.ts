export const randomShuffleArray = (array: string[], size = 0) => {
  let cloneArr = [...array];
  let newArr: string[] = [];
  for (let index = 0; index < size; index++) {
    let elemIndex = Math.floor(Math.random() * cloneArr.length);
    newArr.push(cloneArr[elemIndex], cloneArr[elemIndex]);
    cloneArr.splice(elemIndex, 1);
  }
  return shuffleArray(newArr);
};

export const shuffleArray = (array: string[] | object[]) => {
  const arr = [...array];
  for (let index = array.length - 1; index >= 0; index--) {
    let randomIndex = Math.floor(Math.random() * index);
    [arr[index], arr[randomIndex]] = [arr[randomIndex], arr[index]];
  }
  return arr;
};
