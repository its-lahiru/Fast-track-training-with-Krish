"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NthLargestNumberFinderModule = void 0;
const common_1 = require("@nestjs/common");
const nth_largest_number_finder_controller_1 = require("./nth-largest-number-finder.controller");
const nth_largest_number_finder_service_1 = require("./nth-largest-number-finder.service");
let NthLargestNumberFinderModule = class NthLargestNumberFinderModule {
};
NthLargestNumberFinderModule = __decorate([
    common_1.Module({
        controllers: [nth_largest_number_finder_controller_1.NthLargestNumberFinderController],
        providers: [nth_largest_number_finder_service_1.NthLargestNumberFinderService]
    })
], NthLargestNumberFinderModule);
exports.NthLargestNumberFinderModule = NthLargestNumberFinderModule;
//# sourceMappingURL=nth-largest-number-finder.module.js.map