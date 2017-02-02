exports.addProduct = function(req, res) {
    if (Array.isArray(req.session.cart)) {
        req.session.cart.push(req.body)
    } else {
        req.session.cart = [req.body]
    }
    res.status(200).send('ok');
}
exports.get = function(req, res) {
    res.status(200).json(req.session.cart);
}
