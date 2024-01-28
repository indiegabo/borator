export type GameMessage<T> = {
    purpose: string;
    data: T;
}