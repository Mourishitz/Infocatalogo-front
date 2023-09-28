export type DateString = `${number}-${number}-${number}`

export type UserResouce = {
    id: number,
    name: string,
    email: string,
    created_at: DateString
}
