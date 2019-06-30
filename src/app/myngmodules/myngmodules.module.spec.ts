import { MyngmodulesModule } from './myngmodules.module';

describe('MyngmodulesModule', () => {
  let myngmodulesModule: MyngmodulesModule;

  beforeEach(() => {
    myngmodulesModule = new MyngmodulesModule();
  });

  it('should create an instance', () => {
    expect(myngmodulesModule).toBeTruthy();
  });
});
