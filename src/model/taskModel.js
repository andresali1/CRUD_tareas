async function getAll(req) {
   await req.getConnection((err, conn) => {
        conn.query('SELECT * FROM tasks', (err, tasks) => {
            if(err) {
                return err;
            }
            return tasks;
        })
    })
}

module.exports = {
    getAll: getAll
}