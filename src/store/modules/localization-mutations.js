import i18n from 'src/util/languages/i18n'

export default {

    SET_LOCALIZATION_IP: (state, ip ) => {

        if (typeof ip === "string" && ip.lastIndexOf(":") > -1)
            ip = ip.substr(ip.lastIndexOf(":")+1);


        state.ip = ip;
    },

    SET_LOCALIZATION_DATA: (state,  payload ) => {

        state.country = payload.country;
        state.countryCode = payload.countryCode;
        state.city = payload.city;
        state.latitude = payload.latitude;
        state.longtitude = payload.longitude;
        state.timeZone = payload.timeZone;
        state.request = payload.request;
        state.clientIP = payload.clientIP;

    },

    SET_LOCALIZATION_REQUEST_ERROR: (state, {}) => {
        state.request = {
            sent: true,
            done: false,
            error: true,
        };
    },

    SET_LOCALIZATION_SELECTED_LANGUAGE: (state, {  language }) => {

        const replaces = {
            'md': 'ro',
            'mx': 'es',
            'co': 'es',
            'ar': 'es',
            'pe': 'es',
            've': 'es',
            'cl': 'es',
            'ec': 'es',
            'gt': 'es',
            'cu': 'es',
            'bo': 'es',
            'hn': 'es',
            'do': 'es',
            'py': 'es',
            'sv': 'es',
            'ni': 'es',
            'cr': 'es',
            'pa': 'es',
            'uy': 'es',
            'gq': 'es',
            'pr': 'es',
            'at': 'de',
            'ch': 'de',
        };

        if (replaces[language]) language = replaces[language];

        if ( ['ro','en','it','es', 'de'].indexOf(language) < 0){
            language = 'en';
        }

        state.language = language;

        i18n.i18n.locale = language;

    },

}