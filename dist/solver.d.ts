import type { Game, StrategyProfile } from "./types.js";
export declare function getPayoff(game: Game, profile: StrategyProfile): number[];
export declare function isBestResponse(game: Game, profile: StrategyProfile, playerIndex: number): boolean;
export declare function findNashEquilibria(game: Game): StrategyProfile[];
//# sourceMappingURL=solver.d.ts.map