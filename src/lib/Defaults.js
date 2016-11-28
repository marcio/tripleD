import _cloneDeep from 'lodash/cloneDeep';

class Defaults {

  constructor() {
    this._props = {
      margins: { top: 20, right: 20, bottom: 20, left: 20 },
      size: { width: 450, height: 450 },
    };
  }

  get props() {
    return _cloneDeep(this._props, {});
  }


}

export default Defaults;
