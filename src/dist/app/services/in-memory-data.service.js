"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mock_sites_1 = require("../mocks/mock-sites");
var InMemoryDataService = /** @class */ (function () {
    function InMemoryDataService() {
    }
    InMemoryDataService.prototype.createDb = function () {
        var sites = mock_sites_1.SITES;
        return { sites: sites };
    };
    return InMemoryDataService;
}());
exports.InMemoryDataService = InMemoryDataService;
//# sourceMappingURL=in-memory-data.service.js.map