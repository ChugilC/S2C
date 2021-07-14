//@desc    GET all colleges
//@access  public
//@method  GET

exports.getColleges = (req, res, next) => {
    res.json({
        name: 'Velammal institute',
        location: 'Chennai'
    })
}

//@desc    GET a single college data
//@access  public
//@method  GET
exports.getCollege = (req, res, next) => {
    const id = req.params.id;
    res.json({
        name: `College of id ${id}`,
        location: 'Kanyakumari'
    })
}

//@desc   CREATE a college
//@access private
//@method POST
exports.createCollege = (req, res, next) => {
    res.json({
        name: 'RMK material',
        location: 'Kolkata'
    })
}

//@desc  UPDATE a exsisting datd
//@access private
//@method PUT
exports.updateCollege = (req, res, next) => {
    const id = req.params.id;
    res.json({
        name: `College updated at id ${id}`,
        location: 'Sri Lanka'
    })
}

//@desc   DELETE a college data
//@access private
//@method DELETE
exports.deleteCollege = (req, res, next) => {
    const id = req.params.id;
    res.json({
        name: `College deleted at id ${id}`
    })
}