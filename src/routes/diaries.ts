import express from 'express';
import * as diaryServies from '../services/diaryServices'; 
import toNewDiaryEntry from '../utils';

const router = express.Router();

router.get('/', (_req, res) => {
    const diaries = diaryServies.getEntriesWithoutSensitiveInfo();
    res.send(diaries);
})

router.get('/:id', (req, res) => {
    const diary = diaryServies.findById(Number(req.params.id));
    return (diary !== null)
    ? res.send(diary)
    : res.sendStatus(404)
});

router.post('/', (req, res) => {
    try {
        //We create a suplementary function to typecheck all the data received.
        const newDiaryEntry = toNewDiaryEntry(req.body);
        const addedDiaryEntry = diaryServies.addDiaryEntry(newDiaryEntry);
        res.json(addedDiaryEntry);
    } catch (error) {
        res.status(400).send(error)
    }

});

export default router