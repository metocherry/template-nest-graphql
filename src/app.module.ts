import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';

import { RecipesModule } from './recipes/recipes.module';

@Module({
  imports: [
    RecipesModule,
    GraphQLModule.forRoot({
      debug: true,
      autoSchemaFile: 'schema.gql',
      // typePaths: ['./**/*.graphql'],
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
