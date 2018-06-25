import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { APP_BASE_HREF } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

describe ('AppComponent', () => {
    beforeEach (async (() => {
        TestBed.configureTestingModule ({
            imports: [AppRoutingModule, AppRoutingModule],
            declarations: [
                AppComponent
            ],
            providers: [
                { provide: APP_BASE_HREF, useValue: '/' }
            ]
        }).compileComponents ();
    }));
    it ('should be defined', async (() => {
        const fixture: ComponentFixture<AppComponent> = TestBed.createComponent (AppComponent);
        const app: any = fixture.debugElement.componentInstance;
        expect (app).toBeDefined();
    }));
    it ('should create the app', async (() => {
        const fixture: ComponentFixture<AppComponent> = TestBed.createComponent (AppComponent);
        const app: any = fixture.debugElement.componentInstance;
        expect (app).toBeTruthy();
    }));
});
