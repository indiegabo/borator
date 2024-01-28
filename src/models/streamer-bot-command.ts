export type StreamerBotCommand = {
    sources: number[],
    permittedUsers: string[],
    permittedGroups: string[],
    id: string,
    name: string,
    enabled: boolean,
    include: boolean,
    mode: number,
    command: string,
    location: number,
    ignoreBotAccount: boolean,
    ignoreInternal: boolean,
    persistCounter: boolean,
    counter: number,
    persistUserCounter: boolean,
    userCounters: { [key: string]: number },
    caseSensitive: boolean,
    globalCooldown: number,
    userCooldown: number,
    group: string,
    grantType: number
}

export type StreamerBotCommandsFile = {
    collapsedGroups: string[],
    version: number,
    t: Date,
    commands: StreamerBotCommand[],
}