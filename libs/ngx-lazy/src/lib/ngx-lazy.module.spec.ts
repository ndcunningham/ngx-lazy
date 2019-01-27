import { async, TestBed } from '@angular/core/testing';
import { NgxLazyModule } from './ngx-lazy.module';

describe('NgxLazyModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [NgxLazyModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(NgxLazyModule).toBeDefined();
  });
});
