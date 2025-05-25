import Questions from '../models/questionSchema.js';
import Results from '../models/resultSchema.js';
import questions, { answers } from '../database/data.js';

/** get all questions */
export async function getQuestions(req, res) {
    try {
        const q = await Questions.find();

        res.json(q);
    } catch (error) {
        console.error("MongoDB Fetch Error:", error);
        res.status(500).json({ error: error.message });
    }
}

/** insert all questions */
export async function postQuestions(req, res) {
    try {
        const data = await Questions.insertMany([{ questions, answers }]);
        res.json({ msg: "Data Saved Successfully!" });
    } catch (error) {
        res.json({ error });
    }
}

/** Delete all questions */
export async function deleteQuestions(req, res) {
    try {
        await Questions.deleteMany();
        res.json({ msg: 'Questions Deleted Succesfully...!' });
    } catch (error) {
        res.json({ error });
    }
}

/** get all result */
export async function getResult(req, res) {
    try {
        const r = await Results.find();
        res.json(r);
    } catch (error) {
        res.json({ error });
    }
}

/** post all result */
export async function postResult(req, res) {
    try {
        const { username, result, attempts, points, achieved } = req.body;

        if (!username || result === undefined) {
            throw new Error('Data Not Provided...!');
        }
        await Results.create({ username, result, attempts, points, achieved });

        res.json({ msg: 'Result Saved Successfully...!' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

/** delete all result */
export async function deleteResult(req, res) {
    try {
        await Results.deleteMany();
        res.json({ msg: 'Results Deleted Succesfully...!' });
    } catch (error) {
        res.json({ error });
    }
}