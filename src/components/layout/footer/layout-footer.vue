<template>

    <!-- Footer -->
    <footer class="footer text-white bg-img bg-fixed" style="background-image: url(/public/assets/theme/img/vector/9.jpg)" data-overlay="8">
        <div class="container py-7">
            <div class="row gap-y">

                <div class="col-6 col-md-3">
                    <h6 class="mb-4"><strong>{{ $i18n.t('layout.footer.organization') }}</strong></h6>
                    <div class="nav flex-column">
                        <router-link to="" class="nav-link" >{{ $i18n.t('layout.footer.aboutUs') }}</router-link>
                        <router-link to="/contact" class="nav-link" >{{ $i18n.t('layout.footer.contact') }}</router-link>
                    </div>
                </div>

                <div class="col-6 col-md-3">
                    <h6 class="mb-4"><strong>{{ $i18n.t('layout.footer.blockchain') }}</strong></h6>
                    <div class="nav flex-column">
                        <router-link to=""  class="nav-link" >{{ $i18n.t('layout.footer.whyUs') }}</router-link>
                        <router-link to="" class="nav-link" >{{ $i18n.t('layout.footer.security') }}</router-link>
                        <router-link class="nav-link" to="/faq">{{ $i18n.t('global.faq') }}</router-link>
                        <router-link class="nav-link" to="/tos">{{ $i18n.t('layout.footer.termsAndConditions') }}</router-link>
                    </div>
                </div>

                <div class="col-6 col-md-3">
                    <h6 class="mb-4"><strong>{{ $i18n.t('layout.footer.community') }}</strong></h6>
                    <div class="nav flex-column">
                        <a class="nav-link" href="https://github.com/PandoraPay" target="_blank">{{ $i18n.t('layout.footer.github') }}</a>
                        <a class="nav-link" href="https://t.me/PandoraPayOfficial" target="_blank">{{ $i18n.t('layout.footer.telegram') }}</a>
                    </div>
                </div>

                <div class="col-6 col-md-3">
                    <h6 class="mb-4"><strong>{{ $i18n.t('layout.footer.support') }}</strong></h6>
                    <div class="nav flex-column">
                        <router-link to="" class="nav-link" >{{ $i18n.t('layout.footer.helpCenter') }}</router-link>
                        <router-link to="" class="nav-link" >{{ $i18n.t('layout.footer.guides') }}</router-link>
                        <router-link to="" class="nav-link" >{{ $i18n.t('layout.footer.api') }}</router-link>
                        <router-link to="" class="nav-link" >{{ $i18n.t('global.faq') }}</router-link>
                    </div>
                </div>


            </div>
        </div>

        <div class="container">
        <div class="row gap-y">

            <div class="col-md-6 text-center text-md-left">
                <small class="opacity-70"> {{ $i18n.t('layout.footer.footer') }}</small>
            </div>


        </div>
    </div>
    </footer>


</template>

<script>

import config from "build/config/config";

export default {

    computed: {
        config(){
            return config.app;
        }
    }

}
</script>

<style scoped>

</style>