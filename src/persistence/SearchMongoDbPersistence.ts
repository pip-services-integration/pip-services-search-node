// let _ = require('lodash');

// import { FilterParams } from 'pip-services3-commons-node';
// import { PagingParams } from 'pip-services3-commons-node';
// import { DataPage } from 'pip-services3-commons-node';
// import { TagsProcessor } from 'pip-services3-commons-node';
// import { IdentifiableMongoDbPersistence } from 'pip-services3-mongodb-node';

// import { SearchV1 } from '../data/version1/SearchV1';
// import { ISearchPersistence } from './ISearchPersistence';

// export class SearchMongoDbPersistence
//     extends IdentifiableMongoDbPersistence<SearchV1, string>
//     implements ISearchPersistence {

//     constructor() {
//         super('search');
//         super.ensureIndex({ customer_id: 1 });
//     }
    
//     private composeFilter(filter: any) {
//         filter = filter || new FilterParams();

//         let criteria = [];

//         let id = filter.getAsNullableString('id');
//         if (id != null)
//             criteria.push({ _id: id });

//         // Filter ids
//         let ids = filter.getAsObject('ids');
//         if (_.isString(ids))
//             ids = ids.split(',');
//         if (_.isArray(ids))
//             criteria.push({ _id: { $in: ids } });
            
//         let state = filter.getAsNullableString('state');
//         if (state != null)
//             criteria.push({ state: state });

//         let customerId = filter.getAsNullableString('customer_id');
//         if (customerId != null)
//             criteria.push({ customer_id: customerId });
                
//         let saved = filter.getAsNullableBoolean('saved');
//         if (saved != null)
//             criteria.push({ saved: saved });

//         return criteria.length > 0 ? { $and: criteria } : null;
//     }
    
//     public getPageByFilter(correlationId: string, filter: FilterParams, paging: PagingParams,
//         callback: (err: any, page: DataPage<SearchV1>) => void): void {
//         super.getPageByFilter(correlationId, this.composeFilter(filter), paging, null, null, callback);
//     }

// }