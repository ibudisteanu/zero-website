import VueI18n from 'vue-i18n'

import en from "./langs/en";
import ro from "./langs/ro";
import it from "./langs/it";
import es from "./langs/es";
import de from "./langs/de";

class I18n {

    i18nInit(){

        this.i18n =  new VueI18n({
            locale: 'en',
            fallbackLocale: 'en',
            messages: {
                en,
                ro,
                it,
                es,
                de,
            },
        })

    }

}

export default new I18n();