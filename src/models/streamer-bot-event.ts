export type StreamerBotEvent<T> = {
    timestamp: Date,
    event: { source: string, type: string },
    data: T,
}