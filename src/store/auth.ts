import { createModule, mutation, action } from 'vuex-class-component';
import { authenticate } from '@/api/auth';

// tslint:disable-next-line:variable-name
const VuexModule = createModule({
  namespaced: true,
  strict: false,
});

export class AuthStore extends VuexModule {
  private authToken = '';

  @mutation setToken(jwt) {
    this.authToken = jwt.access_token;
  }

  @action async fetchToken(payload: any) {
    const { username, password } = payload;
    const jwt = await authenticate(username, password);
    this.setToken(jwt);
  }

  get jwt() {
    return this.authToken;
  }
}
