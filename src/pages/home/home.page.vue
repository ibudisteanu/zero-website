<template>

    <layout :light="true">

        <home-header/>

        <!-- Main Content -->
        <main class="main-content">

            <section class="section text-white" style="background-color: #1b8bf9">
                <div class="container">
                    <div class="row gap-y text-center">

                        <div class="col-12 col-sm-4">
                            <p class="lead-8 mb-0 counted" data-provide="countup" data-from="0" data-to="100">{{this.blocks}}</p>
                            <p class="small text-uppercase ls-2">{{ $i18n.t('pages.homepage.blocks') }}</p>
                        </div>

                        <div class="col-12 col-sm-4">
                            <p class="lead-8 mb-0 counted" data-provide="countup" data-from="0" data-to="250">{{this.blocks*23}}</p>
                            <p class="small text-uppercase ls-2">{{ $i18n.t('pages.homepage.transactions') }}</p>
                        </div>

                        <div class="col-12 col-sm-4">
                            <p class="lead-8 mb-0 counted" data-provide="countup" data-from="0" data-to="430">{{this.blocks*50}}</p>
                            <p class="small text-uppercase ls-2">{{ $i18n.t('pages.homepage.uniqueAccounts') }}</p>
                        </div>

                        <div class="col-md-12">

                            <p class="small text-uppercase ls-2 text-center">
                                {{ $i18n.t('pages.homepage.realTimeDataFrom') }}
                                <a class="btn btn-lg btn-round btn-outline-light mw-200" :href="config.explorer"> {{ $i18n.t('pages.homepage.testNetBlockchainExplorer') }}</a>
                            </p>

                        </div>

                    </div>
                </div>
            </section>


            <!--
            |‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒
            | Anonymous cash for the internet
            |‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒
            !-->
            <section class="section py-8">
                <div class="container">

                    <div class="row gap-y align-items-center">
                        <div class="col-md-6 mr-auto">
                            <h2>{{ $i18n.t('pages.homepage.anonymousCashForTheInternet') }}</h2>
                            <p class="lead">{{  $i18n.t('pages.homepage.worldsFirstAnonymousDecentralizedExchange') }}</p>
                            <p>{{  $i18n.t('pages.homepage.itsFastPrivateAndSecure') }}</p>
                        </div>

                        <div class="col-md-5">
                            <img src="/public/assets/theme/img/vector/5.png" :alt="$i18n.t('pages.homepage.anonymousCashForTheInternet')">
                        </div>
                    </div>



                </div>

            </section>

            <!--
            |‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒
            | Get Paid Anonymously
            |‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒
            !-->

            <section class="section py-8 bg-gray">
                <div class="container">
                    <div class="row gap-y align-items-center">
                        <div class="col-md-6 ml-auto">
                            <h2>{{ $i18n.t('pages.homepage.getPaidAnonymously') }}</h2>
                            <p class="lead">{{ $i18n.t('pages.homepage.itsUntraceable')}}</p>
                            <p>{{ $i18n.t('pages.homepage.sendingReceivingAddressesObfuscated') }}</p>
                        </div>

                        <div class="col-md-5 order-md-first">
                            <img src="/public/assets/theme/img/vector/6.png" :alt="$i18n.t('pages.homepage.getPaidAnonymously')">
                        </div>
                    </div>
                </div>
            </section>



            <!--
            |‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒
            | Private Digital Currency
            |‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒
            !-->
            <section class="section text-white" style="background-color: #0b8fe4">
                <div class="container-fluid">
                    <div class="row gap-y align-items-center">

                        <div class="col-md-5 ml-auto">
                            <h3>{{ $i18n.t('pages.homepage.privateDigitalCurrency') }}</h3>
                            <p class="lead" >{{ $i18n.t('pages.homepage.withASingleClick') }}</p>
                            <p> {{ $i18n.t('pages.homepage.neverBeenEasierToSendAndReceiveMoney') }}.</p>
                        </div>

                        <div class="col-md-4 mx-auto text-center">
                            <img src="/public/assets/theme/img/vector/7.png" :alt="$i18n.t('pages.homepage.privateDigitalCurrency')">
                        </div>

                    </div>
                </div>
            </section>




            <!--
            |‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒
            | Your are your own bank
            |‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒
            !-->
            <section class="section bg-gray">
                <div class="container">
                    <div class="row">

                        <div class="col-md-6 align-self-center pb-7">
                            <h3>{{ $i18n.t('pages.homepage.youAreYourOwnBank') }}</h3>
                            <p>{{ $i18n.t('pages.homepage.withNameYouAreYourOwnBank') }}</p>

                            <div class="row mt-7">
                                <div class="col-6">
                                    <p class="text-danger lead-7"><i class="icon-documents"></i></p>
                                    <h5>{{ $i18n.t('pages.homepage.nameIsSecure')}}</h5>
                                    <p>{{ $i18n.t('pages.homepage.unstoppableByUsingDecentralizedBlockchain') }}.</p>
                                </div>

                                <div class="col-6">
                                    <p class="text-danger lead-7"><i class="icon-key"></i></p>
                                    <h5>{{ $i18n.t('pages.homepage.nameIsPrivate') }}</h5>
                                    <p>{{  $i18n.t('pages.homepage.youOwnYourOwnKey') }}.</p>
                                </div>
                            </div>
                        </div>

                        <div class="col-md-6 text-center order-md-first">
                            <img class="mr-40" src="/public/assets/theme/img/vector/8.png" :alt="$i18n.t('pages.homepage.youAreYourOwnBank')">
                        </div>

                    </div>
                </div>
            </section>


            <!--
            |‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒
            | Anonymous payments made easy
            |‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒
            !-->
            <section class="section text-center py-9" style="background-image: url(/public/assets/theme/img/bg/1.jpg)">
                <div class="overlay opacity-90" style="background-image: linear-gradient(to left, #00c6fb 0%, #005bea 100%);"></div>
                <div class="container">
                    <div class="row">
                        <div class="col-md-8 mx-auto">

                            <h3 class="lead-6 text-white mb-7 fw-2001">{{ $i18n.t('pages.homepage.anonymousPaymentsMadeEasy') }}</h3>
                            <p><a class="btn btn-xl btn-round btn-success" :href="config.wallet">{{ $i18n.t('global.webWallet') }}</a></p>
                            
                        </div>
                    </div>
                </div>
            </section>


            <!--
            |‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒
            | More Features
            |‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒
            !-->
            <section class="section bg-gray">
                <div class="container">
                    <header class="section-header">
                        <h2>{{ $i18n.t('pages.homepage.features.makeItPerfect') }}</h2>
                        <hr>
                        <p class="lead">{{ $i18n.t('pages.homepage.features.worldFirstAnonymousExchange') }}</p>
                    </header>

                    <div class="row gap-y text-center">

                        <div class="col-md-6 col-xl-4">
                            <div class="media">
                                <div class="lead-6 line-height-1 text-dark mr-5"><i class="ti-key"></i></div>
                                <div class="media-body">
                                    <h5>{{ $i18n.t('pages.homepage.features.private') }}</h5>
                                    <p>{{ $i18n.t('pages.homepage.features.privateZether') }}</p>
                                </div>
                            </div>
                        </div>


                        <div class="col-md-6 col-xl-4">
                            <div class="media">
                                <div class="lead-6 line-height-1 text-dark mr-5"><i class="ti-unlink"></i></div>
                                <div class="media-body">
                                    <h5>{{ $i18n.t('pages.homepage.features.untraceable') }}</h5>
                                    <p>{{ $i18n.t('pages.homepage.features.obfuscated') }}</p>
                                </div>
                            </div>
                        </div>


                        <div class="col-md-6 col-xl-4">
                            <div class="media">
                                <div class="lead-6 line-height-1 text-dark mr-5"><i class="ti-lock"></i></div>
                                <div class="media-body">
                                    <h5>{{ $i18n.t('pages.homepage.features.fungible') }}</h5>
                                    <p>{{ $i18n.t('pages.homepage.features.noBlacklist') }}</p>
                                </div>
                            </div>
                        </div>


                        <div class="col-md-6 col-xl-4">
                            <div class="media">
                                <div class="lead-6 line-height-1 text-dark mr-5"><i class="ti-money"></i></div>
                                <div class="media-body">
                                    <h5>{{ $i18n.t('pages.homepage.features.assetPlusCurrency') }}</h5>
                                    <p>{{ $i18n.t('pages.homepage.features.assetPlusCurrencyAnchor') }}</p>
                                </div>
                            </div>
                        </div>


                        <div class="col-md-6 col-xl-4">
                            <div class="media">
                                <div class="lead-6 line-height-1 text-dark mr-5"><i class="ti-eye"></i></div>
                                <div class="media-body">
                                    <h5>{{ $i18n.t('pages.homepage.features.confidentialBlindedEscrow') }}</h5>
                                    <p>{{ $i18n.t('pages.homepage.features.completelyBlindEscrow') }}</p>
                                </div>
                            </div>
                        </div>


                        <div class="col-md-6 col-xl-4">
                            <div class="media">
                                <div class="lead-6 line-height-1 text-dark mr-5"><i class="ti-comments-smiley"></i></div>
                                <div class="media-body">
                                    <h5>{{ $i18n.t('pages.homepage.features.reviewsForTraders') }}</h5>
                                    <p>{{ $i18n.t('pages.homepage.features.reviewsForTradersAnonymous') }}</p>
                                </div>
                            </div>
                        </div>

                        <div class="col-md-6 col-xl-4">
                            <div class="media">
                                <div class="lead-6 line-height-1 text-dark mr-5"><i class="ti-comments"></i></div>
                                <div class="media-body">
                                    <h5>{{ $i18n.t('pages.homepage.features.encryptedChat') }}</h5>
                                    <p>{{ $i18n.t('pages.homepage.features.encryptedChatEndToEnd') }}</p>
                                </div>
                            </div>
                        </div>


                        <div class="col-md-6 col-xl-4">
                            <div class="media">
                                <div class="lead-6 line-height-1 text-dark mr-5"><i class="ti-tag"></i></div>
                                <div class="media-body">
                                    <h5>{{ $i18n.t('pages.homepage.features.noDeposit') }}</h5>
                                    <p>{{ $i18n.t('pages.homepage.features.noDepositNoCoins') }}</p>
                                </div>
                            </div>
                        </div>


                        <div class="col-md-6 col-xl-4">
                            <div class="media">
                                <div class="lead-6 line-height-1 text-dark mr-5"><i class="ti-check-box"></i></div>
                                <div class="media-body">
                                    <h5>{{ $i18n.t('pages.homepage.features.instantAnonymity') }}</h5>
                                    <p>{{ $i18n.t('pages.homepage.features.advancedHdWallet') }}</p>
                                </div>
                            </div>
                        </div>



                    </div>

                </div>
            </section>



            <section id="section-mission" class="section">
                <div class="container">
                    <div class="row gap-y align-items-center">

                        <div class="col-md-7 mx-auto">
                            <h2>{{ $i18n.t('pages.homepage.finished.timeline') }}</h2>
                            <p class="lead">{{ $i18n.t('pages.homepage.finished.launchTimeline') }}</p>

                            <br>

                            <p>
                                <i class="ti-check text-success mr-2"></i>
                                <span>{{ $i18n.t('pages.homepage.finished.dataStructure') }}</span>
                            </p>

                            <p>
                                <i class="ti-check text-success mr-2"></i>
                                <span>{{ $i18n.t('pages.homepage.finished.networking') }}</span>
                            </p>

                            <p>
                                <i class="ti-check text-success mr-2"></i>
                                <span>{{ $i18n.t('pages.homepage.finished.cryptoAndRingCT') }}</span>
                            </p>

                            <p>
                                <i class="ti-check text-success mr-2"></i>
                                <span>{{ $i18n.t('pages.homepage.finished.blockchainAndConsensus') }}</span>
                            </p>

                            <p>
                                <i class="ti-pencil text-success mr-2"></i>
                                <span>{{ $i18n.t('pages.homepage.finished.exchangeFiftyPerCent') }}</span>
                            </p>

                            <p>
                                <i class="ti-pencil text-success mr-2"></i>
                                <span>{{ $i18n.t('pages.homepage.finished.encryptedMessages') }}</span>
                            </p>

                            <p>
                                <i class="ti-pencil text-success mr-2"></i>
                                <span>{{ $i18n.t('pages.homepage.finished.completelyBlindedEscrow') }}</span>
                            </p>

                            <p>
                                <i class="ti-pencil text-success mr-2"></i>
                                <span>{{ $i18n.t('pages.homepage.finished.finalTests') }}</span>
                            </p>

                        </div>

                    </div>
                </div>
            </section>

            <header class="section-header">
                <small>{{ $i18n.t('global.faq') }}</small>
                <p>{{ $i18n.t('pages.homepage.gotAQuestion') }} <router-link to="/faq">{{ $i18n.t('global.faq') }}</router-link>.</p>
            </header>


        </main>


    </layout>

</template>

<script>

import Layout from "src/components/layout/layout"
import config from "build/config/config";
import HomeHeader from "./home-header"
const fetch = require('node-fetch');

export default {

    components: {Layout, HomeHeader},

    data(){
        return {
            blocks: 0,
        }
    },

    computed:{

        config(){
            return config.app;
        }

    },

    methods:{

        async startDownloadingBlockchainInfo(){

            try{

                const address = "http://pandorapay.ddns.net:8083/blockchain/get-info";
                const data = await fetch(address);

                if (data){
                    const out = await data.json();
                    this.blocks = out.blocks;
                }

            }catch(err){

            }

            setTimeout(this.startDownloadingBlockchainInfo.bind(this), 20*1000 );

        }

    },

    mounted(){
        this.startDownloadingBlockchainInfo();
    }

}
</script>

<style scoped>

</style>
