import {Injectable} from '@angular/core';
import {JsonConvert, OperationMode, ValueCheckingMode} from 'json2typescript';
import {map} from 'rxjs/operators';
import {from, Observable, of} from 'rxjs';
import {DateTime} from 'luxon';
import isNumeric from 'validator/es/lib/isNumeric';
import isMobilePhone from 'validator/es/lib/isMobilePhone';
import * as moment from 'moment';


import * as _lodash from 'lodash';
import {DurationInputArg1, DurationInputArg2, Moment} from 'moment';

@Injectable({
    providedIn: 'root'
})
export class CommonsService {
    static DEFAULT_DATE_TIME_WITHOUT_FORMAT = 'yyyy-MM-dd\'T\'HH:mm:ss';
    static DEFAULT_DATE_TIME_FORMAT = 'yyyy-MM-dd\'T\'HH:mm:ss\'Z\'';
    static DEFAULT_DATE_TIME_WITHOUT_ZONE_FORMAT = 'yyyy-MM-dd\'T\'HH:mm:ss';
    static DEFAULT_TIME_FORMAT = 'HH:mm';
    static DEFAULT_MOBILE_TIME_FORMAT = 'hh:mm A';
    static DEFAULT_DATE_FORMAT = 'yyyy-MM-dd';
    static logResponse = map(value => {
        console.log(value);
        return value;
    });
    static convertToJson = map((value: string) => {
        return CommonsService.parseJson(value);
    });
    private static _JSON_CONVERTER: JsonConvert = new JsonConvert(OperationMode.ENABLE, ValueCheckingMode.ALLOW_NULL,
        false);

    constructor() {
    }

    // noinspection TsLint
    // @ts-ignore
    static addMissingKeys = (ids, value?) => map(response => {
        // @ts-ignore
        ids.forEach(id => {
            // @ts-ignore
            response[id] = response[id] || value;
        });
        return response;
    });


    static getCurrentTimeAsMoment(): Moment {
        return moment()
            .clone();
    }

    static parseToJson(data: any) {
        return JSON.parse(data);
    }

    static isNumber(value: any): boolean {
        return !isNaN(value);
    }

    static stringify(data: any) {
        return JSON.stringify(data);
    }

    static convertToArray<T>(object: T | T[]): T[] {
        if (!object) {
            return [];
        }
        let array: T[] = [];
        if (!Array.isArray(object)) {
            array = [object];
        } else {
            array = object;
        }
        return array;
    }

    // tslint:disable-next-line:callable-types
    static deserialize(json: any, classReference: { new(): any }): any {
        if (Object.keys(json).length === 0) {
            return null;
        }
        return CommonsService._JSON_CONVERTER.deserialize(json, classReference);
    }

    static serialize(data: any): any {
        return CommonsService._JSON_CONVERTER.serialize(data);
    }

    static promiseToObservable<T>(promise: Promise<T>): Observable<T> {
        return from(Promise.resolve(promise));
    }

    static objectToObservable<T>(object: T): Observable<T> {
        return of(object);
    }

    static removeFromArray(items: any[], model: any): any[] {
        const index = items.indexOf(model);
        if (index > -1) {
            items.splice(index, 1);
        }
        return items;
    }

    static toPayload<T>(action: { payload: T }) {
        return action.payload;
    }

    static deserializeMap = (classReference: new () => any) => {
        // CommonsService.deserialize(val)
        return map(value => CommonsService.deserialize(value, classReference));
    };


    static getDateTimeFromDateTimeString(timeString: string, format?: string): DateTime | undefined {
        format = format || this.DEFAULT_DATE_TIME_FORMAT;
        if (timeString) {
            // @ts-ignore
            return DateTime.fromFormat(timeString, format);
        }
        return undefined;
    }

    static getMomentFromDateTimeString(timeString: string, format?: string): Moment {
        if (timeString) {
            return moment(timeString, format || this.DEFAULT_DATE_TIME_FORMAT)
                .clone();
        }
        return undefined;
    }

    static getDateFromDateTimeString(timeString: string, format?: string): DateTime | undefined {
        format = format || this.DEFAULT_DATE_FORMAT;
        if (timeString) {
            // @ts-ignore
            return DateTime.fromFormat(timeString, format);
        }
        return undefined;
    }

    static getDateTimeFromDateISOString(date_string: string): DateTime {
        return DateTime.fromISO(date_string);
    }

    static startCase(text: string): string {
        return _lodash.startCase(_lodash.toLower(text));
    }

    static getTimeStringFromDateTime(time: DateTime): string | undefined {
        if (time) {
            return time
                .toFormat(this.DEFAULT_TIME_FORMAT);
        }
        return undefined;
    }


    static getDateTimeFromTimeString(timeString: string): DateTime | undefined {
        if (timeString) {
            return DateTime.fromFormat(timeString, this.DEFAULT_TIME_FORMAT);
        }
        return undefined;
    }

    static getDateTimeFromDate(date: Date): DateTime {
        if (date) {
            return DateTime.fromJSDate(date);
        }
        return undefined;
    }

    static getDateStringFromDatTime(time: DateTime, format?: string): string | undefined {
        if (time) {
            return time.toFormat(format || this.DEFAULT_DATE_FORMAT);
        }
        return undefined;
    }

    static getDateTimeStringFromDateTime(time: DateTime, format = this.DEFAULT_DATE_TIME_FORMAT): string {
        return time.toFormat(format);
    }

    static getDateTimeStringWithoutZoneFromDateTime(time: DateTime,
                                                    format = this.DEFAULT_DATE_TIME_WITHOUT_ZONE_FORMAT): string {
        return time.toFormat(format);
    }

    static getDateTimeFromDateString(dateString: string, format?: string): DateTime | undefined {
        if (dateString) {
            return DateTime.fromFormat(dateString, format || this.DEFAULT_DATE_FORMAT);
        }
        return undefined;
    }

    static isNullOrUndefined(object: any): boolean {
        if (object === undefined || object == null) {
            return true;
        } else {
            return false;
        }
    }

    static getCurrentTimeAsDateTime(): DateTime {
        return DateTime.now();
    }


    static getTimestampFromDateTime(timestamp: DateTime): number | undefined {
        if (timestamp) {
            return timestamp.toSeconds();
        }
        return undefined;
    }

    static getDateTimeFromTimestamp(timestamp: number): DateTime | undefined {
        if (timestamp) {
            return DateTime.fromSeconds(timestamp);
        }
        return undefined;
    }

    static parseJson(data: string) {
        return JSON.parse(data);
    }


    static getRandomItemFromArray(array: any[]): any {
        return array[Math.floor(Math.random() * array.length)];
    }

    static getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    static appendSecuredToUrl(url: string) {
        return `${url}/secured`;
    }

    static getWindowLocation(): string {
        const location = window.location;
        return location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '');
    }

    static convertToFloat(obj: string): number {
        return CommonsService.isNumber(parseInt(obj, 10)) ? parseFloat(obj) : 0;
    }

    static convertToNumber(value) {
        return this.isNullOrUndefined(value) ? 0 : Number(value);
    }

    static convertToNumberPipe = () => map(value => isNumeric('' + value || '') ? value : 0);

    static isMobilePhone(value: string): boolean {
        return isMobilePhone(value);
    }
}
