import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 0,  name: 'Zero' },
      { id: 11, name: 'Maria Rokita' },
      { id: 12, name: 'Doradca' },
      { id: 13, name: 'Sweter z golfem' },
      { id: 14, name: 'abuK' },
      { id: 15, name: 'Marietta' },
      { id: 16, name: 'Gruby Ozi' },
      { id: 17, name: 'Dynamo' },
      { id: 18, name: 'Q z Bonda' },
      { id: 19, name: 'Zer0an0nim' },
      { id: 20, name: 'Cassia' },
    ];
    return { heroes };
  }
}
