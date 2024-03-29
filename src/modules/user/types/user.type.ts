import { Field, ObjectType } from '@nestjs/graphql';
import { Post } from 'src/modules/post/types/post.type';
import { Vote } from 'src/modules/vote/types/vote.type';

@ObjectType()
export class User {
  @Field()
  id!: string;

  @Field()
  phoneNumber!: string;

  @Field({ nullable: true })
  baseLatitude?: number;

  @Field({ nullable: true })
  baseLongitude?: number;

  @Field()
  createdAt!: string;

  @Field({ nullable: true })
  profileImage?: string;

  @Field({ nullable: true })
  name?: string;

  @Field(() => [Post])
  posts!: Post[];

  @Field(() => [Vote])
  votes!: Vote[];
}
