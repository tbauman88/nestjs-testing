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

const id_description = 'Team Member unique id within their office';
const office_description = 'The office the team member belongs to';
const name_description = 'Full Name of the Team Member';
const pingpong_description = 'Indicates whether they play ping pong or not';
@ObjectType({
  description:
    'A Team member belongs to an office and only one office. They are implemented uniquely to each office but must satisfy the TeamMember object type when resolved.'
})
export class TeamMember {
  @Field({
    description: id_description
  })
  @ApiProperty({
    description: id_description
  })
  id: string;

  @Field(() => Office, {
    description: office_description
  })
  @ApiProperty({
    description: office_description,
    example: 'forest-city'
  })
  office: Office;

  @Field({
    description: name_description
  })
  @ApiProperty({
    example: 'MikingTheViking',
    description: name_description
  })
  name: string;

  @Field({
    description: pingpong_description,
    defaultValue: false,
    nullable: true
  })
  @ApiProperty({
    example: true,
    description: pingpong_description
  })
  playsPingpong: boolean;

  @Field({
    description: 'Their favourite color',
    nullable: true
  })
  favouriteColour: string | null;
}
