installation

1. Angular cli (versi 7) "npm install -g @angular/cli"
2. Prime ng (versi 7) " npm install primeng --save npm install primeicons --save"
3. Bootstrap (versi 4) "npm install bootstrap --save"
4. FontAwesome (versi 4.7) " npm install font-awesome --save"
5. ngx-loading (latest) "npm i ngx-loading --save"
6. ngx-translet (latest) "npm install @ngx-translate/core @ngx-translate/http-loader rxjs --save"
7. browserModule "npm install --save @angular/animations"

setup app

1 setup primeng

- tambahkan pada file angular.json

styes: [

          <!-- prime ng  -->

          "node_modules/primeicons/primeicons.css" .
          "node_modules/primeng/resources/themes/nova-light/theme.css" .
          "node_modules/primeng/resources/primeng.min.css" .

          <!--  -->

    ]

- tambahkan pada app.module.ts

  import { PrimeModule } from './prime';

imports: [

      <!-- import primeng dari prime.ts "semua component primeng import di primeng.ts -->

      PrimeModule

      <!-- -->

]

2. browserAnimationModule

- tambahkan pada file app.module.ts

  import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

imports: [

    <!-- import browserModule -->

    BrowserAnimationsModule

    <!--  -->

]

3. loading page setelah submit

- tambahlan pada file app.module

  import { NgxLoadingModule, ngxLoadingAnimationTypes } from 'ngx-loading';

imports: [

    <!-- setup display loading -->

      NgxLoadingModule.forRoot({
        animationType: ngxLoadingAnimationTypes.rectangleBounce,
        backdropBackgroundColour: 'rgba(0,0,0,0.4)',
        backdropBorderRadius: '4px',
        primaryColour: '#FFFFFF',
        secondaryColour: '#FFFFFF',
        tertiaryColour: '#FFFFFF',
      }),

    <!--  -->

]

4. translet

- tambahkan pada file app.module.ts

  import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
  import { TranslateHttpLoader } from '@ngx-translate/http-loader';
  import { HttpClient, HttpClientModule } from '@angular/common/http';

imports: [

      <!--  -->

        HttpClientModule,
        TranslateModule.forRoot({
          loader: {
            provide: TranslateLoader,
            useFactory: HttpLoaderFactory,
            deps: [HttpClient],
          },
        }),

      <!--  -->

      <!-- tambahkan class -->

        // required for AOT compilation
        export function HttpLoaderFactory(http: HttpClient) {
          return new TranslateHttpLoader(http);
        }

      <!--  -->

]
