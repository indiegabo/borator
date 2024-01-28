export type RewardRedemption = {
    id: string;
    user_id: string;
    user_login: string;
    user_name: string;
    user_input: string;
    status: string;
    reward: Reward;
    redeemed_at: Date; // changed
}

export type Reward = {
    id: string;
    title: string;
    cost: number;
    prompt: string;
}