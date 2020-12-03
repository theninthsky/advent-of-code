import { readFileSync } from 'fs'

console.log('\n--- Day 2 ---')

const input = readFileSync('./2020/day-2/input.txt', 'utf8')
const inputArr = input.split('\r\n')

const validPasswords = inputArr
  .map(entry => {
    const [policy, [letter], password] = entry.split(' ')
    const [min, max] = policy.split('-')

    return { min, max, letter: letter, password }
  })
  .filter(({ min, max, letter, password }) => {
    const regex = new RegExp(letter, 'g')
    const occurences = (password.match(regex) || []).length

    return occurences >= min && occurences <= max
  }).length

console.log(`Part One: ${validPasswords}`)

/* --- Part Two --- */
const partTwoValidPasswords = inputArr
  .map(entry => {
    const [policy, [letter], password] = entry.split(' ')
    const [positionA, positionB] = policy.split('-')

    return { positionA: +positionA, positionB: +positionB, letter, password: ` ${password}` }
  })
  .filter(
    ({ positionA, positionB, letter, password }) =>
      (password[positionA] === letter && password[positionB] !== letter) ||
      (password[positionA] !== letter && password[positionB] == letter)
  ).length

console.log(`Part Two: ${partTwoValidPasswords}`)
