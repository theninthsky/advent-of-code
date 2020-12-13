import { readFileSync } from 'fs'

console.log('\n--- Day 8 ---')

const input = readFileSync('./2020/day-8/input.txt', 'utf-8')
const instructions = input.split('\r\n').map(instruction => {
  const [operation, argument] = instruction.split(' ')

  return { operation, argument: +argument }
})

const executeInstruction = ({ operation, argument }, line, acc) => {
  switch (operation) {
    case 'jmp':
      line += argument
      break
    case 'acc':
      acc += argument
    default:
      line++
  }

  return [line, acc]
}

const traverseProgram = (line, acc, executedLines) => {
  if (executedLines[line]) return acc

  executedLines[line] = true

  const [nextLine, nextAcc] = executeInstruction(instructions[line], line, acc)
  return traverseProgram(nextLine, nextAcc, { ...executedLines })
}

console.log(`Part One: ${traverseProgram(0, 0, {})}`)

/* --- Part Two (Doesn't Work for Some Reason)  --- */
const fixProgram = (line, acc, executedLines, replaced) => {
  if (executedLines[line]) return
  if (!instructions[line]) return acc

  executedLines[line] = true

  const [nextLine, nextAcc] = executeInstruction(instructions[line], line, acc)
  const res = fixProgram(nextLine, nextAcc, { ...executedLines }, replaced)

  if (res) return res

  const { operation } = instructions[line]

  if (operation === 'acc' || replaced) return

  const altOperation = operation === 'jmp' ? 'nop' : 'jmp'
  const [altLine, altAcc] = executeInstruction({ ...instructions[line], operation: altOperation }, line, acc)

  return fixProgram(altLine, altAcc, { ...executedLines }, true)
}

console.log(`Part Two: ${fixProgram(0, 0, {})}`)
