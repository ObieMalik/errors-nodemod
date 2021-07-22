"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorId = void 0;
class ErrorId {
    constructor(id, name, desc) {
        this.id = id;
        this.name = name;
        this.desc = desc;
    }
    get message() {
        const hasDesc = !this.desc ||
            this.desc.length === 0 ||
            this.desc.trim() === '';
        return `${this.id} | ${this.name}${!hasDesc ? ' | ' + this.desc : ''}`;
    }
}
exports.ErrorId = ErrorId;
//# sourceMappingURL=error-id.js.map