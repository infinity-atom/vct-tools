type PlayerOverlayFeatures = {
  playerAbilities: boolean;
  playerHealth: boolean;
  playerCredits: boolean;
  agentImages: boolean;
  playerLoadout: boolean;
  playerKDA: boolean;
};

type GameOverviewVisible = {
  KDA: boolean;
  loadout: boolean;
  abilities: boolean;
  shields: boolean;
  agentImages: boolean;
  matchLog: boolean;
};

type OtherOverlayFeatures = {
  gameOverviewDuringBuyPhase: boolean;
  roundOutcomeBanner: boolean;
};

type RoundOutcomeBanner = {
  clutch: boolean;
  flawless: boolean;
  ace: boolean;
  teamAce: boolean;
  thrifty: boolean;
};

type OverlaySettings = {
  playerOverlayFeatures: PlayerOverlayFeatures;
  gameOverviewVisible: GameOverviewVisible;
  otherOverlayFeatures: OtherOverlayFeatures;
  roundOutcomeBanner: RoundOutcomeBanner;
  nameType: "Name" | "Name and tagline";
  attackerTeamName: string;
  defenderTeamName: string;
};

function createDefaultOverlaySettings(): OverlaySettings {
  return {
    nameType: "Name",
    attackerTeamName: "Team 1",
    defenderTeamName: "Team 2",
    playerOverlayFeatures: {
      playerAbilities: true,
      playerHealth: true,
      playerCredits: true,
      agentImages: true,
      playerLoadout: true,
      playerKDA: true
    },
    gameOverviewVisible: {
      KDA: true,
      loadout: true,
      abilities: true,
      shields: true,
      agentImages: true,
      matchLog: true
    },
    otherOverlayFeatures: {
      gameOverviewDuringBuyPhase: true,
      roundOutcomeBanner: true
    },
    roundOutcomeBanner: {
      clutch: true,
      flawless: true,
      ace: true,
      teamAce: true,
      thrifty: false
    }
  };
}

export { type OverlaySettings, createDefaultOverlaySettings };
