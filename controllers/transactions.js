// @desc    GET all transactions
// @route   GET /api/v1/transactions
// @access  Public
exports.getTransactions  = (req, res, next) => {
    res.send('GET Transactions');
}