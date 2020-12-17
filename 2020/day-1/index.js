import { readFileSync } from 'fs'

console.log('*-- Advent of Code 2020 --*\n')
console.log('--- Day 1 ---')

const input = readFileSync('./2020/day-1/input.txt', 'utf8')
const inputArr = input.split('\r\n').map(Number)

const findTwoSummandsProduct = (arr, sum) => {
  const hashMap = {}

  for (const num of arr) {
    if (hashMap[sum - num]) return num * (sum - num)

    hashMap[num] = true
  }
}

console.log(`Part One: ${findTwoSummandsProduct(inputArr, 2020)}`)

/* --- Part Two --- */
const findThreeSummandsProduct = (arr, sum) => {
  const hashMap = {}

  hashMap[arr[0]] = true

  for (let i = 1; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (hashMap[sum - arr[i] - arr[j]]) return arr[i] * arr[j] * (sum - arr[i] - arr[j])
    }

    hashMap[arr[i]] = true
  }
}

console.log(`Part Two: ${findThreeSummandsProduct(inputArr, 2020)}`)
