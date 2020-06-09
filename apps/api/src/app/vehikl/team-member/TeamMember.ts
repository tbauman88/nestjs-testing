import { Field, ObjectType, registerEnumType } from '@nestjs/graphql';

export enum Office {
  FC = 'forest-city',
  KW = 'kw',
  HAM = 'hammer-squad'
}

registerEnumType(Office, {
  name: 'Office',
  description: 'Office Location'
});

@ObjectType({
  description:
    'A Team member belongs to an office and only one office. They are implemented uniquely to each office but must satisfy the TeamMember object type when resolved.'
})
export class TeamMember {
  @Field({
    description: 'All Team Members must have a unique office id'
  })
  id: string;

  @Field(() => Office, {
    description: 'The office the team member belongs to'
  })
  office: Office;

  @Field({
    description: 'Full Name of the Team Member'
  })
  name: string;

  @Field({
    description: 'Indicates whether they play ping pong or not',
    defaultValue: false,
    nullable: true
  })
  playsPingpong: boolean;

  @Field({
    description: 'Their favourite color',
    nullable: true
  })
  favouriteColour: string | null;
}
