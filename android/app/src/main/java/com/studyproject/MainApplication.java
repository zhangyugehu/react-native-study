package com.studyproject;

import android.app.Application;

import com.facebook.react.ReactApplication;

import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.modules.network.OkHttpClientProvider;
import com.facebook.react.modules.network.ReactCookieJarContainer;
import com.facebook.react.shell.MainReactPackage;
import com.facebook.soloader.SoLoader;
import com.facebook.stetho.Stetho;
import com.facebook.stetho.okhttp3.StethoInterceptor;
import com.microsoft.codepush.react.CodePush;
import com.studyproject.reactpackage.ImagePickerPackage;
import com.studyproject.reactpackage.LocationReactPackage;

import java.util.Arrays;
import java.util.List;
import java.util.concurrent.TimeUnit;

import okhttp3.OkHttpClient;

public class MainApplication extends Application implements ReactApplication {

    private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {
        @Override
        public boolean getUseDeveloperSupport() {
            return BuildConfig.DEBUG;
        }

        @Override
        protected List<ReactPackage> getPackages() {
            return Arrays.<ReactPackage>asList(
                    new MainReactPackage(),
                    new ImagePickerPackage(),
                    new LocationReactPackage(),
                    new CodePush(BuildConfig.CODEPUSH_KEY, MainApplication.this, BuildConfig.DEBUG)
            );
        }

        @Override
        protected String getJSMainModuleName() {
            return "index";
        }


        @Override
        protected String getJSBundleFile() {
            return CodePush.getJSBundleFile();
        }
    };

    @Override
    public ReactNativeHost getReactNativeHost() {
        return mReactNativeHost;
    }

    @Override
    public void onCreate() {
        super.onCreate();
        SoLoader.init(this, /* native exopackage */ false);
        Stetho.initializeWithDefaults(this);
        OkHttpClient client = new OkHttpClient.Builder()
                .connectTimeout(0, TimeUnit.MILLISECONDS)
                .readTimeout(0, TimeUnit.MILLISECONDS)
                .writeTimeout(0, TimeUnit.MILLISECONDS)
                .cookieJar(new ReactCookieJarContainer())
                .addNetworkInterceptor(new StethoInterceptor())
                .build();
        OkHttpClientProvider.replaceOkHttpClient(client);
    }
}
