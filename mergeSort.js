/* 
合併排序法
切一半，左右兩半各自排序
比較左右兩邊取較小值
*/

const random = [5, 11, 99, 23, 80, 2, 7]

function mergeSort() {
  const length = random.length
  if (length <= 1) {
    return random
  } else {
    const middle = Math.floor(length / 2)
    const leftArray = random.slice(0, middle)
    const rightArray = random.slice(middle, length)

    function bubbleSort(randomArray) {
      const copy = randomArray.slice() // 不要改變當前陣列   
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
      return copy
    }

    const left = bubbleSort(leftArray)
    const right = bubbleSort(rightArray)
    let leftIndex = 0
    let rightIndex = 0
    let nowIndex = 0
    const answer = []

    while (left.length > leftIndex && right.length > rightIndex) {
      if (left[leftIndex] < right[rightIndex]) {
        answer[nowIndex++] = left[leftIndex++]
      } else {
        answer[nowIndex++] = right[rightIndex++]
      }
    }

    while (left.length > leftIndex) {
      answer[nowIndex++] = left[leftIndex++]
    }

    while (right.length > rightIndex) {
      answer[nowIndex++] = right[rightIndex++]
    }
    console.log(answer)
  }
}
