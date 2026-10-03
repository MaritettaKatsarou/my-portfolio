// Figma 65:663: 1440 × 387. Coordinates describe the resting composition.
// Deliberate offsets: original, open, gathered, balanced. All stay at the perimeter.
const pose = (x = 0, y = 0, opacity = 1) => ({ x, y, opacity })

export const HERO_CANVAS = { width: 1440, height: 387 }

export const HERO_BLOCKS = [
  {
    id: 'left-pink', x: 0, y: 2.345, width: 191.314, height: 191.314, color: 'pink', stagger: 0,
    states: [pose(), pose(-30, -24, 0.94), pose(18, -8), pose(-14, -36, 0.96)],
  },
  {
    id: 'left-peach', x: 0, y: 193.659, width: 191.314, height: 191.314, color: 'peach', stagger: 0.42,
    states: [pose(), pose(-46, 34, 0.9), pose(-16, 16), pose(12, 42, 0.96)],
  },
  {
    id: 'top-peach', x: 1030.63, y: 2.345, width: 124.457, height: 124.457, color: 'peach', stagger: 0.24,
    states: [pose(), pose(-56, -28, 0.92), pose(18, -12), pose(-28, -40, 0.96)],
  },
  {
    id: 'top-pink', x: 1155.09, y: 2.345, width: 123.429, height: 123.429, color: 'pink', stagger: 0.66,
    states: [pose(), pose(-16, -44, 0.9), pose(28, -18), pose(-8, -26, 0.95)],
  },
  {
    id: 'top-peach-right', x: 1280.57, y: 2.345, width: 123.429, height: 123.429, color: 'peach', stagger: 0.12,
    states: [pose(), pose(28, -18, 0.96), pose(4, -34, 0.92), pose(38, -10)],
  },
  {
    id: 'right-pink', x: 1405.03, y: 2.345, width: 34.971, height: 123.429, color: 'pink', stagger: 0.54,
    states: [pose(), pose(16, -20, 0.9), pose(4, -40, 0.96), pose(20, -12)],
  },
  {
    id: 'right-peach', x: 1405, y: 125.763, width: 35, height: 141, color: 'peach', stagger: 0.78,
    states: [pose(), pose(16, 10, 0.9), pose(6, 0), pose(22, 20, 0.94)],
  },
  {
    id: 'bottom-pink', x: 947.157, y: 266.973, width: 136, height: 118, color: 'pink', stagger: 0.36,
    states: [pose(), pose(-42, 28, 0.94), pose(28, 12), pose(-14, 42, 0.92)],
  },
  {
    id: 'bottom-peach', x: 1087.16, y: 266.973, width: 136, height: 118, color: 'peach', stagger: 0.84,
    states: [pose(), pose(0, 44, 0.9), pose(34, 22, 0.96), pose(8, 10)],
  },
  {
    id: 'bottom-pink-right', x: 1223.16, y: 266.973, width: 181, height: 118, color: 'pink', stagger: 0.18,
    states: [pose(), pose(34, 18, 0.96), pose(14, 36, 0.92), pose(48, 24)],
  },
]

// Stationary linework anchors the composition while the color planes move.
export const HERO_LINES = [
  { id: 'left', x: 192.343, y: 2.345, length: 382.629, vertical: true },
  { id: 'right', x: 1405.03, y: 2.345, length: 382.629, vertical: true },
  { id: 'top-1', x: 1030.63, y: 2.345, length: 124.457, vertical: true },
  { id: 'top-2', x: 1155.09, y: 2.345, length: 124.457, vertical: true },
  { id: 'top-3', x: 1279.54, y: 2.345, length: 124.457, vertical: true },
  { id: 'bottom-1', x: 1085.06, y: 266.973, length: 118, vertical: true },
  { id: 'bottom-2', x: 1223.06, y: 266.973, length: 118, vertical: true },
  { id: 'left-rule', x: 1.029, y: 193.659, length: 438.171 },
  { id: 'top-rule', x: 476.229, y: 125.773, length: 963.771 },
  { id: 'bottom-rule', x: 363.086, y: 266.545, length: 1076.914 },
  { id: 'peach-slash', x: 460.698, y: 1.414, length: Math.hypot(46, 46), color: 'peach', diagonal: true },
  { id: 'pink-slash', x: 543.892, y: 82.494, length: Math.hypot(102, 102), color: 'pink', diagonal: true },
]
