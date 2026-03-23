import { serializeProfile, generateProfiles } from "./game.js";
export function getPayoff(game, profile) {
    const key = serializeProfile(profile);
    return game.payoffMatrix[key];
}
export function isBestResponse(game, profile, playerIndex) {
    const player = game.players[playerIndex];
    const currentAction = profile[player.id];
    const currentPayoff = getPayoff(game, profile)[playerIndex];
    const actions = game.actions[player.id];
    for (const action of actions) {
        if (action.id === currentAction)
            continue;
        const newProfile = { ...profile, [player.id]: action.id };
        const newPayoff = getPayoff(game, newProfile)[playerIndex];
        if (newPayoff > currentPayoff) {
            return false;
        }
    }
    return true;
}
export function findNashEquilibria(game) {
    const profiles = generateProfiles(game);
    const equilibria = [];
    for (const profile of profiles) {
        let isEquilibrium = true;
        for (let i = 0; i < game.players.length; i++) {
            if (!isBestResponse(game, profile, i)) {
                isEquilibrium = false;
                break;
            }
        }
        if (isEquilibrium) {
            equilibria.push(profile);
        }
    }
    return equilibria;
}
//# sourceMappingURL=solver.js.map