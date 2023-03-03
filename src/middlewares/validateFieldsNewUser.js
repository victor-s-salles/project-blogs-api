 const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

const fieldsExists = (displayName, email, password) => displayName && email && password;

module.exports = (req, res, next) => {
    const { displayName, email, password } = req.body;
    
    if (!fieldsExists(displayName, email, password)) {
        return res.status(400).json({ message: 'Some required fields are missing' });
    }

    if (displayName.length < 8) {
        return res.status(400)
                .json({ message: '"displayName" length must be at least 8 characters long' });
    }

    if (!validateEmail(email)) {
        return res.status(400)
                .json({ message: '"email" must be a valid email' });
    }

    if (password.length < 6) {
        return res.status(400)
                .json({ message: '"password" length must be at least 6 characters long' });
    }
    next();
};