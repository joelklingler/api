const db = require('./db');
const config = require('../config');

async function getAll() {
    const rows = await db.query(
        "SELECT * FROM jumpdays"
    );
    
    return { rows }
};

async function get(id) {
    const rows = await db.query(
        "SELECT * FROM jumpdays WHERE DayId=" + id
    );

    return { rows }
};

async function create(jumpday) {
    console.log(jumpday);
    const result = await db.query(
        `INSERT INTO jumpdays (Comments, flightDuration, Instructor, isCompleted, JumpDate, Pilot, SDL, studentCount) VALUES ('${jumpday.Comments}', '${jumpday.flightDuration}', '${jumpday.Instructor}', '${jumpday.isCompleted}', '${jumpday.JumpDate}', '${jumpday.Pilot}', '${jumpday.SDL}', '${jumpday.studentCount}')`
    );

    let message = "Error in creating a new jumpday";

    if(result.affectedRows) {
        message = "Jumpday successfully created";
        console.log(result.affectedRows);
    }

    return {message};
}

async function update(id, jumpday) {
    const result = await db.query(
        `UPDATE jumpDays
        SET SDL="${jumpday.SDL}", Pilot="${jumpday.Pilot}", Comments="${jumpday.Comments}", flightDuration=${jumpday.flightDuration}, isCompleted=${jumpday.isCompleted}, Instructor="${jumpday.Instructor}", studentCount=${jumpday.studentCount}
        WHERE DayId=${id}`
    );
}

async function remove(id) {
    const result = await db.query(
        `DELETE FROM jumpdays WHERE DayId=${id}`
    );

    let msg = 'Error in deleting jumpday';

    if(result.affectedRows) {
        msg = 'Jumpday deleted successfully';
    }

    return {msg};
}

module.exports = {
    getAll,
    get,
    create,
    update,
    remove
}