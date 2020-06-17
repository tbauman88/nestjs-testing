import { Field, ObjectType, registerEnumType } from '@nestjs/graphql';
import { ApiProperty } from '@nestjs/swagger';

export enum Office {
  FC = 'forest-city',
  KW = 'kw',
  HAM = 'hammer-squad'
}

registerEnumType(Office, {
  name: 'Office',
  description: 'Office Location'
});

const idDescription = 'Team Member unique id within their office';
const officeDescription = 'The office the team member belongs to';
const nameDescription = 'Full Name of the Team Member';
const pingpongDescription = 'Indicates whether they play ping pong or not';

@ObjectType({
  description:
    'A Team member belongs to an office and only one office. They are implemented uniquely to each office but must satisfy the TeamMember object type when resolved.'
})
export class TeamMember {
  @Field({
    description: idDescription
  })
  @ApiProperty({
    description: idDescription
  })
  id: string;

  @Field(() => Office, {
    description: officeDescription
  })
  @ApiProperty({
    description: officeDescription,
    example: 'forest-city'
  })
  office: Office;

  @Field({
    description: nameDescription
  })
  @ApiProperty({
    example: 'MikingTheViking',
    description: nameDescription
  })
  name: string;

  @Field({
    description: pingpongDescription,
    defaultValue: false,
    nullable: true
  })
  @ApiProperty({
    example: true,
    description: pingpongDescription
  })
  playsPingpong: boolean;

  @Field({
    description: 'Their favourite color',
    nullable: true
  })
  favouriteColour: string | null;
}
