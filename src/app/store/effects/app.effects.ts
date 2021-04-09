
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';


import { Observable, of } from 'rxjs';
import { switchMap, map, catchError } from 'rxjs/operators';
