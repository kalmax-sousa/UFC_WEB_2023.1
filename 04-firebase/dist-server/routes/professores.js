"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _professoresFirebase = _interopRequireDefault(require("../services/professores.firebase.services"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var router = _express["default"].Router();
router.get('/', function (req, res) {
  _professoresFirebase["default"].getAll(req, res);
  //ProfessoresFirebaseServices.listOnSnapshot(req, res);
});

router.post('/register', function (req, res, next) {
  _professoresFirebase["default"].register(req, res);
});
router.put('/update/:id', function (req, res, next) {
  _professoresFirebase["default"].update(req, res);
});
router["delete"]('/delete/:id', function (req, res, next) {
  _professoresFirebase["default"]["delete"](req, res);
});
router.get('/retrieve/:id', function (req, res, next) {
  _professoresFirebase["default"].retrieve(req, res);
});
var _default = router;
exports["default"] = _default;