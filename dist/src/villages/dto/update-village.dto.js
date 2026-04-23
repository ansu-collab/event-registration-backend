"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateVillageDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_village_dto_1 = require("./create-village.dto");
class UpdateVillageDto extends (0, mapped_types_1.PartialType)(create_village_dto_1.CreateVillageDto) {
}
exports.UpdateVillageDto = UpdateVillageDto;
//# sourceMappingURL=update-village.dto.js.map