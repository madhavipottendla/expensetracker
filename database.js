const express = require('express');
const sqlite3 = require('sqlite3').verbose();

const app = express();
const PORT = process.env.PORT || 3800;
const DB_PATH = './database.db'; // Path to your SQLite database file

// Connect to SQLite database
const db = new sqlite3.Database(DB_PATH, (err) => {
    if (err) {
        console.error('Error connecting to database:', err.message);
    } else {
        console.log('Connected to the database.');
        // Create the users table if it doesn't exist
       
        db.run('CREATE TABLE IF NOT EXISTS signup (id INTEGER PRIMARY KEY AUTOINCREMENT, username TEXT, email TEXT, password TEXT)', (err) => {
            if (err) {
                console.error('Error creating users table:', err.message);
            } else {
                console.log('Users table created successfully.');
            }
        });

      
        db.run('CREATE TABLE IF NOT EXISTS  sendingmoney (id INTEGER PRIMARY KEY AUTOINCREMENT, sender TEXT, recipient TEXT, amount INTEGER)', (err) => {
            if (err) {
                console.error('Error creating transactions table:', err.message);
            } else {
                console.log('sendingmoney table created successfully.');
            }
        });
        db.run('CREATE TABLE IF NOT EXISTS transactions (id INTEGER PRIMARY KEY AUTOINCREMENT, Date TEXT, discription TEXT, amount INTEGER)', (err) => {
            if (err) {
                console.error('Error creating transactions table:', err.message);
            } else {
                console.log('Transactions table created successfully.');
            }
        });
        db.run('CREATE TABLE IF NOT EXISTS upload (id INTEGER PRIMARY KEY AUTOINCREMENT, uri BLOB, type TEXT, data Text)', (err) => {
            if (err) {
                console.error('Error creating transactions table:', err.message);
            } else {
                console.log('upload table created successfully.');
            }
        });
    }
});

// Middleware to parse JSON body
app.use(express.json());

// Define API routes for users
// POST new user (signup)
app.post('/api/signup', (req, res) => {
    const { username, email, password } = req.body;
    
    if (!username || !email || !password) {
        return res.status(400).json({ error: 'Username, email, and password are required.' });
    }

    // Insert new user into the database
    const sql = 'INSERT INTO signup (username, email, password) VALUES (?, ?, ?)';
    db.run(sql, [username, email, password], function (err) {
        if (err) {
            console.error('Error inserting into users database:', err.message);
            return res.status(500).json({ error: 'Internal server error' });
        }
        console.log('Inserted new user with ID:', this.lastID);
        return res.status(201).json({ message: 'User created successfully', id: this.lastID });
    });
});

// GET all users signed up
app.get('/api/signup', (req, res) => {
    db.all('SELECT * FROM signup', (err, rows) => {
        if (err) {
            console.error('Error querying signup database:', err.message);
            res.status(500).json({ error: 'Internal server error' });
        } else {
            res.json(rows);
        }
    });
});
// GET user data by email
app.get('/api/user/:email', (req, res) => {
    const email = req.params.email;

    // Query the database to fetch user data based on email
    const sql = 'SELECT * FROM signup WHERE email = ?';
    db.get(sql, [email], (err, row) => {
        if (err) {
            console.error('Error querying user data by email:', err.message);
            res.status(500).json({ error: 'Internal server error' });
        } else {
            if (row) {
                // User found
                res.json(row);
            } else {
                // User not found
                res.status(404).json({ error: 'User not found' });
            }
        }
    });
});


// GET all users
// app.get('/api/users', (req, res) => {
//     db.all('SELECT * FROM users', (err, rows) => {
//         if (err) {
//             console.error('Error querying users database:', err.message);
//             res.status(500).json({ error: 'Internal server error' });
//         } else {
//             res.json(rows);
//         }
//     });
// });

// POST new user
// app.post('/api/users', (req, res) => {
//     const { username, email } = req.body;
    
//     if (!username || !email) {
//         return res.status(400).json({ error: 'Username and email are required.' });
//     }

//     // Insert new user into the database
//     const sql = 'INSERT INTO users (username, email) VALUES (?, ?)';
//     db.run(sql, [username, email], function (err) {
//         if (err) {
//             console.error('Error inserting into users database:', err.message);
//             return res.status(500).json({ error: 'Internal server error' });
//         }
//         console.log('Inserted new user with ID:', this.lastID);
//         return res.status(201).json({ message: 'User created successfully', id: this.lastID });
//     });
// });
// app.delete('/api/users/:id', (req, res) => {
//     const id = req.params.id;
//     db.run('DELETE FROM users WHERE id = ?', [id], (err) => {
//         if (err) {
//             console.error('Error deleting user:', err.message);
//             res.status(500).json({ error: 'Internal server error' });
//         } else {
//             console.log('User deleted successfully.');
//             res.json({ message: 'User deleted successfully' });
//         }
//     });
// });
// ==================================================================================================================================
// Define API routes for transactions

