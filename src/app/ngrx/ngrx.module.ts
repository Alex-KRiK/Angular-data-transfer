import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { CommonModule } from '@angular/common';
import { reducers } from './reducers/reducers';
import { environment } from 'src/environments/environment';
import { effects } from './effects';
import { EntityDataModule } from '@ngrx/data';
import { entityConfig } from './metadata/entities-metadata';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([...effects]),
    EntityDataModule.forRoot(entityConfig),
    StoreDevtoolsModule.instrument({
      maxAge: 75,
      logOnly: environment.production
    })
  ]
})
export class NgrxModule {}
