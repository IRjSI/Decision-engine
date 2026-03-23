import { findNashEquilibria } from "./solver.js";
const game = {
    players: [
        { id: "A", name: "Player A" },
        { id: "B", name: "Player B" },
        { id: "C", name: "Player C" },
    ],
    actions: {
        A: [
            { id: "X", label: "Option X" },
            { id: "Y", label: "Option Y" },
        ],
        B: [
            { id: "L", label: "Left" },
            { id: "R", label: "Right" },
        ],
        C: [
            { id: "U", label: "Up" },
            { id: "D", label: "Down" },
        ],
    },
    payoffMatrix: {
        "A:X|B:L|C:U": [3, 3, 3],
        "A:X|B:L|C:D": [2, 2, 1],
        "A:X|B:R|C:U": [1, 4, 2],
        "A:X|B:R|C:D": [0, 3, 3],
        "A:Y|B:L|C:U": [4, 1, 2],
        "A:Y|B:L|C:D": [3, 0, 4],
        "A:Y|B:R|C:U": [2, 2, 2],
        "A:Y|B:R|C:D": [1, 1, 5],
    },
};
console.log(findNashEquilibria(game));
//# sourceMappingURL=index.js.map