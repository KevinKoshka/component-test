import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { LineChartComponent } from './line-chart.component';

describe('AppComponent', () => {
  let fixture: ComponentFixture<LineChartComponent>;
  let component: LineChartComponent;
  let element: any;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        LineChartComponent
      ],
    }).compileComponents();
    fixture = TestBed.createComponent(LineChartComponent);
    component = fixture.componentInstance;
    element = fixture.debugElement.nativeElement;
    component.categoryField = 'campaign';
    component.chartData = [{
      'campaign': 'People Series (2020-11-16)',
      'dateEnd': 'Dec 16, 2020',
      'RTORatio': 50,
      'targets': 17
    }, {
      'campaign': 'Client Series (2018-03-20)',
      'dateEnd': 'Jun 12, 2022',
      'RTORatio': 18,
      'targets': 29
    }, {
      'campaign': 'New Series (1999-07-01)',
      'dateEnd': 'Jan 3, 2077',
      'RTORatio': 77,
      'targets': 270
    }];
    component.tooltipText = 'Some text';
  });

  afterEach(() => {
    element.remove();
    fixture.destroy();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should call initChart()', () => {
    spyOn(component, 'initChart');
    fixture.detectChanges();
    expect(component.initChart).toHaveBeenCalled();
  });

  it('should create the chart', () => {
    fixture.detectChanges();
    expect(component.chart).toBeDefined();
    component.chart.dispose();
  });

  it('should add fake values to chartData', () => {
    fixture.detectChanges();
    expect(component.chartData).toEqual([{
      'campaign': 'People Series (2020-11-16)',
      'dateEnd': 'Dec 16, 2020',
      'RTORatio': 50,
      'targets': 17,
      'fakeValue': 0
    }, {
      'campaign': 'Client Series (2018-03-20)',
      'dateEnd': 'Jun 12, 2022',
      'RTORatio': 18,
      'targets': 29,
      'fakeValue': 0
    }, {
      'campaign': 'New Series (1999-07-01)',
      'dateEnd': 'Jan 3, 2077',
      'RTORatio': 77,
      'targets': 270,
      'fakeValue': 0
    }]);
    component.chart.dispose();
  });

});