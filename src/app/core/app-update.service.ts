import {Injectable} from "@angular/core";


@Injectable({
    providedIn: 'root'
})
export class AppUpdateService {

    constructor() {
    }


    async checkForAppUpdate() {
        // const update = await AppUpdate.getAppUpdateInfo();

        // if (update.updateAvailability === AppUpdateAvailability.UPDATE_AVAILABLE) {
        //     if (update.flexibleUpdateAllowed) {
        //         await AppUpdate.startFlexibleUpdate().then(AppUpdateResult => {
        //             if (AppUpdateResult.code === AppUpdateResultCode.OK) {
        //                 AppUpdate.addListener('onFlexibleUpdateStateChange',
        //                     async (state: FlexibleUpdateState) => {
        //                         if(state.installStatus===FlexibleUpdateInstallStatus.DOWNLOADED){
        //                             console.log("update completed now restarting")
        //                             await AppUpdate.completeFlexibleUpdate().then(()=>{console.log('completed'); AppUpdate.removeAllListeners()});
        //                         }
        //                     },
        //                 );
        //             }
        //         });
        //     }
        //
        //
        // }
    }


}