// GET all transactions
// app.get('/api/transactions', (req, res) => {
//     db.all('SELECT * FROM transactions', (err, rows) => {
//         if (err) {
//             console.error('Error querying transactions database:', err.message);
//             res.status(500).json({ error: 'Internal server error' });
//         } else {
//             res.json(rows);
//         }
//     });
// });

// POST new transaction
// app.post('/api/transactions', (req, res) => {
//     const { Date, discription, amount } = req.body;
    
//     if (!Date || !discription || !amount) {
//         return res.status(400).json({ error: 'Date, discription, and amount are required.' });
//     }

//     // Insert new transaction into the database
//     const sql = 'INSERT INTO transactions (Date, discription, amount) VALUES (?, ?, ?)';
//     db.run(sql, [Date, discription, amount], function (err) {
//         if (err) {
//             console.error('Error inserting into transactions database:', err.message);
//             return res.status(500).json({ error: 'Internal server error' });
//         }
//         console.log('Inserted new transaction with ID:', this.lastID);
//         return res.status(201).json({ message: 'Transaction created successfully', id: this.lastID });
//     });
// });
// app.delete('/api/transactions/:id', (req, res) => {
//     const id = req.params.id;
//     db.run('DELETE FROM transactions WHERE id = ?', [id], (err) => {
//         if (err) {
//             console.error('Error deleting transaction:', err.message);
//             res.status(500).json({ error: 'Internal server error' });
//         } else {
//             console.log('Transaction deleted successfully.');
//             res.json({ message: 'Transaction deleted successfully' });
//         }
//     });
// });

// =============================================================================================================================
// app.get('/api/sendingmoney', (req, res) => {
//     db.all('SELECT * FROM sendingmoney', (err, rows) => {
//         if (err) {
//             console.error('Error querying sendingmoney database:', err.message);
//             res.status(500).json({ error: 'Internal server error' });
//         } else {
//             res.json(rows);
//         }
//     });
// });

// POST new transaction
// app.post('/api/sendingmoney', (req, res) => {
//     const { sender, recipient, amount } = req.body;
    
//     if (!sender || !recipient || !amount) {
//         return res.status(400).json({ error: 'Date, description, and amount are required.' });
//     }

//     // Insert new transaction into the database
//     const sql = 'INSERT INTO sendingmoney (sender, recipient, amount) VALUES (?, ?, ?)';
//     db.run(sql, [sender, recipient, amount], function (err) {
//         if (err) {
//             console.error('Error inserting into sendingmoney database:', err.message);
//             return res.status(500).json({ error: 'Internal server error' });
//         }
//         console.log('Inserted new transaction with ID:', this.lastID);
//         return res.status(201).json({ message: 'transfer created successfully', id: this.lastID });
//     });
// });
// app.delete('/api/sendingmoney/:id', (req, res) => {
//     const id = req.params.id;
//     db.run('DELETE FROM sendingmoney WHERE id = ?', [id], (err) => {
//         if (err) {
//             console.error('Error deleting transaction:', err.message);
//             res.status(500).json({ error: 'Internal server error' });
//         } else {
//             console.log('Transaction deleted successfully.');
//             res.json({ message: 'Transaction deleted successfully' });
//         }
//     });
// });

// ==================================================================================================================================
// app.get('/api/upload', (req, res) => {
//     db.all('SELECT * FROM upload', (err, rows) => {
//         if (err) {
//             console.error('Error querying upload database:', err.message);
//             res.status(500).json({ error: 'Internal server error' });
//         } else {
//             res.json(rows);
//         }
//     });
// });

// POST new transaction
// app.post('/api/upload', (req, res) => {
//     const { uri, type, data } = req.body;
    
//     if (!uri || !type || !data) {
//         return res.status(400).json({ error: 'uri, type, and data are required.' });
//     }

//     // Insert new transaction into the database
//     const sql = 'INSERT INTO upload (uri, type, data) VALUES (?, ?, ?)';
//     db.run(sql, [uri, type, data], function (err) {
//         if (err) {
//             console.error('Error inserting into upload database:', err.message);
//             return res.status(500).json({ error: 'Internal server error' });
//         }
//         console.log('Inserted new transaction with ID:', this.lastID);
//         return res.status(201).json({ message: 'upload created successfully', id: this.lastID });
//     });
// });
// app.delete('/api/upload/:id', (req, res) => {
//     const id = req.params.id;
//     db.run('DELETE FROM upload WHERE id = ?', [id], (err) => {
//         if (err) {
//             console.error('Error deleting transaction:', err.message);
//             res.status(500).json({ error: 'Internal server error' });
//         } else {
//             console.log('upload deleted successfully.');
//             res.json({ message: 'upload deleted successfully' });
//         }
//     });
// });

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});