import {CapacitorConfig} from '@capacitor/cli';


const config: CapacitorConfig = {
    appId: 'in.beebloom.prod',
    appName: 'Beebloom',
    webDir: 'www',
    bundledWebRuntime: false,
    cordova: {
        preferences: {
            ScrollEnabled: 'false',
            'android-minSdkVersion': '22',
            'android-targetSdkVersion': '31',
            BackupWebStorage: 'none',
        }
    },
    ios: {
        scheme: 'App Radiance',
    },
    android: {
        flavor: 'radiance',
    },

    plugins: {
        PushNotifications: {
            presentationOptions: ["badge", "sound", "alert"],
        },
        Mixpanel: {
            token: "69f1b6d452af33bb016bd20a6856a602",
            trackAutomaticEvents: true,
            optOutTrackingByDefault: false,
            disableIosIpCollection: true,
            serverURL: "https://api-eu.mixpanel.com/"
        },
        LocalNotifications: {
            smallIcon: "ic_stat_icon_config_sample",
            iconColor: "#488AFF",
            sound: "beep.wav",
        },
        "GoogleAuth": {
            "scopes": ["https://www.googleapis.com/auth/fitness.activity.read"],
            "serverClientId": "525706236944-skukv9nv99c03m4fnrgbb1vathq08j19.apps.googleusercontent.com",
            "forceCodeForRefreshToken": true,
            "clientId": "525706236944-skukv9nv99c03m4fnrgbb1vathq08j19.apps.googleusercontent.com"

        }
    },

};


export default config;
