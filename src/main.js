import * as Queries from './graphql/queries';
import * as Mutations from './graphql/mutations';

export const statements = [
    Queries.getAccount,
    Queries.getAccountOffer,
    Queries.getOffer,
    Mutations.createAccount
]