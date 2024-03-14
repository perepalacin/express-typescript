import { DiaryEntry, NewDiaryEntry, NonSensitiveInfoDiaryEntry } from '../types'
import diaryData from './diaries.json'

const diaries: DiaryEntry[] = diaryData as DiaryEntry[];

export const getEntries = () => diaries;

//The find method can miss to find anything and therefore, may return an undefined!
export const findById = (id: number): NonSensitiveInfoDiaryEntry | undefined => {
    const entry = diaries.find(diary => diary.id === id);
    if (entry != null) {
        const { comment, ...restOfDiary} = entry;
        return restOfDiary;
    }
    return undefined;
}

export const getEntriesWithoutSensitiveInfo = (): NonSensitiveInfoDiaryEntry[] => {
    return diaries.map(({id, date, userName, gender}) => {
        return {
            id,
            date,
            userName,
            gender
        }
    })
};


export const addDiaryEntry = (newDiaryBody: NewDiaryEntry): DiaryEntry => {
    
    const newDiaryEntry = {
        id: diaries.length,
        ...newDiaryBody
    };

    diaries.push(newDiaryEntry);
    return newDiaryEntry;
};
