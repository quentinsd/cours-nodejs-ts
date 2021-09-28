"use strict";
const WilderModel = require('../models/Wilder');
module.exports = {
    /**
     * Return an array of all wilders.
     * @returns {Promise<Array<EnforceDocument<unknown, {}>>>} a Promise which contains an array of wilders
     */
    findAll: () => {
        return WilderModel.find().exec();
    },
    /**
     * Return the wilder relative to the id in parameter.
     * @param id wilder id
     * @returns {Promise<(Document<any, any, unknown> & Require_id<unknown>) | null>} a Promise which contains a
     * single wilder
     */
    findById: (id) => {
        return WilderModel.findById(id).exec();
    },
    findByEmail: (email) => {
        return WilderModel.find();
    },
    /**
     * Create a wilder document with its name, city and skills.
     * @param wilderName wilder name
     * @param city  wilder city
     * @param skills wilder wkills
     * @returns {Promise<Document<any, any, unknown> & Require_id<unknown>>} a Promise
     */
    create: (wilderName, city, skills) => {
        return WilderModel.init().then(() => {
            const wilder = new WilderModel({
                name: wilderName,
                city,
                skills
            });
            return wilder.save();
        });
    },
    /**
     * Update a single wilder
     * @param id wilder id
     * @param name wilder name
     * @param city wilder city
     * @param skills wilder skills
     * @returns {Promise<(Document<any, any, unknown> & Require_id<unknown>) | null>} a Promise which contains the updated
     * wilder.
     */
    update: async (id, name, city, skills) => {
        await WilderModel.updateOne({ _id: id }, {
            name,
            city,
            skills
        });
        return WilderModel.findById(id).exec();
    },
    /**
     * Delete a wilder relative to its id in parameter.
     * @param id wilder id
     * @returns {Promise<(Document<any, any, unknown> & Require_id<unknown>) | null>} a Promise
     */
    delete: (id) => {
        return WilderModel.findByIdAndDelete(id).exec();
    }
};
//# sourceMappingURL=wildersDAO.js.map