import { Badge } from "./Badge";
import { Emote } from "./Emote";
import { StreamerBotTwitchUserRole } from "./streamer-bot-twitch-user";

export type Sub = {
    subTier: SubTier;
    color: string;
    emotes: Emote[];
    message: string;
    userId: number;
    userName: string;
    displayName: string;
    role: StreamerBotTwitchUserRole;
};

export type ReSub = {
    cumulativeMonths: number;
    shareStreak: boolean;
    streakMonths: number;
    subTier: SubTier;
    color: string;
    emotes: Emote[];
    badges: Badge[];
    message: string;
    userId: number;
    userName: string;
    displayName: string;
    role: StreamerBotTwitchUserRole;
    isTest: boolean;
};

export type GiftSub = {
    isAnonymous: boolean;
    totalSubsGifted: number;
    cumulativeMonths: number;
    monthsGifted: number;
    fromSubBomb: boolean;
    subBombCount: number;
    recipientUserId: number;
    recipientUsername: string;
    recipientDisplayName: string;
    subTier: SubTier;
    userId: number;
    userName: string;
    displayName: string;
    role: StreamerBotTwitchUserRole;
};

export type GiftBomb = {
    isAnonymous: boolean;
    gifts: number;
    totalGifts: number;
    subTier: SubTier;
    userId: number;
    userName: string;
    displayName: string;
    role: StreamerBotTwitchUserRole;
}

export enum SubTier {
    Prime = 0,
    Tier1 = 1,
    Tier2 = 2,
    Tier3 = 3
}