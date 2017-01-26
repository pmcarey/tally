import { Template } from 'meteor/templating';
import { Tasks } from '../api/tasks.js';
import "../assets/css/font-awesome.min.css";
import "../assets/css/simple-line-icons.min.css";
import "../assets/css/bootstrap.min.css";
import "../assets/css/uniform.default.css";
import "../assets/css/bootstrap-switch.min.css";
import "../assets/css/select2.min.css";
import "../assets/css/select2-bootstrap.min.css";
import "../assets/css/components.min.css";
import "../assets/css/plugins.min.css";
import "../assets/css/login-3.min.css";
import './login.html';
 
Template.body.helpers({
  tasks() {
    return Tasks.find({});
  },
});