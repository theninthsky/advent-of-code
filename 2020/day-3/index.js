import { readFileSync } from 'fs'

console.log('\n--- Day 3 ---')

const input = readFileSync('./2020/day-3/input.txt', 'utf-8')
const inputArr = input.split('\r\n')

const traverseTree = (right, down) => {
  let treesEncountered = 0

  for (let i = down, j = right; i < inputArr.length; i += down, j += right) {
    const row = inputArr[i]

    if (row[j % row.length] === '#') treesEncountered++
  }

  return treesEncountered
}

console.log(`Part One: ${traverseTree(3, 1)}`)

/* --- Part Two --- */
console.log(
  `Part Two: ${traverseTree(1, 1) * traverseTree(3, 1) * traverseTree(5, 1) * traverseTree(7, 1) * traverseTree(1, 2)}`
)
