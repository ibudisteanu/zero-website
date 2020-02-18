<template>
    <!-- Navbar -->
    <nav id="navbar" :class="`navbar navbar-expand-lg navbar-${light? 'light ':'dark stick'} navbar-stick-dark`" data-navbar="smart">
        <div class="container">

            <div class="navbar-left">
                <button class="navbar-toggler" type="button"><span class="navbar-toggler-icon"></span></button>
                <router-link class="navbar-brand" to="/">
                    <img class="logo-dark" src="/public/assets/images/pandora-pay-logo-inline.png" :alt="$i18n.t('layout.navbar.logoAlt')">
                    <img class="logo-light" src="/public/assets/images/pandora-pay-logo-inline-white.png" :alt="$i18n.t('layout.navbar.logoAlt')">
                </router-link>
            </div>

            <section class="navbar-mobile">
                <nav class="nav nav-navbar ml-auto">
                    <router-link class="nav-link" to="/">{{ $i18n.t('layout.navbar.home') }}</router-link>
                    <a class="nav-link" :href="config.explorer">{{ $i18n.t('global.explorer') }}</a>
                    <a class="nav-link" :href="config.wallet">{{ $i18n.t('global.webWallet') }}</a>
                    <router-link class="nav-link" to="/contact">{{ $i18n.t('layout.navbar.contact') }}</router-link>
                    <router-link class="nav-link" to="/faq">{{ $i18n.t('global.faq') }}</router-link>
                    <language-select class="nav-link"/>
                </nav>
            </section>

        </div>
    </nav><!-- /.navbar -->
</template>

<script>
import config from "build/config/config";
import LanguageSelect from "components/utils/select/language-select"

export default {

    components: {LanguageSelect},

    props:{
        light: false,
    },

    data(){
        return {
        };
    },

    computed:{
        config(){
            return config.app;
        }
    }

}
</script>

<style scoped>

</style>
