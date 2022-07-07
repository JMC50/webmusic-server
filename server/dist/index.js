"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const mongodb_1 = require("mongodb");
const app = (0, express_1.default)();
const PORT = 1002;
const mongo_url = 'mongodb+srv://minchan50:minchan12@cluster0.awsg0.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const client = new mongodb_1.MongoClient(mongo_url);
app.use(express_1.default.json());
app.use(express_1.default.raw({ "limit": "10mb" }));
app.use('/client', express_1.default.static(path_1.default.resolve(__dirname, '..', '..', 'client')));
app.get("/", async (req, res) => {
    res.redirect("/client/index.html");
});
app.listen(PORT, () => {
    console.log("server is now running");
});
//# sourceMappingURL=index.js.map