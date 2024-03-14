import { Gender, NewDiaryEntry } from "./types";

const parseComment = (commentFromRequest: any): string => {
    if (!isString(commentFromRequest)) {
        throw new Error('Incorrect or missing comment');
    }
    return commentFromRequest;
}

const parseDate = (dateFromRequest: any): string => {
    if (!isDate(dateFromRequest) || !isString(dateFromRequest)) {
        throw new Error('Incorrect or missing date'); 
    }
    return dateFromRequest;
}

const parseGender = (genderFromRequest: any): Gender => {
    if(!isString(genderFromRequest || !isGender(genderFromRequest))) {
        throw new Error('Incorrect or missing gender');
    }
    return genderFromRequest
}

const parseUserName = (userNameFromRequest: any): string => {
    if (!isString(userNameFromRequest)) {
        throw new Error ('Incorrect or missing username');
    }
    return userNameFromRequest;
}

const isGender = (params: any): boolean => {
    return Object.values(Gender).includes(params);
}

const isDate = (date: string): boolean => {
    return Boolean(Date.parse(date))
}

const isString = (string: string): boolean => {
    return (typeof string === "string") 
}

const toNewDiaryEntry = (object: any): NewDiaryEntry => {
    const newDiaryEntry: NewDiaryEntry = {
        //First we parse the comment to make sure its a string;
        comment: parseComment(object.comment),
        date: parseDate(object.date),
        gender: parseGender(object.gender),
        userName: parseUserName(object.userName),
    }
    return newDiaryEntry;
}

export default toNewDiaryEntry;