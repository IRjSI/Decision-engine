export type PlayerId = string;
export type ActionId = string;
export type Player = {
    id: PlayerId;
    name: string;
};
export type Action = {
    id: ActionId;
    label: string;
};
export type Payoff = number[];
export type StrategyProfile = Record<PlayerId, ActionId>;
export type Game = {
    players: Player[];
    actions: Record<PlayerId, Action[]>;
    payoffMatrix: Record<string, Payoff>;
};
//# sourceMappingURL=types.d.ts.map