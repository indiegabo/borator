export type HypeTrainStart = {
    level: number;
    levelGoal: number;
    levelTotal: number;
    totalGoal: number;
    total: number;
    percent: number;
};

export type HypeTrainUpdate = {
    userId: number;
    level: number;
    contributors: number;
    levelGoal: number;
    levelTotal: number;
    totalGoal: number;
    total: number;
    percent: number;
}

export type HypeTrainLevelUp = {
    prevLevel: number;
    level: number;
    contributors: number;
    levelGoal: number;
    levelTotal: number;
    totalGoal: number;
    total: number;
    percent: number;
}

export type HypeTrainEnd = {
    conductor: {
        id: number;
    },
    level: number;
    contributorCount: number;
    contributors: {
        id: number;
    }[],
    levelGoal: number;
    levelTotal: number;
    totalGoal: number;
    total: number;
    percent: number;
};