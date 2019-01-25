var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
export default (event) => __awaiter(this, void 0, void 0, function* () {
    // you can use ES7 with async/await and even TypeScript in your functions :)
    yield new Promise(r => setTimeout(r, 50));
    return {
        data: {
            message: `Hello ${event.data.name || 'World'}`
        }
    };
});
//# sourceMappingURL=hello.js.map