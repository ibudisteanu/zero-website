<template>

    <layout>

        <!-- Main Content -->
        <main class="main-content">

            <section class="section">
                <div class="container">
                    <header class="section-header">
                        <small>{{ $i18n.t('pages.contact.people') }}</small>
                        <h2>{{ $i18n.t('pages.contact.peopleMeetTheCommunity') }}</h2>
                        <hr>
                        <p class="lead">{{ $i18n.t('pages.contact.team') }}</p>
                    </header>


                    <div class="row gap-y">

                        <div class="offset-md-4 col-md-4 team-2">
                            <a href="#">
                                <img class="team-pic" src="/public/assets/images/team/Alexandru-Ionut-Budisteanu.jpg" :alt="$i18n.t('pages.contact.teamAlexandruIonutBudisteanu')">
                            </a>
                            <h5>{{ $i18n.t('pages.contact.teamAlexandruIonutBudisteanu') }}</h5>
                            <small>{{ $i18n.t('pages.contact.teamFounder') }}</small>
                            <p>{{ $i18n.t('pages.contact.teamFounderAchievements') }}</p>
                            <br>
                            <div class="social social-brand">
                                <a class="social-facebook" href="https://facebook.com/budisteanu.ionut"  target="_blank" ><i class="icon-facebook"></i></a>
                                <a class="social-linkedin" href="https://linkedin.com/in/budisteanu"  target="_blank" ><i class="icon-linkedin"></i></a>
                                <a class="social-bg-light" href="http://budisteanu.net"  target="_blank" ><i class="icon-global"></i></a>
                            </div>
                        </div>

                    </div>

                </div>
            </section>


          <!--  <section class="section bg-gray">
                <div class="container">
                    <header class="section-header">
                        <small>{{ $i18n.t('pages.contact.contactTheCommunity') }}</small>
                        <h2 class="display-4">{{ $i18n.t('pages.contact.letsTalk') }}</h2>
                        <hr>
                        <p class="lead">{{ $i18n.t('pages.contact.waysToContact') }}</p>
                    </header>

                    <form class="form-row input-border" action="" method="POST" data-form="mailer">
                        <div class="col-12">
                            <div class="alert alert-success d-on-success">{{ $i18n.t('pages.contact.messageReceivedWaitNow') }}</div>
                        </div>


                        <div class="form-group col-sm-4 offset-sm-2">
                            <input class="form-control form-control-lg" type="text" name="name" :placeholder="$i18n.t('pages.contact.inputYourName')">
                        </div>

                        <div class="form-group col-sm-4">
                            <input class="form-control form-control-lg" type="email" name="email" :placeholder="$i18n.t('pages.contact.inputYourEmail')">
                        </div>

                        <div class="form-group col-8 offset-2">
                            <textarea class="form-control form-control-lg" rows="4" :placeholder="$i18n.t('pages.contact.inputYourMessage')" name="message"></textarea>
                        </div>

                        <div class="col-8 text-center offset-2">
                            <button class="btn btn-xl btn-block btn-primary" type="submit">{{ $i18n.t('pages.contact.send') }}</button>
                        </div>
                    </form>

                </div>
            </section>-->

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
        }

    },

}
</script>

<style scoped>

    .team-pic{
        max-width: 128px;
        max-height: 128px;
    }

</style>
