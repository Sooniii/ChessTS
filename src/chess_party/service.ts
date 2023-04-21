import { User } from '../chess_user/user';
import { mongo } from '../demo-mongo/mongo';
import { Party } from './party';

export async function findAllParty() {
  const PartyCollection = mongo.db?.collection<Party>("party")
  const partyList = PartyCollection?.find().toArray()
  return partyList
}

export async function findOnePartyByUser(user:string) {
  const PartyCollection = mongo.db?.collection<Party>("party")
  const party = PartyCollection?.findOne({player1: user})
  return party
}

export async function createParty(player1: string){
  const PartyCollection = mongo.db?.collection<Party>("party")
  PartyCollection?.insertOne(
    {
      player1: player1,
      player2: "",
      cashprize: 0
    }
  )
}

export async function modifyCachPrize(user: string, cachprize: number){
  const PartyCollection = mongo.db?.collection<Party>("party")
  PartyCollection?.updateOne({player1: user}, {$set:{cashprize: cachprize}})
}
