// middleware pour la validité du formulaire sauce


module.exports = (req,res,next) => {
    //Regex

const regexName = /^[0-9a-zA-ZáàâäãåçéèêëíìîïñóòôöõúùûüýÿæœÁÀÂÄÃÅÇÉÈÊËÍÌÎÏÑÓÒÔÖÕÚÙÛÜÝŸÆŒ.!@&-_\s]{3,20}$/; // a utilisé pour le nom de la sauce et le créateur
// const regexDescription = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{10,}$/;
// const regexMainPepper = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

//le nom de la sauce
        if(regexName.test(req.body.name)) {
            next();
        } else {
            res.status(400).json({ message: "Le nom doit contenir au moins 3 caractères"});
        }

//le nom du créateur de la sauce
if(regexName.test(req.body.manufacturer)) {
    next();
} else {
    res.status(400).json({ message: "Le créateur doit contenir au moins 3 caractères"});
}
    }