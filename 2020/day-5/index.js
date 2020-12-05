import { readFileSync } from 'fs'

const BACK = 'B'
const RIGHT = 'R'

console.log('\n--- Day 5 ---')

const input = readFileSync('./2020/day-5/input.txt', 'utf-8')
const seats = input.split('\r\n')
const seatIDs = []
let heightSeatID = 0

const parseSeat = (code, seatRange, upper) => {
  if (code.length === 1) return seatRange[code === upper ? 1 : 0]

  const [low, high] = seatRange

  code[0] === upper ? (seatRange[0] = Math.ceil((low + high) / 2)) : (seatRange[1] = Math.floor((low + high) / 2))

  return parseSeat(code.slice(1), seatRange, upper)
}

for (const seat of seats) {
  const row = parseSeat(seat.slice(0, 7), [0, 127], BACK)
  const column = parseSeat(seat.slice(7), [0, 7], RIGHT)
  const seatID = row * 8 + column

  seatIDs.push(seatID)

  if (seatID > heightSeatID) heightSeatID = seatID
}

console.log(`Part One: ${heightSeatID}`)

/* --- Part Two --- */
seatIDs.sort((a, b) => a - b)

for (let i = 0; i < heightSeatID; i++) {
  if (seatIDs[i + 1] - seatIDs[i] > 1) {
    console.log(`Part Two: ${seatIDs[i] + 1}`)
    break
  }
}
