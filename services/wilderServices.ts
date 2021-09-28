import wilderDAO from "../dao/wildersDAO";
import Skills from "../models/Skills";

const wilderServices = {
  read: () => {
    return wilderDAO.read();
  },

  create: (wilderName: string, city: string, skills: Array<Skills>) => {
    return wilderDAO.create(wilderName, city, skills);
  },
  update: (wilderName: string, city: string, skills: Array<Skills>) =>
    wilderDAO.update(wilderName, city, skills),
  delete: (wilderName: string) => wilderDAO.delete(wilderName),
};
export default wilderServices;
