/* 
選擇排序法
比較陣列內的值，找出陣列中的最小值
*/

const random = [5, 11, 99, 23, 80, 2]

function selectionSort() {
  const copy = random.slice() // 不要改變當前陣列 
  const answer = []
  function findMinValue(array) {
    let min = array[0]
    for (let i = 0; i < array.length; i++) {
      if (array[i] < min) {
        min = array[i]
        copy.splice(i, 1) // 移除當輪最小值
        return min
      } else { // 陣列中的值都找完了，最小值就是預設值
        if (i === array.length - 1) {
          copy.splice(0, 1)
          return min
        }
      }
    }
  }
  // 陣列中有幾個值，就要跑幾次
  for (let i = 0; i < random.length; i++) {
    // 將每輪查找到的最小值依序放入陣列
    const min = findMinValue(copy)
    answer.push(min)
  }
  console.log(answer)
}

selectionSort() // [2, 5, 11, 23, 80, 99]


/*
[5, 11, 99, 23, 80, 2]
[5, 11, 99, 23, 80, 2]
[5, 11, 99, 23, 80, 2]
[5, 11, 99, 23, 80, 2]
[5, 11, 99, 23, 80, 2]
[5, 11, 99, 23, 80]
[5, 11, 99, 23, 80]
[5, 11, 99, 23, 80]
[5, 11, 99, 23, 80]
[11, 99, 23, 80]
[11, 99, 23, 80]
[11, 99, 23, 80]
[99, 23, 80]
[99, 80]
*/
