<template>

    <section class="section">
        <div class="container">
            <header class="section-header">
                <h2>{{ $i18n.t('pages.faq.weGotAnswers') }}</h2>
                <hr>
                <p>{{ $i18n.t('pages.faq.weGotAllTheAnswers') }}</p>
            </header>

            <div class="row">
                <div class="col-md-8 mx-auto">

                    <div class="accordion accordion-connected accordion-arrow-right">

                        <div class="card" id="what-payments-will-be-accepted">
                            <h5 class="card-title">
                                <router-link to="/faq/#what-payments-will-be-accepted" class="collapsed">{{ $i18n.t('pages.faq.questionTypeOfPaymentAccepted') }}</router-link>
                            </h5>

                            <div class="collapse show">
                                <div class="card-body">
                                    {{ $i18n.t('pages.faq.answerTypeOfPaymentAccepted') }}
                                </div>
                            </div>
                        </div>

                        <div class="card" id="how-the-peer-to-peer-exchange-works">
                            <h5 class="card-title">
                                <router-link to="/faq/#how-the-peer-to-peer-exchange-works" class="collapsed">{{ $i18n.t('pages.faq.questionPeerToPeerExchange') }}</router-link>
                            </h5>

                            <div class="collapse show">
                                <div class="card-body">
                                    {{ $i18n.t('pages.faq.answerPeerToPeerExchange') }}
                                </div>
                            </div>
                        </div>

                        <div class="card" id="how-is-the-buyer-protected">
                            <h5 class="card-title">
                                <router-link to="/faq/#how-is-the-buyer-protected" class="collapsed">{{ $i18n.t('pages.faq.questionIsBuyerProtected') }}</router-link>
                            </h5>

                            <div class="collapse show">
                                <div class="card-body">
                                    {{ $i18n.t('pages.faq.answerIsBuyerProtected') }}
                                </div>
                            </div>
                        </div>

                        <div class="card" id="what-is-a-Completely-Blinded-Escrow">
                            <h5 class="card-title">
                                <router-link to="/faq/#what-is-a-Completely-Blinded-Escrow" class="collapsed">{{ $i18n.t('pages.faq.questionCompletelyBlindedEscrow') }}</router-link>
                            </h5>

                            <div class="collapse show" >
                                <div class="card-body">
                                    {{ $i18n.t('pages.faq.answerCompletelyBlindedEscrow') }}
                                </div>
                            </div>
                        </div>

                        <div class="card" id="are-the-chat-messages-encrypted-in-the-trades">
                            <h5 class="card-title">
                                <router-link to="/faq/#are-the-chat-messages-encrypted-in-the-trades" class="collapsed">{{ $i18n.t('pages.faq.questionIsTradeChatEncrypted') }}</router-link>
                            </h5>

                            <div class="collapse show" >
                                <div class="card-body">
                                    {{ $i18n.t('pages.faq.answerIsTradeChatEncrypted') }}
                                </div>
                            </div>
                        </div>

                        <div class="card" id="does-the-Buyer-Seller-or-Escrow-will-know-each-other-addresses">
                            <h5 class="card-title">
                                <router-link to="/faq/#does-the-Buyer-Seller-or-Escrow-will-know-each-other-addresses" class="collapsed">{{ $i18n.t('pages.faq.questionAddressNeedToKnowOnly') }}</router-link>
                            </h5>

                            <div class="collapse show" >
                                <div class="card-body">
                                    {{ $i18n.t('pages.faq.answerAddressNeedToKnowOnly') }}
                                </div>
                            </div>
                        </div>

                        <div class="card" id="how-the-Buyer-knows-that-the-Seller-has-enough-funds-promised-to-sell">
                            <h5 class="card-title">
                                <router-link to="/faq/#how-the-Buyer-knows-that-the-Seller-has-enough-funds-promised-to-sell" class="collapsed">{{ $i18n.t('pages.faq.questionProofOwnerFunds') }}</router-link>
                            </h5>

                            <div class="collapse show" >
                                <div class="card-body">
                                    {{ $i18n.t('pages.faq.answerProofOwnerFunds') }}
                                </div>
                            </div>
                        </div>

                        <div class="card" id="what-assets-tokens-can-be-traded">
                            <h5 class="card-title">
                                <router-link to="/faq/#what-assets-tokens-can-be-traded" class="collapsed">{{ $i18n.t('pages.faq.questionCanWeTradeAnything') }}</router-link>
                            </h5>

                            <div class="collapse show" >
                                <div class="card-body">
                                    {{ $i18n.t('pages.faq.answerCanWeTradeAnything') }}
                                </div>
                            </div>
                        </div>


                        <div class="card" id="how-assets-tokens-are-untraceable">
                            <h5 class="card-title">
                                <router-link to="/faq/#how-assets-tokens-are-untraceable" class="collapsed">{{ $i18n.t('pages.faq.questionRingSignatureUntraceable') }}</router-link>
                            </h5>

                            <div class="collapse show" >
                                <div class="card-body">
                                    {{ $i18n.t('pages.faq.answerRingSignatureUntraceable') }}
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>

        </div>
    </section>

</template>

<script>
import config from "build/config/config";
export default {

    computed:{
        route(){
            return this.$router.currentRoute.hash;
        },
        config(){
            return config.app;
        }
    },



}
</script>

<style scoped>
</style>
