import { readFileSync } from 'fs'

console.log('\n--- Day 10 ---')

const input = readFileSync('./2020/day-10/input.txt', 'utf-8')
const adapters = input.split('\r\n').map(Number)
const differencesMap = {}

adapters.sort((a, b) => a - b)

for (let i = 0; i < adapters.length - 1; i++) {
  const difference = adapters[i + 1] - adapters[i]

  differencesMap[difference] ? differencesMap[difference]++ : (differencesMap[difference] = 1)
}

differencesMap[adapters[0]]++
differencesMap[3]++

console.log(`Part One: ${differencesMap[1] * differencesMap[3]}`)

/* --- Part Two --- */
