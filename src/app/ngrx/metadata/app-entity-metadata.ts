import { EntityDataModuleConfig, EntityMetadataMap } from '@ngrx/data';
import { defalutEntityMetadataFields } from './default-entity-metadata-fields';

export enum EntityNames {
  Users = 'Users'
}

export const AppEntities = {
  ...EntityNames
};

const entityMetadata: EntityMetadataMap = {
  [AppEntities.Users]: { ...defalutEntityMetadataFields }
};

const pluralNames = {};

export const AppEntitiesConfig: EntityDataModuleConfig = {
  entityMetadata,
  pluralNames
};
