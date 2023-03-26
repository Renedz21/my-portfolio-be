import Contact from "../models/contactSchema.js";
import createError from "../utils/createError.js";


export const getInContact = async (req, res, next) => {
    try {
        const { name, email, message } = req.body;

        const contact = new Contact({
            name,
            email,
            message
        })

        await contact.save();

        res.status(201).send({
            message: 'Mensaje enviado correctamente..!!',
        });

    } catch (error) {
        next(createError(500, error.message));
    }
}