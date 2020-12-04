import { readFileSync } from 'fs'

console.log('\n--- Day 4 ---')

const input = readFileSync('./2020/day-4/input.txt', 'utf-8')
const passportFields = {
  byr: /(19[2-8][0-9]|199[0-9]|200[0-2])/,
  iyr: /(201[0-9]|2020)/,
  eyr: /(202[0-9]|2030)/,
  hgt: /^(1[5-8][0-9]|19[0-3])cm$|^(59|6[0-9]|7[0-6])in$/,
  hcl: /^#[0-9a-f]{6}$/,
  ecl: /(amb|blu|brn|gry|grn|hzl|oth)/,
  pid: /^\d{9}$/
}
const passports = input
  .split('\r\n')
  .join(' ')
  .split('  ')
  .map(entry => Object.fromEntries(entry.split(' ').map(cell => cell.split(':'))))

const passportFieldsArr = Object.keys(passportFields)
let partOneValidPassports = 0

for (const passport of passports) {
  if (passportFieldsArr.every(field => passport[field])) partOneValidPassports++
}

console.log(`Part One: ${partOneValidPassports}`)

/* --- Part Two --- */
let partTwoValidPassports = 0

for (const passport of passports) {
  if (passportFieldsArr.every(field => passport[field] && passportFields[field].test(passport[field])))
    partTwoValidPassports++
}

console.log(`Part Two: ${partTwoValidPassports}`)
