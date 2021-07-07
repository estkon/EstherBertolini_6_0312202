// middleware pour la vérification du formulaire de création de sauce

module.exports = (req,res,next) => {
    const regexName = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const regexManufacturer = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{10,}$/;
    const regexMainPepper =

    if(regexEmail.test(req.body.email)) {
        if(regexPassword.test(req.body.password)) {
            next();
        } else {
            res.status(400).json({ message: "Le mot de passe doit contenir au moins 10 caractères, "
            +"posséder au moins un chiffre, une lettre majuscule et minuscule et l'un des caractères spéciaux suivants: @$!%*?&."});
        }
    } else {
        res.status(400).json({ message: "Veuillez saisir un email valide !"});
    }
}