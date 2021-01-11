constants.AvailableLanguages = config_get('project.interface.languages');
constants.AvailableRegions   = config_get('project.regionalisation');

var detectedLanguage   = config_get('features.l10n.lang.default');
var preferredRegion    = config_get('features.l10n.region.default');
var preferredContinent = config_get('features.l10n.continent.default');

var browserLanguage = navigator.language || navigator.userLanguage;
var langMatch = Object.keys(constants.AvailableLanguages).filter(function (key) {
    // Reduce the array of available languages keys to only those that
    // match the browser language
    return browserLanguage && browserLanguage.indexOf(constants.AvailableLanguages[key].shorthand) == 0;
});

if (langMatch && langMatch.length > 0) {
    // Take the first matched language from the filtered array
    detectedLanguage = langMatch.shift();
}

var splitTerritory = detectedTerritory.split('_');
preferredRegion = (LanguageHelper.getCountry(splitTerritory[1])) ? LanguageHelper.getCountry(splitTerritory[1]).code : preferredRegion;
preferredContinent = LanguageHelper.getContinentFromCountry(splitTerritory[1]);

var saveBrowserLanguage = browserLanguage.split('-') || false;

/*
 * Detect whether or not localStorage is enabled
 */
var isReachableStore = true;
try {
    if (localStorage.getItem('user')) {
        var user = JSON.parse(localStorage.getItem('user'));
        if (user.userSetting && user.userSetting.interfaceLanguageKey) {
            detectedLanguage = user.userSetting.interfaceLanguageKey;
        }
    }
} catch (e) {
    isReachableStore = false;
}

// -- Begin URL settings parser -- //
/*
 * parseUri 1.2.2
 * (c) Steven Levithan <stevenlevithan.com>
 * MIT License
 */
