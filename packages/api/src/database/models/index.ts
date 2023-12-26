import type { Sequelize } from 'sequelize';
import { Assessment } from './Assessment';
import { Users } from './Users';
export {
  Assessment,
  Users,
};

export function initModels(sequelize: Sequelize) {
  Assessment.initModel(sequelize);
  Users.initModel(sequelize);
}
