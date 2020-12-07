import { readFileSync } from 'fs'

console.log('*-- Advent of Code 2020 --*\n')
console.log('--- Day 1 ---')

const input = readFileSync('./2020/day-1/input.txt', 'utf8')
const inputArr = input.split('\r\n').map(Number)

for (let i = 0; i < inputArr.length - 1; i++)
  for (let j = i + 1; j < inputArr.length; j++) {
    if (inputArr[i] + inputArr[j] === 2020) {
      console.log(`Part One: ${inputArr[i] * inputArr[j]}`)
      break
    }
  }

/* --- Part Two --- */
for (let i = 0; i < inputArr.length - 2; i++)
  for (let j = i + 1; j < inputArr.length - 1; j++)
    for (let k = j + 1; k < inputArr.length; k++) {
      if (inputArr[i] + inputArr[j] + inputArr[k] === 2020) {
        console.log(`Part Two: ${inputArr[i] * inputArr[j] * inputArr[k]}`)
        break
      }
    }
