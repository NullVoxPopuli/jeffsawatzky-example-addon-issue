import { Auth0Client } from '@auth0/auth0-spa-js';
import { cached } from '@glimmer/tracking';
import Service from '@ember/service';

export default class MyAddonAuthService extends Service {
  @cached
  get auth0(): Auth0Client {
    return new Auth0Client({
      domain: '',
      clientId: '',
    });
  }

  get name(): string {
    return 'just someone that I used to know';
  }
}

// Don't remove this declaration: this is what enables TypeScript to resolve
// this service using `Owner.lookup('service:my-addon/auth')`, as well
// as to check when you pass the service name as an argument to the decorator,
// like `@service('my-addon/auth') declare altName: MyAddonAuthService;`.
declare module '@ember/service' {
  interface Registry {
    'my-addon/auth': MyAddonAuthService;
  }
}
