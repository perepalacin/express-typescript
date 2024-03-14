export enum Gender {
    Male = "male",
    Female = "female"
}

export interface DiaryEntry {
    id: number,
    date: string,
    userName: string,
    gender: Gender,
    comment: string,
}

// export type NonSensitiveInfoDiaryEntry = Pick<DiaryEntry, "id" | "date" | "gender">;
export type NonSensitiveInfoDiaryEntry = Omit<DiaryEntry, 'comment'>;

export type NewDiaryEntry = Omit<DiaryEntry, 'id'>;