import { readFileSync } from 'fs'

console.log('\n--- Day 6 ---')

const input = readFileSync('./2020/day-6/input.txt', 'utf-8')
const groups = input
  .split('\r\n')
  .join()
  .split(',,')
  .map(group => group.split(','))

let positiveCount = 0

groups.forEach(group => (positiveCount += new Set(group.join('')).size))

console.log(`Part One: ${positiveCount}`)

/* --- Part Two --- */
positiveCount = 0

for (const group of groups)
  for (const answer of group[0]) {
    if (group.every(personAnswers => personAnswers.includes(answer))) positiveCount++
  }

console.log(`Part Two: ${positiveCount}`)
