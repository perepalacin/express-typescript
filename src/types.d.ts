export type Gender = 'male' | 'female'

export interface DiaryEntry {
    id: number,
    date: string,
    userName: string,
    gender: Gender,
    comment: string,
}