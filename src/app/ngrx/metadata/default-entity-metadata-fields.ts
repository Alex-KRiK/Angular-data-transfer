import { EntityMetadata } from '@ngrx/data';

export const defalutEntityMetadataFields: Partial<EntityMetadata<any>> = {
  // selectId: model => model.id,
  additionalCollectionState: {
    total: 0
  }
};
