const db = require('./db');
const config = require('../config');

async function getAll() {
    const loads = await db.query("SELECT * FROM loads");

    return { loads };
}

async function getAllRichByDay(dayId) {
    // get loads of this day
    const loads = await db.query(
        `SELECT * FROM loads WHERE fk_JumpDays_Id=${dayId}`
    );

    // get jumps of loads
    for(const load of loads) {
        const jumps = await db.query(
            `SELECT * FROM jumps
            WHERE fk_loads_id=${load.LoadId}`
        );
        // get jumper and jumptype per jump
        for(const jump of jumps) {
            const jumper = await db.query(
                `SELECT * FROM jumpers
                WHERE JumperId=${jump.fk_jumper_id}`
            );
            jump.jumper = jumper[0];

            const type = await db.query(
                `SELECT * FROM jump_types
                WHERE TypeId=${jump.fk_jump_types_id}`
            );
            jump.type = type[0];
        }
        load.jumps = jumps;
    }
    
    return loads;
}

module.exports = {
    getAllRichByDay,
    getAll
}