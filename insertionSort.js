/* 
插入排序法
由左往右找符合條件的位置插入
遇到比自己小的數值就往右移
*/

const random = [5, 11, 99, 23, 80, 2]

function insertionSort() {
  const copy = random.slice() // 不要改變當前陣列   
  function changedNumberPosition(array) {
    for (let i = 0; i < array.length; i++) {
      const value = array[i]
      const position = i + 1
      while (i >= 0 && array[position] > value) {
        copy.splice(i, 1)
        copy.splice(position, 0, value)
      }
    }
  }
  // 陣列中有幾個值，就要跑幾次
  for (let i = 0; i < random.length; i++) {
    changedNumberPosition(copy)
  }
  console.log(copy)
}

insertionSort() // [99, 80, 23, 11, 5, 2]

/*
[11, 5, 99, 23, 80, 2]
[11, 99, 5, 23, 80, 2]
[11, 99, 23, 5, 80, 2]
[11, 99, 23, 80, 5, 2]
[99, 11, 23, 80, 5, 2]
[99, 23, 11, 80, 5, 2]
[99, 23, 80, 11, 5, 2]
[99, 80, 23, 11, 5, 2]
*/
