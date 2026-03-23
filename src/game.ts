import type { Game, StrategyProfile } from "./types.js";

export function serializeProfile(profile: StrategyProfile): string {
    return Object.entries(profile)
        .sort(([a], [b]) => a.localeCompare(b))
        .map(([player, action]) => `${player}:${action}`)
        .join("|")
}

/* INPUT
{
  P2: "D",
  P1: "C"
}
*/

/* OUTPUT
"P1:C|P2:D"
*/

export function generateProfiles(game: Game): StrategyProfile[] {
    const players = game.players

    function helper(index: number, current: StrategyProfile): StrategyProfile[] {
        if (index === players.length) return [current]
        
        const player = players[index]
        const actions = game.actions[player!.id]

        let result: StrategyProfile[] = []

        for (const action of actions!) {
            result = result.concat(
                helper(index + 1, {
                    ...current,
                    [player!.id]: action.id,
                })
            )
        }

        return result
    }

    return helper(0, {})
}

