"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importStar(require("mongoose"));
exports.UserSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true
    },
    facebookID: {
        type: String,
        required: false
    },
    googleID: {
        type: String,
        required: false
    },
    email: {
        type: String,
        required: false
    },
    monthlyBudget: {
        type: Number,
        required: false
    },
    accessTokens: {
        type: Array,
        required: false
    },
    itemID: {
        type: Array,
        required: false
    },
    displayNames: {
        type: String,
        required: false
    },
    lastAccessed: {
        type: String,
        required: false
    }
});
exports.default = mongoose_1.default.model('User', exports.UserSchema);
//# sourceMappingURL=user.js.map