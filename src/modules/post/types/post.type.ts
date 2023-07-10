import { Field, ObjectType } from '@nestjs/graphql';
import { User } from 'src/modules/user/types/user.type';
import { Vote } from 'src/modules/vote/types/vote.type';
import { Comment } from './comment-type';

@ObjectType()
export class Post {
  @Field()
  id!: string;

  @Field()
  body!: string;

  @Field({ nullable: true })
  latitude?: number;

  @Field({ nullable: true })
  longitude?: number;

  @Field()
  createdAt!: string;

  @Field(() => User)
  author!: User;

  @Field(() => [Vote])
  votes!: Vote[];

  @Field(() => [Comment])
  comments!: Comment[];
}
