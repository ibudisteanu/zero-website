<template>

    <layout>

        <!-- Main Content -->
        <main class="main-content">

            <section class="section">
                <div class="container">
                    <header class="section-header">

                        <img src="/public/assets/images/pandora-pay-logo.png">

                        <h1>{{ $i18n.t('pages.404.notFound') }}</h1>
                        <hr>
                        <p class="lead">{{ route }}</p>
                    </header>

                </div>
            </section>

        </main>


    </layout>

</template>

<script>

import Layout from "src/components/layout/layout"
import config from "build/config/config";


export default {

    components: {Layout},

    computed:{

        config(){
            return config.app;
        },

        route(){
            return this.$router.currentRoute.fullPath;
        }

    },

}
</script>

<style scoped>

</style>
