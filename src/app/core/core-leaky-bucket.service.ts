import {Injectable} from '@angular/core';
import LeakyBucket from 'leaky-bucket';
import {environment} from "@environment/environment";

export class CoreLeakyBucket extends LeakyBucket {


    constructor(properties) {
        super(properties);
    }

    fillCapacity(amount: number) {
        // @ts-ignore
        this.currentCapacity = Math.max(amount, this.capacity);
    }

    getInterval(): number {
        // @ts-ignore
        return this.interval;
    }
}


@Injectable({
    providedIn: 'root'
})
export class CoreLeakyBucketService {

    bucket = new CoreLeakyBucket({
        capacity: environment.adScheduler.capacity,
        interval: environment.adScheduler.capacity,
        initialCapacity: 0,
        debug: environment.adScheduler.debug,
        timeout: 1
    });


    throttle(cost = 1, append = true, isPause = false): Promise<void> {
        // @ts-ignore
        return this.bucket.throttle(cost, append, isPause);
    }

    fillBucket(amount: number) {
        this.bucket.fillCapacity(amount);
    }

    reduceIntervalToHalf() {
        const interval = this.bucket.getInterval();
        this.setInterval(interval / 2);
    }

    setInterval(amount: number) {
        // @ts-ignore
        this.coreLeakyBucketService.bucket.setInterval(amount);
    }

    reduceIntervalMax() {
        this.setInterval(1);
    }

    restoreInterval() {
        // @ts-ignore
        this.bucket.drain();
        this.setInterval(60);
    }
}
