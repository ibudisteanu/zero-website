/**
 * AUTHORS:
 *
 * d_a_n_d_a_n_i_e_l
 *
 */

import config from "build/config/config";

export default {

    global:{
        webWallet: "CarteraWeb",
        explorer: `Explorador de Bloques`,
        faq: `FAQ`,
    },

    pages:{

        homepage:{

            title: "El Primer Exchange Anonimo Del Mundo",
            subTitle: "Pagos anónimos fáciles para los usuarios",
            blocks: 'BLOQUES',
            transactions: 'TRANSACCIÓNES',
            uniqueAccounts: 'CUENTAS ÚNICAS',
            realTimeDataFrom: 'DATOS EN TIEMPO REAL DE:',
            testNetBlockchainExplorer: 'Test net blockchain explorer',

            anonymousCashForTheInternet: 'Dinero anónimo para internet',
            worldsFirstAnonymousDecentralizedExchange: "El Primer Exchange Descentralizado Anónimo Del Mundo",
            itsFastPrivateAndSecure: `Es rápido, privado y seguro. Con ${config.app.name},  eres tu propio banco. Puedes enviar dinero de forma totalmente anónima a cualquier persona sabiendo que otros no pueden ver su saldo o rastrear su actividad.`,

            getPaidAnonymously: 'Recibe Pagos Anónimamente',
            itsUntraceable: "Es imposible de rastrear",
            sendingReceivingAddressesObfuscated: `Las direcciones de envío y recepción, así como los montos de las transacciones, se ocultan de manera predeterminada. Las transacciones en ${config.app.name} no se pueden vincular a un usuario en particular o una identidad del mundo real.`,

            privateDigitalCurrency: "Moneda Digital Privada",
            withASingleClick: "Con un solo Click",
            neverBeenEasierToSendAndReceiveMoney: "Nunca fue tan fácil enviar y recibir dinero a cualquier parte del mundo de forma totalmente anónima e imposible de rastrear.",

            youAreYourOwnBank: `Eres tu propio Banco`,
            withNameYouAreYourOwnBank: `Con ${config.app.name}, usted es su propio banco y los demás no pueden ver sus saldos ni rastrear su actividad. Saluda a ${config.app.name}.`,
            nameIsSecure: `${config.app.name} es Seguro`,
            unstoppableByUsingDecentralizedBlockchain: `Imparable mediante el uso de la tecnología blockchain descentralizada asegurada por una red de usuarios.`,
            nameIsPrivate: `${config.app.name} es Privado`,
            youOwnYourOwnKey: `Eres dueño de tu propia clave y nadie puede rastrearte.`,

            anonymousPaymentsMadeEasy: `Pagos anónimos fáciles.`,

            features:{

                makeItPerfect:`¡Haciéndolo perfecto para ti!`,
                worldFirstAnonymousExchange:`El primer exchange descentralizado anónimo e imposible de rastrear del mundo`,

                private: `Privado`,
                privateZether: `El nuevo mecanismo criptográfico Zether utilisa Σ-bullets ocultando los orígenes, cantidades y destinos de todas las transacciones.`,

                untraceable: `Imposible de rastrear`,
                obfuscated: `Las direcciones de envío y recepción, incluidas las cantidades negociadas, se ocultan de manera predeterminada.`,

                fungible: `Fungible`,
                noBlacklist: `Los vendedores o los intercambios no pueden incluir en la lista negra las unidades ${config.app.name} en función de su participación en transacciones anteriores.`,

                assetPlusCurrency: `Activos y Monedas`,
                assetPlusCurrencyAnchor: `Activos digitales anónimos y monedas que anclan el valor de otros activos respaldados por la comunidad.`,

                confidentialBlindedEscrow: `Intermediario confidencial ciego`,
                completelyBlindEscrow: `Los intermediarios no saben la cantidad, el remitente real y el destino real. Los intermediarios están completamente ciegos.`,

                reviewsForTraders: `Reputación para comerciantes`,
                reviewsForTradersAnonymous: `Para aumentar la confianza entre los comerciantes dentro de una red no confiable, se pueden escribir revisiones anónimas.`,

                encryptedChat: `Chat encriptado`,
                encryptedChatEndToEnd: `El chat en ${config.app.name} PandoraPay entre los comerciantes y los intermediarios esta encriptado de extremo a extremo.`,

                noDeposit: `Sin depósito`,
                noDepositNoCoins: `${config.app.name}  es el primer exchange p2p descentralizado que permite a los usuarios comenzar a operar sin necesidad de depositar o poseer monedas. Para comprar monedas o activos, no necesita poseer monedas`,

                instantAnonymity: `Anonimato instantáneo & carteras HD`,
                advancedHdWallet: `Solo lleva segundos descifrar y ver sus saldos y transacciones. Más aún, tiene implementada una cartera HD avanzada.`,

            },


            finished:{

                timeline: `Cronología red principal de PandoraPay`,
                launchTimeline: `Cronología para el lanzamiento de PandoraPay. No queremos ofrecer ninguna fecha específica, pero la mayoría del código ya se ha implementado`,

                dataStructure: `Estructura de datos`,
                networking: `Redes`,
                cryptoAndRingCT: `Crypto & RingCT - Firmas confidenciales de anillo`,
                blockchainAndConsensus: `Blockchain & Consensus`,
                exchangeFiftyPerCent: `Exchange - 50%`,
                encryptedMessages: `Mensajes cifrados`,
                completelyBlindedEscrow: `Fideicomiso completamente ciego`,
                finalTests: `Pruebas finales`,

            },


            gotAQuestion: `¿Tienes una pregunta? Tenemos respuestas en preguntas frecuentes. `,
        },

        contact:{
            people: `Gente`,
            peopleMeetTheCommunity: `Conócenos`,

            team: `Te presentamos nuestro pequeño equipo`,
            teamAlexandruIonutBudisteanu: `Alexandru Ionut Budisteanu`,
            teamFounder: `Fundador`,
            teamFounderAchievements: `Alexandru ha sido nominado a "Forbes Europe 30 under 30" en la categoría de industria. En 2013, fue nominado por la revista Time como uno de los adolescentes más influyentes del mundo. El MIT nombró un asteroide con su nombre.`,

            contactTheCommunity: `Contacto`,
            letsTalk: `Hablemos`,
            waysToContact: `Estas son las formas en que puede contactarnos con cualquier pregunta que tenga`,

            messageReceivedWaitNow: `Hemos recibido su mensaje y nos pondremos en contacto con usted.`,
            inputYourName: `Su nombre`,
            inputYourEmail: `Su correo electronico`,
            inputYourMessage: `Mensaje`,
            send: `ENVIAR`,
        },

        faq:{
            weGotAnswers: `Preguntas Frecuentes`,
            weGotAllTheAnswers: `¿Tienes una pregunta? Estamos aquí para responder tus preguntas!`,

            questionTypeOfPaymentAccepted: `¿Qué pagos serán aceptados?`,
            answerTypeOfPaymentAccepted: `Se aceptarán todos los pagos, excepto los pagos que ofrecen devoluciones de cargo fácilmente estafando a los vendedores. ${config.app.name} no está limitado y los usuarios pueden definir sus propios métodos de pago, incluyendo: cara a cara, transferencias bancarias nacionales / internacionales, SEPA, AliPay, WeChat Pay, Revolut, BTC, ETH, WEBD, etc. los pagos que faciliten las devoluciones de cargo serán desaconsejados para los compradores de bajo rango. Uno de estos pagos es PayPal porque es fácil hacer devoluciones de cargo alegando que no se han recibido los productos.`,

            questionPeerToPeerExchange: `¿Cómo funciona el intercambio Peer-to-Peer?`,
            answerPeerToPeerExchange: `Se produce un intercambio cuando un comprador adquiere de un vendedor algunas monedas / fichas. El vendedor abrirá una operación que vende algunos activos (tokens) y el comprador paga fuera de la cadena para adquirir estos activos (tokens). Después de finalizar y confirmar el pago fuera de la cadena del comprador, el comprador obtendrá los activos (tokens) del vendedor.`,

            questionIsBuyerProtected: `¿Cómo está protegido el comprador en ${config.app.name} ?`,
            answerIsBuyerProtected: `El Vendedor que posee los activos y desea venderlos en el intercambio tendrá que depositar anónimamente los activos en una cuenta comercial especial que aún es de su propiedad. Luego, el vendedor elije un intermediario anonimo para la supervisión comercial. Ahora, el vendedor no puede mover fondos de la cuenta comercial sin el permiso del intermediario. En caso de disputa, el comprador puede presentar una queja demostrando que envió los fondos al vendedor, pero el vendedor no los envía voluntariamente.`,

            questionCompletelyBlindedEscrow: `¿Qué es un fideicomiso completamente ciego?`,
            answerCompletelyBlindedEscrow: `Un fideicomiso completamente ciego (intermediario) NO sabrá la cantidad negociada, la dirección del vendedor real y la dirección del comprador real. Tampoco tiene poder para mover los fondos por sí mismo, solo se usa para asegurar que el comprador no mueva los fondos prometidos a otro vendedor.`,

            questionIsTradeChatEncrypted: `¿Los mensajes de chat están encriptados en los intercambios?`,
            answerIsTradeChatEncrypted: `¡SI! Todos los mensajes de chat se cifran de extremo a extremo utilizando funciones criptográficas, ECIES - Elliptic Curve Integrated Encryption Scheme.`,

            questionAddressNeedToKnowOnly: `¿El comprador, el vendedor o el intermediario se conocerán las direcciones?`,
            answerAddressNeedToKnowOnly: `¡No! El comprador no sabrá la dirección real del vendedor. El vendedor no sabrá la dirección real del comprador. El fideicomiso no conocerá las direcciones reales del comprador o del vendedor ni el monto de la transacción. El comprador y los vendedores solo sabrán la dirección de depósito.`,

            questionProofOwnerFunds: `¿Cómo sabe el Comprador que el Vendedor tiene los fondos prometidos?`,
            answerProofOwnerFunds:`Si acordaron el precio, el Comprador solicitará automáticamente una prueba al Vendedor de que tiene suficientes fondos para realizar el intercambio. El vendedor generará una prueba que demuestre que tiene suficiente para la venta.`,

            questionCanWeTradeAnything: `¿Qué activos / tokens se pueden intercambiar?`,
            answerCanWeTradeAnything: `Cualquier activo del mundo real puede ser "tokenizado" en una forma digital y negociarse en ${config.app.name}. Cualquiera puede emitir activos / tokens en ${config.app.name}. Los activos / tokens pueden ser vinculados por un activo del mundo real, pueden ser garantizados por un activo / cripto diferente o incluso no garantizados.`,

            questionRingSignatureUntraceable: `¿Cómo es que los activos / tokens ${config.app.name} no se pueden rastrear?`,
            answerRingSignatureUntraceable: `${config.app.name} usa firmas de anillo confidenciales (como en Monero), lo que significa que las cantidades están ocultas (confidenciales) y una transacción usa señuelos aleatorios de la red (una transacción de anillo).`,
        },

    },

    layout:{

        navbar:{
            logoAlt: `${config.app.name}`,

            home: `Inicio`,
            contact: `Contacto`,
        },

        footer:{

            organization: "Organization",
            aboutUs: "Acerca de",
            contact: "Contacto",

            blockchain: "Blockchain",
            whyUs:`¿Por qué ${config.app.name}?`,
            security: "Seguridad",
            termsAndConditions: "Términos y Condiciones",

            community: "Comunidad",
            github: "GitHub",
            telegram: "Telegram",

            support: "Apoyo",
            helpCenter: "Centro de Ayuda",
            guides: "Guías",
            api: "API",

            footer: `© 2020 ${config.app.name}.  Es un proyecto de código abierto creado por una comunidad.`

        },

    }



}
