import { readFileSync } from 'fs'

console.log('\n--- Day 7 ---')

const input = readFileSync('./2020/day-7/input.txt', 'utf-8')
const rules = input.split('\r\n')
const bags = ['shiny gold']
let lastRulesLength

while (rules.length !== lastRulesLength) {
  lastRulesLength = rules.length

  rules.forEach((rule, ind) => {
    if (bags.some(bag => rule.includes(bag))) {
      const bag = rule.match(/(\w+\s*\w+)\s/)[0].trim()

      if (!bags.includes(bag)) bags.push(bag)

      rules.splice(ind, 1)
    }
  })
}

console.log(`Part One: ${bags.length - 1}`)

/* --- Part Two --- */
const partTwoRules = input.split('\r\n')

const countBags = bag => {
  const rule = partTwoRules.find(rule => rule.startsWith(bag))

  if (rule.includes('no other bags')) return 1

  const bags = rule
    .match(/contain (.*)/)[1]
    .replace(/bags?.?/g, '')
    .trim()
    .split('  ')
    .map(str => {
      const bag = str.replace(' ', ',').split(',')

      return { type: bag[1], amount: +bag[0] }
    })

  return bags.reduce((bagsCount, { type, amount }) => bagsCount + countBags(type) * amount, 1)
}

console.log(`Part Two: ${countBags('shiny gold') - 1}`)
