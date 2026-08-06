export const GAME_CONFIG = {
  maxPlayers: 100,
  minPlayers: 2,
  tickRate: 1000 / 60,
  leaderboardSize: 10,

  player: {
    startMass: 25,
    startRadius: 20,
    maxMass: 5000,
    speed: 5,
    respawnTime: 3000,
    maxSplits: 16,
  },

  cooldowns: {
    split: 300,
    eject: 100,
  },
} as const;