function parseUri (str) {
    var o   = {
            strictMode: false,
            key       : ["source", "protocol", "authority", "userInfo", "user", "password", "host", "port", "relative", "path", "directory", "file", "query", "anchor"],
            q         : {
                name  : "queryKey",
                parser: /(?:^|&)([^&=]*)=?([^&]*)/g
            },
            parser    : {
                strict: /^(?:([^:\/?#]+):)?(?:\/\/((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?))?((((?:[^?#\/]*\/)*)([^?#]*))(?:\?([^#]*))?(?:#(.*))?)/,
                loose : /^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/
            }
        },
        m   = o.parser[o.strictMode ? "strict" : "loose"].exec(str),
        uri = {},
        i   = 14;

    while (i--) {
        uri[o.key[i]] = m[i] || "";
    }

    uri[o.q.name] = {};
    uri[o.key[12]].replace(o.q.parser, function ($0, $1, $2) {
        if ($1) {
            uri[o.q.name][$1] = $2;
        }
    });

    return uri;
}

var paramCallbacks = {},
    urlParams      = parseUri(window.location).queryKey,
    forcedLanguage = false;

if (Object.keys(urlParams).length > 0) {
    /*
     * Define the callbacks associated with the URL parameters
     */

    // Callback for the 'l' parameter
    paramCallbacks.l = function (value) {
        if (!config_get('features.l10n.lang.switch.enabled')) {
            return false;
        }
        if (value.length === 5) {
            value = value.substr(0, 2)
        }
        for (var lang in constants.AvailableLanguages) {
            if (constants.AvailableLanguages[lang].shorthand === value) {
                forcedLanguage   = constants.AvailableLanguages[lang];
                detectedLanguage = forcedLanguage.code;
                break;
            }
        }
    };

    /*
     * Loop over the URL parameters and execute the
     * corresponding callbacks
     */
    for (var urlParam in urlParams) {
        // For each URL parameter, check to see if an associated callback exists
        for (var paramCallback in paramCallbacks) {
            // If the corresponding callback exists, execute it with the value of the URL parameter
            if (urlParam === paramCallback) {
                paramCallbacks[paramCallback](urlParams[urlParam]);
            }
        }
    }
}
// -- end URL settings parser -- //

/*
 * Initialize logger
 */
var l = Logger.getLogger(config_get('isDevelopmentMode') ? 'development' : 'production');
_initI18n({showMissingTranslation: config_get('isDevelopmentMode') && detectedLanguage !== 'en_gb'});

var languageFile = document.createElement('script');

// {"fr_fr":"/js/lang/fr_fr.js?46a72b3d012f7e9ea12e7f95d367b9f4a05279e9","en_gb":"/js/lang/en_gb.js?d9aead06e4792f609325d7ffb15a41037a878111","de_de":"/js/lang/de_de.js?a7eabca039636619aa49ab9264f19506bea46058","it_it":"/js/lang/it_it.js?167f97cb8c75729e96db4750cf2c04238bbdb073","br_fr":"/js/lang/br_fr.js?2961090c2e1e0c007df0104250e384c1dc0a093f","ca_es":"/js/lang/ca_es.js?ed1ad108d519becc06f2e06909248e6e626c4dc7","co_fr":"/js/lang/co_fr.js?c035e87e2ac0474af6517c0f7e669c37ebe97516","es_es":"/js/lang/es_es.js?887ddbe0c404eab3462a67c71fce472a4c8e59c1","eu_es":"/js/lang/eu_es.js?353e52939addbf75f7c08b851564fae6b5dc743e","nl_nl":"/js/lang/nl_nl.js?7df5b9bc092646ce62547b5657a175cf22a07c87","pl_pl":"/js/lang/pl_pl.js?460abec926bbc4bc5020d9decdbde527f66f820f","pt_pt":"/js/lang/pt_pt.js?cb6d2112f14d59e7446328207c91a4dbba82abbe","ru_ru":"/js/lang/ru_ru.js?e249f38db2b68279dd28c10fff97779412d5b1db"} is generated during build
// Because the filename of each language file is required in order to append the <checksum> component, the list is
// generated during build and gets substituted to {"fr_fr":"/js/lang/fr_fr.js?46a72b3d012f7e9ea12e7f95d367b9f4a05279e9","en_gb":"/js/lang/en_gb.js?d9aead06e4792f609325d7ffb15a41037a878111","de_de":"/js/lang/de_de.js?a7eabca039636619aa49ab9264f19506bea46058","it_it":"/js/lang/it_it.js?167f97cb8c75729e96db4750cf2c04238bbdb073","br_fr":"/js/lang/br_fr.js?2961090c2e1e0c007df0104250e384c1dc0a093f","ca_es":"/js/lang/ca_es.js?ed1ad108d519becc06f2e06909248e6e626c4dc7","co_fr":"/js/lang/co_fr.js?c035e87e2ac0474af6517c0f7e669c37ebe97516","es_es":"/js/lang/es_es.js?887ddbe0c404eab3462a67c71fce472a4c8e59c1","eu_es":"/js/lang/eu_es.js?353e52939addbf75f7c08b851564fae6b5dc743e","nl_nl":"/js/lang/nl_nl.js?7df5b9bc092646ce62547b5657a175cf22a07c87","pl_pl":"/js/lang/pl_pl.js?460abec926bbc4bc5020d9decdbde527f66f820f","pt_pt":"/js/lang/pt_pt.js?cb6d2112f14d59e7446328207c91a4dbba82abbe","ru_ru":"/js/lang/ru_ru.js?e249f38db2b68279dd28c10fff97779412d5b1db"}.
// see: #1701102123JB
// noinspection JSUnresolvedVariable
languageFile.src = {"fr_fr":"/js/lang/fr_fr.js?46a72b3d012f7e9ea12e7f95d367b9f4a05279e9","en_gb":"/js/lang/en_gb.js?d9aead06e4792f609325d7ffb15a41037a878111","de_de":"/js/lang/de_de.js?a7eabca039636619aa49ab9264f19506bea46058","it_it":"/js/lang/it_it.js?167f97cb8c75729e96db4750cf2c04238bbdb073","br_fr":"/js/lang/br_fr.js?2961090c2e1e0c007df0104250e384c1dc0a093f","ca_es":"/js/lang/ca_es.js?ed1ad108d519becc06f2e06909248e6e626c4dc7","co_fr":"/js/lang/co_fr.js?c035e87e2ac0474af6517c0f7e669c37ebe97516","es_es":"/js/lang/es_es.js?887ddbe0c404eab3462a67c71fce472a4c8e59c1","eu_es":"/js/lang/eu_es.js?353e52939addbf75f7c08b851564fae6b5dc743e","nl_nl":"/js/lang/nl_nl.js?7df5b9bc092646ce62547b5657a175cf22a07c87","pl_pl":"/js/lang/pl_pl.js?460abec926bbc4bc5020d9decdbde527f66f820f","pt_pt":"/js/lang/pt_pt.js?cb6d2112f14d59e7446328207c91a4dbba82abbe","ru_ru":"/js/lang/ru_ru.js?e249f38db2b68279dd28c10fff97779412d5b1db"}[detectedLanguage];
document.documentElement.setAttribute("lang", detectedLanguage.substr(0, 2));

var applicationState = null;

function initApplication () {
    Model.setup(false);
    var userPromise = UserModel
        .getUser();

    userPromise
        .then(function (user) {
            return startApplication(user);
        })
        .then(function (error, needsRefresh) {
            // Refresh the application if we need to force an interface language
            if (needsRefresh) {
                applicationState.user.update();
                Application.rootComponent.refresh();
            }

            // Notify the user if their browser will soon be deprecated
            if (soonToBeDeprecatedBrowser) {
                AlertComponent.info(_('You are using an outdated and potentially unsecure browser. As of 3/13/2017, your browser will no longer be supported by Qwant.<br/>Please consider using <a href="{f4qUrl}">Firefox for Qwant</a>, or any other up-to-date browser. If you absolutely need to use this browser, you can use <a href="{liteUrl}">lite.qwant.com</a>.',
                    'homepage',
                    {f4qUrl: '/firefoxqwant/download', liteUrl: config_get('liteUrl')}
                ));
            }
        });
}

function setDisplayType(userSetting) {
    if (typeof userSetting.selectedTheme !== 'undefined' && siteConfiguration.themes[userSetting.selectedTheme]) {
        var body = $('body')[0];
        if (body) {
            if (userSetting.selectedTheme !== 1) {
                removeClass(body, 'theme-dark');
                var metaTheme = $i('meta_theme');
                if (metaTheme) {
                    metaTheme.parentNode.removeChild(metaTheme);
                }
            } else {
                var color = document.createElement('meta');
                color.name='theme-color';
                color.content='#21252b';
                color.id = 'meta_theme';
                $('head')[0].appendChild(color);
            }
            addClass(body, siteConfiguration.themes[userSetting.selectedTheme].className);
        }
    }
}

function startApplication (user) {
    applicationState = {
        rootUrl         : window.location.protocol + '//' + window.location.host,
        user            : user,
        timeMillisOffset: serverTime - new Date().getTime()
    };

    setDisplayType(user.userSetting);

    updatePopinPref();

    var application = new Application(new AppComponent(window.location.pathname), document.getElementById('app'));

    if (Dispatcher.route.params["client"]) {
        AjaxParameters.putPrefix("client", Dispatcher.route.params["client"])
    }

    if (userClient === 'brz-huawei' || navigator.userAgent.indexOf('QwantMobile/4.0') !== -1) {
        addClass(document.body, 'brz-huawei');
    }

    if (Dispatcher.route.params["widget"] && Dispatcher.route.params["widget"] === '1' && BrowserHelper.isTabletOrMobile) {
        addClass(document.body, 'widget');
    }

    //if user is in an old unsuported search language setting, we fallback to its navigator language or en_GB
    if (user.userSetting && user.userSetting.searchRegionKey && !LanguageHelper.getCountry(user.userSetting.searchRegionKey)) {
        if (saveBrowserLanguage && saveBrowserLanguage.length > 1 && LanguageHelper.getCountry(saveBrowserLanguage[1])) {
            user.userSetting.setSearchLanguage(saveBrowserLanguage[0]);
            user.userSetting.setSearchRegion(saveBrowserLanguage[1]);
        } else {
            user.userSetting.setSearchLanguage("en");
            user.userSetting.setSearchRegion('GB');
        }

        var updatePromise = user.update();

        updatePromise.then(function (error) {
            if (error) {
                AlertComponent.error(_('an error occurred in updating your settings', 'user'));
            } else {
                Application.rootComponent.refresh();
                Dispatcher.history.goTo(0);
            }
        });
    }

    var appStateInit = new promise.Promise();
    if (forcedLanguage) {
        appStateInit = applicationState.user.updateLang(forcedLanguage);
    } else {
        appStateInit.done(false, false);
    }

    return appStateInit;
}

languageFile.onerror = function () {
    document.body.removeChild(languageFile);
    var defaultLanguageFile    = document.createElement('script');
    defaultLanguageFile.src    = '/js/lang/' + config_get('features.l10n.lang.default') + '.js?1608192960675';
    defaultLanguageFile.onload = languageFileLoad;
    document.body.appendChild(defaultLanguageFile);
};

languageFile.onload = languageFileLoad;

function languageFileLoad () {
    try {
        var userExt = JSON.parse(localStorage.getItem("userExtension"));
    } catch (e) {
        userExt = null;
    }
    if (userExt !== null) {
        userExt.source = "extension";
        AjaxManager.post(ajax.user.extensionLogin(), new AjaxParameters(userExt).getParameters())
            .then(function (error, data) {
                if (!error && data.status === "success") {
                    var userModel = new UserModel(JSON.stringify(data));
                    return startApplication(userModel)
                        .then(function (error, needsRefresh) {
                            // Refresh the application if we need to force an interface language
                            if (needsRefresh) {
                                applicationState.user.update();
                                Application.rootComponent.refresh();
                            }
                        });
                } else {
                    try {
                        localStorage.removeItem("userExtension");
                    } catch (e) {}
                    initApplication();
                }
            });
    } else {
        initApplication();
    }
}

/**
 * Sets the noPopin local storage key to 'true' if the user has set the
 * &no_popin url parameter
 */
function updatePopinPref() {
    if (noPopin) {
        try {
            localStorage.setItem('noPopin', 'true');
        } catch (e) {
            l.error('local storage is not available');
        }
    }
}

document.body.appendChild(languageFile);

document.addEventListener("qwant_extension_login", function () {
    window.location.reload();
});

document.addEventListener("qwant_extension_logout", function () {
    window.location.reload();
});
