import { readFileSync } from 'fs'

console.log('\n--- Day 9 ---')

const input = readFileSync('./2020/day-9/input.txt', 'utf-8')
const list = input.split('\r\n').map(Number)

const isSummable = (arr, sum) => {
  for (let i = 0; i < arr.length - 1; i++)
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === sum) return true
    }

  return false
}

const findInvalidNumber = (list, preambleLength) => {
  for (let i = preambleLength; i < list.length; i++) {
    const sequence = list.slice(i - preambleLength, i)

    if (!isSummable(sequence, list[i])) return list[i]
  }
}

const invalidNumber = findInvalidNumber(list, 25)

console.log(`Part One: ${invalidNumber}`)

/* --- Part Two --- */
const findEncryptionWeakness = (list, invalidNumber) => {
  for (let i = 0; i < list.length - 1; i++)
    for (let j = i; j < list.length; j++) {
      const sequence = list.slice(i, j + 1)

      if (sequence.reduce((sum, num) => sum + num) === invalidNumber) {
        return Math.min(...sequence) + Math.max(...sequence)
      }
    }
}

console.log(`Part Two: ${findEncryptionWeakness(list, invalidNumber)}`)
