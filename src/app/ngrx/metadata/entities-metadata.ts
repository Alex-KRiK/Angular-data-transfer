import { EntityDataModuleConfig } from '@ngrx/data';
import { AppEntitiesConfig } from './app-entity-metadata';


export const entityConfig: EntityDataModuleConfig = {
  entityMetadata: {
    ...AppEntitiesConfig.entityMetadata,
  },
  pluralNames: {
    ...AppEntitiesConfig.pluralNames,
  }
};
