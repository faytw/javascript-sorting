/* 
泡沫排序法
將陣列內的值依序互相比較，將較大的數字往右移
*/

const random = [5, 11, 99, 23, 80, 2]

function bubbleSort() {
  const copy = random.slice() // 不要改變當前陣列   
  function compareNumber(array) {
    for (let i = 0; i < array.length; i++) {
      let num = array[i]
      let nextNum = array[i + 1]
      if (nextNum < num) {
        const left = nextNum
        const right = num
        copy[i] = left
        copy[i + 1] = right
      }
    }
  }
  // 陣列中有幾個值，就要跑幾次
  for (let i = 0; i < random.length; i++) {
    compareNumber(copy)
  }
  console.log(copy)
}

bubbleSort() // [2, 5, 11, 23, 80, 99]

/*
[5, 11, 23, 99, 80, 2]
[5, 11, 23, 80, 99, 2]
[5, 11, 23, 80, 2, 99]
[5, 11, 23, 2, 80, 99]
[5, 11, 2, 23, 80, 99]
[5, 2, 11, 23, 80, 99]
[2, 5, 11, 23, 80, 99]
*/
