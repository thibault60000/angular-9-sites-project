import { InMemoryDbService } from 'angular-in-memory-web-api';
import { SITES } from './sites/mocks/mock-sites';
  
export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        let sites = SITES;
        return { sites };
    }
}