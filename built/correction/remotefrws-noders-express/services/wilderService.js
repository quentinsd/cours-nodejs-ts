"use strict";
const wilderDAO = require('../dao/wildersDAO');
module.exports = {
    /**
     * Return all wilders.
     * @returns {Promise<Array<EnforceDocument<unknown, {}>>>}
     */
    read: () => {
        return wilderDAO.findAll();
    },
    /**
     * Read one wilder relative to the id in parameter
     * @param id wilder id
     * @returns {Promise<Array<EnforceDocument<unknown, {}>>>}
     */
    readOne: (id) => {
        return wilderDAO.findById(id);
    },
    /**
     * Insert a new wilder relative to the wilder name, the city,
     * the skills
     * @param wilderName
     * @param city
     * @param skills
     * @returns {Promise<*>}
     */
    create: (wilderName, city, skills) => {
        return wilderDAO.create(wilderName, city, skills);
    },
    /**
     * Update an existing wilder.
     * @param id wilder id
     * @param wilderName wilder name
     * @param city wilder city
     * @param skills wilder skills
     * @returns {Promise<(Document<*, *, *>&Require_id<*>)|null>} a Promise which contains
     */
    update: (id, wilderName, city, skills) => {
        return wilderDAO.update(id, wilderName, city, skills);
    },
    /**
     * Delete a wilder relative to its id in parameter
     * @param id wilder id
     * @returns {Promise<(Document<*, *, *>&Require_id<*>)|null>} a Promise
     */
    delete: (id) => {
        return wilderDAO.delete(id);
    }
};
//# sourceMappingURL=wilderService.js.map