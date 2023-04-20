import { mongo } from '../demo-mongo/mongo';
import { FriendRelation } from './friend';

export async function getAllFriendRelation(userName: string){
  const FriendRelationCollection = mongo.db?.collection<FriendRelation>('friend');
  const friendRelations = FriendRelationCollection?.find({user1: userName})
  return friendRelations?.toArray()
}

export async function deleteFriendRelation(userName:string, friend: string) {
  const FriendRelationCollection = mongo.db?.collection<FriendRelation>('friend');
  FriendRelationCollection?.deleteOne({user1: userName, user2: friend})
  return
}

export async function addNewFriend(userName:string, friend: string) {
  const FriendRelationCollection = mongo.db?.collection<FriendRelation>('friend');
  FriendRelationCollection?.insertOne({user1: userName, user2: friend})
  FriendRelationCollection?.insertOne({user1: friend, user2: userName})
  return
}
