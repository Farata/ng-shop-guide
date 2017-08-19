import 'rxjs/add/operator/switchMap';
import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  OnDestroy,
  ViewChild
} from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { MdTabGroup } from '@angular/material';
import { Observable } from 'rxjs/Observable';

import { Product, ProductService } from '../shared/services';

@Component({
  selector: 'ngs-home',
  styleUrls: [ './home.component.scss' ],
  templateUrl: './home.component.html'
})
export class HomeComponent implements AfterViewInit, OnDestroy {
  readonly categories: Readonly<string[]> = [
    'all',
    'featured',
    'latest',
    'sport'
  ];

  /**
   * Keeps the callback function that we pass to the MediaQueryList.addListener() and
   * method MediaQueryList.removeListener(). It must be exactly the same instance of
   * the function to successfully unsubscribe from notifications and prevent memory leaks.
   */
  private mediaQueryListener: MediaQueryListListener;

  /**
   * Lists breakpoints defined in the Material Design guidelines, and their corresponding
   * short names. We use names to easier match breakpoint to the current screen size, see
   * method onMediaQueryChange().
   *
   * For the Material Design responsive UI guidelines see:
   * https://material.io/guidelines/layout/responsive-ui.html#responsive-ui-breakpoints.
   */
  private readonly mediaQueries: Map<MediaQueryList, string> = new Map([
    [matchMedia('(max-width: 600px)'),                         'xsmall'],
    [matchMedia('(max-width: 960px) and (min-width: 601px)'),  'small'],
    [matchMedia('(max-width: 1280px) and (min-width: 961px)'), 'medium'],
    [matchMedia('(min-width: 1281px)'),                        'large']
  ]);

  @ViewChild(MdTabGroup) mdTabGroup: MdTabGroup;

  columns: number;

  products: Observable<Product[]>;

  constructor(
    private changeDetectorRef: ChangeDetectorRef,
    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.products = this.route.params
      // Parameters list below uses the ES6 feature called destructuring.
      .switchMap(({category}) => {
        return category === 'all' ?
          this.productService.getAll() :
          this.productService.getCategory(category);
      });

    // If we pass this.onMediaQueryChange method directly to the
    // MediaQueryList.addListener(), `this` keyword won't reference the current
    // component's instance within onMediaQueryChange() body. We need to bind
    // onMediaQueryChange() to the current instance using Function.bind().
    // However Function.bind() dynamically creates a new instance of the
    // function, and we won't be able to remove the listener, since we don't
    // have a reference to the function returned by Function.bind(). To fix this
    // behavior we save the function in the component's property
    // this.mediaQueryListener.
    this.mediaQueryListener = this.onMediaQueryChange.bind(this);
    this.mediaQueries.forEach((screenSize, mediaQueryList) => {
      mediaQueryList.addListener(this.mediaQueryListener);

      // Set initial number of grid list columns.
      if (mediaQueryList.matches) {
        this.updateGridListColumns(mediaQueryList);
      }
    });
  }

  onTabChange(tabIndex: number) {
    const category = this.categories[tabIndex];
    this.router.navigate([category], { relativeTo: this.route.parent });
  }

  ngAfterViewInit() {
    const category = this.route.snapshot.params['category'];
    this.mdTabGroup.selectedIndex = this.categories.indexOf(category);
  }

  ngOnDestroy() {
    this.mediaQueries.forEach((screenSize, mediaQueryList) => {
      mediaQueryList.removeListener(this.mediaQueryListener);
    });
  }

  /**
   * Invoked when one of the breakpoints is triggered.
   */
  private onMediaQueryChange(mediaQueryListOrEvent: MediaQueryList|any) {
    // Google Chrome passes an instance of MediaQueryListEvent as the argument,
    // Firefox passes a MediaQueryList instance. Find out what has been passed
    // to make the rest of the method's code cross-browser compatible.
    const mql: MediaQueryList = 'target' in mediaQueryListOrEvent ?
      mediaQueryListOrEvent.target :
      mediaQueryListOrEvent;

    if (mql.matches) {
      this.updateGridListColumns(mql);

      // Currently zone.js doesn't patch the MediaQueryList API, this means
      // the Angular change detection mechanism is not automatically triggered
      // when a MediaQueryListener finishes its work. So we need to trigger the
      // change detector manually.
      //
      // For zone.js issue see: https://github.com/angular/zone.js/issues/243
      this.changeDetectorRef.detectChanges();
    }
  }

  /**
   * Adjusts number of grid list columns when the screen size changes.
   */
  private updateGridListColumns(mediaQueryList: MediaQueryList) {
    switch (this.mediaQueries.get(mediaQueryList)) {
      case 'xsmall': this.columns = 1; break;
      case 'small': this.columns = 2; break;
      case 'medium':
      case 'large': this.columns = 3; break;
    }
  }

}
