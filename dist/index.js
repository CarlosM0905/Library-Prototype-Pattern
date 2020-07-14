import { User } from './model/User.js';
import { RequestController } from './controller/RequestController.js';
let user = new User('Carlos', '17200118', 'Software Engineering');
let requestController = new RequestController(user);
requestController.populatePage();
