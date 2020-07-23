/* 
合併排序法
切一半，左右兩半各自排序
比較左右兩邊取較小值
*/

const random = [5, 11, 99, 23, 80, 2, 7, 1]

const  mergeSort = (array) => {
  return cutArray(array)
}

const  merge = (left, right) => {
  let leftIndex = 0
  let rightIndex = 0
  let nowIndex = 0
  let answer = []
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
  return answer
}

const cutArray = (array) => {
  const length = array.length
  if (length <= 1) return array
  const middle = Math.floor(length / 2)
  // 先切一半
  const left = array.slice(0, middle)
  const right = array.slice(middle, length)
  // 將兩邊分別再切一半，排序
  const sortLeftArray = cutArray(left)
  const sortRightArray = cutArray(right)
  // 合併
  return merge(sortLeftArray, sortRightArray)
}

console.log(mergeSort(random)) // [1, 2, 5, 7, 11, 23, 80, 99]
