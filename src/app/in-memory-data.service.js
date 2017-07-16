"use strict";
var InMemoryDataService = (function () {
    function InMemoryDataService() {
    }
    InMemoryDataService.prototype.createDb = function () {
        var heroes = [
            { id: 0, name: 'Zero' },
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
        return { heroes: heroes };
    };
    return InMemoryDataService;
}());
exports.InMemoryDataService = InMemoryDataService;
//# sourceMappingURL=in-memory-data.service.js.map