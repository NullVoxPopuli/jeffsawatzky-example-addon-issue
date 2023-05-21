import Route from '@ember/routing/route';
import MyAddonAuthService from 'my-addon/services/my-addon/auth';
import { service } from '@ember/service';

export default class ApplicationRoute extends Route {
  @service('my-addon/auth') auth!: MyAddonAuthService;

  async model() {
    this.auth.name;
  }
}
