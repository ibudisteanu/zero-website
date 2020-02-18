<template>

    <div class="language-select">
        <div class="sl-nav">
            <ul>
                <li>
                    <i :class="`sl-flag flag-${getSelected.short}`"></i> <b >{{getSelected.text}}</b>
                    <div class="triangle"></div>
                    <ul>
                        <li v-for="(lang, index) in languages" @click="selectLanguage(lang)">
                            <i :class="`sl-flag flag flag-${lang.short}`"></i>
                            <span class="active">{{lang.text}}</span>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    </div>

</template>

<script>
export default {

    data(){
        return {


            languages: {
                en: {
                    short: "en",
                    text: "English",
                },
                ro: {
                    short: "ro",
                    text: "Română",
                },
                it: {
                    short: "it",
                    text: "Italiano",
                },
                es: {
                    short: "es",
                    text: "Español",
                },
                de: {
                    short: "de",
                    text: "Deutsch",
                },
            }

        }
    },

    computed:{

        getSelected(){
            return this.languages[this.$store.state.localization.language];
        }

    },

    methods:{

        selectLanguage(language){

            this.$store.dispatch('LOCALIZATION_STORE_SELECTED_LANGUAGE', {language: language.short} );

        }

    }

}
</script>

<style scoped>

    .language-select{

    }

    .sl-nav {
        display: inline;
    }
    .sl-nav ul {
        margin:0;
        padding:0;
        list-style: none;
        position: relative;
        display: inline-block;
    }
    .sl-nav li {
        cursor: pointer;
        padding-bottom:10px;
    }
    .sl-nav li ul {
        display: none;
    }
    .sl-nav li:hover ul {
        position: absolute;
        top:50px;
        right:-15px;
        display: block;
        background: #fff;
        width: 120px;
        padding-top: 0px;
        z-index: 1;
        border-radius:5px;
        box-shadow: 0px 0px 20px rgba(0,0,0,0.2);
    }
    .sl-nav li:hover .triangle {
        position: absolute;
        top: 36px;
        right: -10px;
        z-index:10;
        height: 14px;
        overflow:hidden;
        width: 30px;
        background: transparent;
    }
    .sl-nav li:hover .triangle:after {
        content: '';
        display: block;
        z-index: 20;
        width: 15px;
        transform: rotate(45deg) translateY(0px) translatex(10px);
        height: 15px;
        background: #fff;
        border-radius:2px 0px 0px 0px;
        box-shadow: 0px 0px 20px rgba(0,0,0,0.2);
    }
    .sl-nav li ul li {
        position: relative;
        text-align: left;
        background: transparent;
        padding: 15px 15px;
        padding-bottom:0;
        z-index: 2;
        font-size: 15px;
        color: #3c3c3c;
        line-height: 10px;
    }
    .sl-nav li ul li:last-of-type {
        padding-bottom: 15px;
    }
    .sl-nav li ul li span {
        padding-left: 5px;
        font-size: 10px;
        line-height: 10px;
    }
    .sl-nav li ul li span:hover, .sl-nav li ul li span.active {
        color: #146c78;
    }
    .sl-flag {
        display: inline-block;
        box-shadow: 0px 0px 3px rgba(0,0,0,0.4);
        width: 15px;
        height: 15px;
        background: #aaa;
        border-radius: 50%;
        position: relative;
        top: 2px;
        overflow: hidden;
    }

    .flag{
        background-size: cover;
        background-position: center center;
    }
    .flag-de {
        background: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAIAAAAC64paAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAZdEVYdFNvZnR3YXJlAHBhaW50Lm5ldCA0LjAuMTM0A1t6AAAAPUlEQVQ4T+3HMQ0AIBTE0NOHM8x9B7hgh71bIWGieUvze1m7kHGBr/AVvsJX+EpmP5dV5/gKX+ErfIUvVDYcX2NMxQC8PAAAAABJRU5ErkJggg==');
    }
    .flag-en {
        background: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAIAAAAC64paAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAZdEVYdFNvZnR3YXJlAHBhaW50Lm5ldCA0LjAuMTM0A1t6AAABhUlEQVQ4T2Ows82PjGixsc4LD2tysC/09Kjw8622tyuICG8u0w/cpGSCBzF4e1VmZkzw9anOzOj38a4KCW4IC22ECHYk1l9tn4gHMeTlTnZxLikvm+XiUpKW2hvgX+vnV5OVOQEoOGfOtv94AYOzU3Fd7XxHh6Lq6rlurqUx0W0J8Z1AnbW18yotonaYuOJBDBXls4A+bGpaBCTz86YEBtQCvVBSPAPIbY0oP1/aiAcxABU1Ny+2tclvbFjo5FgUF9uenNwNDLnmpkWEnV1TPRcY1O1tS4H6i4umA/0MDK2K8tlAwRqHpP1uoXgQKKraWpcClTY3LQZaCLQ5NaUX5OaWJY3++SeTC/AgBmA4AXUClUJs9ver8fKsAAYEUJCws4G21dXNB1oFdD/Qz8DQTk4C+bm2dn6DZ9bRiDQ8iAEYt8CoBpK5YBIYw0AEEZwSXX4oMB4PYoC6gCzAcDqrjGzEsMfen2xEmbMv1rSTjRi26dqRjShz9o2+6WQjBrSShQSkZAIADvW/HLrLY6cAAAAASUVORK5CYII=');
    }

    .flag-ro {
        background: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAMCAYAAABr5z2BAAAAUElEQVQ4T2MU0c+Z/p+BIYMBCWwPnILMhbM/NKIKc7Cw7mEU1s/5r2gShyJzPMsXqwEvAlhRxK8/ecIwasBoGFAnHYjo58z8z8CQRmZS3gsAtBFaYGlhP7YAAAAASUVORK5CYII=');
    }

    .flag-it {
        background: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAMCAYAAABr5z2BAAAAUUlEQVQ4T2NkqPKazsDAkMGABJrEg5G5cLZmfhaK+H8GhlmMDFVe//XNdFEkjnm0YDXgv7c/ivj2vXsZRg0YDQNqpQPPmQwMjGnkJGUGBobZAEtLVo37EG2TAAAAAElFTkSuQmCC');
    }

    .flag-es {
        background: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAMCAYAAABr5z2BAAAA9ElEQVQ4T2PsY2Y48p+BwZqBPHCMsZeZ4X+RjiZZ2vuuXGeg3IBTDQz/TUMswS64fvMPw8//ggzP3oky8HD+ZuDi+M0gIfiRQUbiO1YXnl5znIER2QCG/wwMB3ZbMqjNWsPAuvcQw4Nr+xhMpJYxMP7/SpwBF26JMYgZtDHw33nI8DEvg+Hb6uUM3x4tYtCTv0ScAYcuyDAomFUxnN63muHfg/sMkrYhDF+frmJwt3pEnAE/frIwvPjtznDm+DkGUREWBmV1DQYJjsMMLEw/iDMApurPHyYGFpZ/BKMWHIgDnw56mRmOMjAwWBF0LxYFjAwMxwHj5XGr1M6PtQAAAABJRU5ErkJggg==');
    }

</style>

//flags can be found here https://www.iconfinder.com/iconsets/142-mini-country-flags-16x16px
