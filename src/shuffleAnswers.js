function shuffleAnswerSet(arr) {
  let newPos, temp;

  for (let i = arr.length - 1; i > 0; i--) {
    newPos = Math.floor(Math.random() * (i + 1));
    temp = arr[i];
    arr[i] = arr[newPos];
    arr[newPos] = temp;
  }

  return arr;
}

export default shuffleAnswerSet;
