// stores/userStore.js
import { observable, action } from "mobx";
import { autobind } from 'core-decorators';

@autobind
export default class UserStore {
  @observable presentLanguage = "all";

  @action changePresentLanguage = (e) => {
      this.presentLanguage = e.target.id;
      console.log("성공");
  }
}