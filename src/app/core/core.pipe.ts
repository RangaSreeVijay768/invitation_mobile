import {flatten} from 'flat';
import {Pipe, PipeTransform} from '@angular/core';
import {DateTime} from 'luxon';
import {CommonsService} from '@core/commons.service';
import {KeyValue} from '@angular/common';
import {DynamicFormControlModel} from '@ng-dynamic-forms/core';
import {Core} from '@core/core.models';
import {Platform} from '@ionic/angular';
import {environment} from '@environment/environment';
import LocalDateAggregateSum = Core.LocalDateAggregateSum;
import GraphData = Core.GraphData;
import GroupByStringAndCount = Core.GroupByStringAndCount;

@Pipe({
    name: 'appDateFormat'
})
export class AppDateFormatPipe implements PipeTransform {


    transform(value: DateTime, format?: string, args?: any): string {
        return CommonsService.getDateStringFromDatTime(value, format);
    }

}



@Pipe({
    name: 'appEnumToHumanReadable',
})
export class AppEnumToHumanReadablePipe implements PipeTransform {
    transform(value: string, ...args: any[]): string {
        return CommonsService.startCase(value);
    }
}

@Pipe({
    name: 'appDateTimeToTimeFormat'
})
export class AppDateTimeToTimeFormatPipe implements PipeTransform {

    transform(value: DateTime, format: string = 'HH:mm', args?: any): string {
        if (value) {
            return CommonsService.getDateTimeStringFromDateTime(value, format);
        }
        return '';
    }
}

// const flatten = require('flat');


@Pipe({
    name: 'appDateTimeToDefaultDateTimeFormat'
})
export class AppDateTimeToDefaultDateTimeFormatPipe implements PipeTransform {

    transform(value: DateTime, format: string = 'YYYY-MM-DDTHH:mm:ss', args?: any): string {
        return CommonsService.getDateTimeStringFromDateTime(value, format);
    }
}

@Pipe({
    name: 'appDefaultDateTimeFormatToDateTime'
})
export class AppDefaultDateTimeFormatToDateTimePipe implements PipeTransform {

    transform(value: string, args?: any): DateTime {
        return CommonsService.getDateTimeFromDateTimeString(value);
    }
}

@Pipe({
    name: 'appWeekNumberToWeekStartDayNumber'
})
export class AppWeekNumberToWeekStartDayNumberPipe implements PipeTransform {

    transform(value: number, args?: any): number {
        return (value - 1) * 7;
    }

}

@Pipe({
    name: 'appStringToNumber'
})
export class AppStringToNumberPipe implements PipeTransform {

    transform(value: string, args?: any): number {
        return Number(value);
    }

}

@Pipe({
    name: 'appNonZeroDay'
})
export class AppNonZeroDayPipe implements PipeTransform {

    transform(value: number, args?: any): number {
        return value + 1;
    }

}

@Pipe({
    name: 'appSortNumberKeyValue'
})
export class AppSortNumberKeyValuePipe implements PipeTransform {

    transform(value: [KeyValue<string, any>], args?: any): any {
        if (!CommonsService.isNullOrUndefined(value)) {
            value = value.sort((a, b) => {
                return Number(a.key) - Number(b.key);
            });
        }
        return value;
    }
}

@Pipe({
    name: 'appDynamicFormControlModelArrayToDynamicFormControlModelMap'
})
export class AppDynamicFormControlModelArrayToDynamicFormControlModelMapPipe implements PipeTransform {

    transform(value: DynamicFormControlModel[],
              args?: any): { [key: string]: DynamicFormControlModel } {
        const map: { [key: string]: DynamicFormControlModel } = {};
        if (!CommonsService.isNullOrUndefined(value)) {
            value.forEach(formModel => {
                map[formModel.id] = formModel;
            });
        }
        return map;
    }
}


@Pipe({
    name: 'appObjectArrayToPropertyArray'
})
export class AppObjectArrayToPropertyArrayPipe implements PipeTransform {
    transform(value: any[], property: string, key: string, ...args: any[]): any[] {
        return value.map(object => object[property]);
    }
}

@Pipe({
    name: 'appPageNumberToOffset'
})
export class AppPageNumberToOffsetPipe implements PipeTransform {

    transform(page_number: number, count: number, ...args: any[]): number {
        return (page_number - 1) * count;
    }
}

@Pipe({
    name: 'appOffsetToPageNumber'
})
export class AppOffsetToPageNumberPipe implements PipeTransform {

    transform(value: number, page_size: number, ...args: any[]): number {
        if (value) {
            const page_number = Math.floor(value / page_size) + 1;
            return page_number;
        }
        return undefined;
    }

}

@Pipe({
    name: 'appFlattenObject'
})
export class AppFlattenObjectPipe implements PipeTransform {

    transform(values: any, max_depth?: number): any {

        // @ts-ignore
        const flatted = flatten(CommonsService.serialize(values), max_depth || 3);
        return flatted;
    }
}

@Pipe({
    name: 'appLocalDateAggregateSumsToGraphData'
})
export class AppLocalDateAggregateSumsToGraphDataPipe implements PipeTransform {

    transform(value: LocalDateAggregateSum[], ...args: any[]): GraphData[] {
        value = CommonsService.convertToArray(value);
        const series = value.map(record => {
            return {
                name: record.local_date,
                value: record.aggregate_sum
            };
        });
        return series;
    }
}

@Pipe({
    name: 'coreGroupByStringAndCountToGraphData'
})
export class CoreGroupByStringAndCountToGraphDataPipe implements PipeTransform {

    transform(value: GroupByStringAndCount[], ...args: any[]): GraphData[] {
        value = CommonsService.convertToArray(value);
        const series = value.map(record => {
            return {
                name: record.name,
                value: record.count
            };
        });
        return series;
    }

}

@Pipe({
    name: 'coreGraphDataToNamedSeries'
})
export class CoreGraphDataToNamedSeriesPipe implements PipeTransform {
    transform(graph_data: any[], name: string, ...args: any[]): any {
        return {name: name, series: graph_data};
    }
}

@Pipe({
    name: 'appPlatformAndroidCheck'
})
export class AppPlatformAndroidCheckPipe implements PipeTransform {
    transform(values: Platform): boolean {
        return values.is('android');
    }
}

@Pipe({
    name: 'appPlatformIosCheck'
})
export class AppPlatformIosCheckPipe implements PipeTransform {
    android_check_pipe = new AppPlatformAndroidCheckPipe();

    transform(values: Platform): boolean {
        const is_ios = values.is('ios');
        const is_android = this.android_check_pipe.transform(values);
        if (!is_ios && !is_android) {
            return environment.isMobileApp;
        }
        return is_ios;
    }
}
