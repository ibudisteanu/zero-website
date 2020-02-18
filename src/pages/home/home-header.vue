<template>

    <div>
        <!-- Header -->
        <header class="header text-white h-fullscreen bg-fixed" style="background-image: url(/public/assets/theme/img/vector/9.jpg)">
            <div class="overlay opacity-95" style="background-image: linear-gradient(135deg, #667eea 0%, #764ba2 100%);"></div>
            <div class="container text-center">
                <div class="row align-items-center h-100  pt-md-7 pb-md-8">

                    <div class="col-md-8 mx-auto">

                        <img src="/public/assets/images/pandora-pay-logo-white-cropped.png">
                        <h1>{{ $i18n.t('pages.homepage.title') }}</h1>
                        <p class="lead mt-5 mb-8">{{ $i18n.t('pages.homepage.subTitle') }}. </p>

                        <p class="gap-xy">
                            <a class="btn btn-lg btn-round btn-light mw-200" :href="config.wallet">{{ $i18n.t('global.webWallet') }}</a>
                        </p>
                    </div>

                </div>
            </div>
        </header><!-- /.header -->

    </div>

</template>

<script>

import config from "build/config/config";

export default {

    computed:{

        config(){
            return config.app;
        }

    }

}

</script>

<style scoped>

</style>