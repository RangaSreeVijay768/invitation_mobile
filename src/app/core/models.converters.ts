import {JsonConverter, JsonCustomConvert} from 'json2typescript';
import {CommonsService} from '@core/commons.service';
// import {Moment} from 'moment';
// import * as moment from 'moment'
import {DateTime} from 'luxon';

export namespace ModelsConverters {


    @JsonConverter
    export class DateConverter implements JsonCustomConvert<DateTime> {
        serialize(date: DateTime): any {
            return CommonsService.getDateStringFromDatTime(date);
        }

        deserialize(date: any): DateTime {
            return CommonsService.getDateTimeFromDateString(date);
        }
    }

    @JsonConverter
    export class IntToStringConverter implements JsonCustomConvert<string> {
        serialize(int_as_string: string): number {
            return parseInt(int_as_string, 10);
        }

        deserialize(int_as_number: number): string {
            return '' + int_as_number;
        }
    }

    @JsonConverter
    export class DateTimeConverter implements JsonCustomConvert<DateTime> {
        serialize(time: DateTime): string {
            return CommonsService.getDateTimeStringFromDateTime(time);
        }

        deserialize(time: any): DateTime {
            if (time) {
                // console.log(, CommonsService.getDateTimeFromDateTimeString(time));
                return CommonsService.getDateTimeFromDateTimeString(time);
            }
            return undefined;
        }
    }

    @JsonConverter
    export class TimestampToDateTimeConverter implements JsonCustomConvert<DateTime> {
        serialize(time: DateTime): number {
            return CommonsService.getTimestampFromDateTime(time);
        }

        deserialize(time: number): DateTime {
            return DateTime.fromSeconds(time / 1000);
        }
    }

    @JsonConverter
    export class TimestampConverter implements JsonCustomConvert<DateTime> {
        serialize(time: DateTime): number {
            return CommonsService.getTimestampFromDateTime(time);
        }

        deserialize(time: number): DateTime {
            return CommonsService.getDateTimeFromTimestamp(time);
        }
    }

    @JsonConverter
    export class TimeConverter implements JsonCustomConvert<DateTime> {
        serialize(time: DateTime): any {
            return CommonsService.getTimeStringFromDateTime(time);
        }

        deserialize(time: any): DateTime {
            return CommonsService.getDateTimeFromTimeString(time);
        }
    }

    @JsonConverter
    export class ArrayToStringConverter implements JsonCustomConvert<string[]> {
        serialize(time: string[]): string {
            return time.join(',');
        }

        deserialize(time: string): string[] {
            return time.split(',');
        }
    }

    @JsonConverter
    export class StringToIntConverter implements JsonCustomConvert<number> {

        serialize(value: number): string {
            return '' + value;
        }

        deserialize(value: string): number {
            return CommonsService.isNumber(parseInt(value, 10)) ? parseInt(value, 10) : 0;
        }
    }

    @JsonConverter
    export class DateTimeWithoutZoneConverter implements JsonCustomConvert<DateTime> {
        serialize(time: DateTime): string {
            return CommonsService.getDateTimeStringFromDateTime(time, CommonsService.DEFAULT_DATE_TIME_WITHOUT_FORMAT);
        }

        deserialize(time: any): DateTime {
            if (time) {
                // console.log(, CommonsService.getDateTimeFromDateTimeString(time));
                return CommonsService.getDateTimeFromDateTimeString(time,
                    CommonsService.DEFAULT_DATE_TIME_WITHOUT_FORMAT);
            }
            return undefined;
        }
    }
}
