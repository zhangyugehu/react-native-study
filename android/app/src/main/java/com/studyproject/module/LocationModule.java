package com.studyproject.module;

import android.content.Context;
import android.location.Location;
import android.location.LocationListener;
import android.location.LocationManager;
import android.os.Bundle;
import android.widget.Toast;

import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.modules.core.DeviceEventManagerModule;

import java.util.List;

/**
 * Created by canzhanbao on 2017/11/30 0030.
 */

public class LocationModule extends ReactContextBaseJavaModule implements LocationListener{
    private static final String MODULE_NAME = "LocationModule";
    private static final String EVENT_LOCATION = "event_location";
    private ReactApplicationContext mReactContext;
    private Callback mCallback;

    public LocationModule(ReactApplicationContext reactContext) {
        super(reactContext);
        this.mReactContext = reactContext;

    }

    private void emitJSEventMessage(String text) {

        WritableMap params = Arguments.createMap();
        params.putString("text", text);
        mReactContext.getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter.class)
                .emit(EVENT_LOCATION, params);
    }

    @ReactMethod
    public void startLocation(Callback callback){
        this.mCallback =  callback;
        LocationManager locationManager = (LocationManager) mReactContext.getSystemService(Context.LOCATION_SERVICE);
        //获取所有可用的位置提供器
        List<String> providers = locationManager.getProviders(true);
        String locationProvider;
        if(providers.contains(LocationManager.GPS_PROVIDER)){
            //如果是GPS
            locationProvider = LocationManager.GPS_PROVIDER;
        }else if(providers.contains(LocationManager.NETWORK_PROVIDER)){
            //如果是Network
            locationProvider = LocationManager.NETWORK_PROVIDER;
        }else{
            emitJSEventMessage("没有可用的位置提供器");
            return ;
        }
        //获取Location
        Location location = locationManager.getLastKnownLocation(locationProvider);
        if(location!=null){
            //不为空,显示地理位置经纬度
            emitJSEventMessage("维度：" + location.getLatitude() +"\n" + "经度：" + location.getLongitude());
        }
        //监视地理位置变化
        locationManager.requestLocationUpdates(locationProvider, 3000, 1, this);
    }

    @Override
    public String getName() {
        return MODULE_NAME;
    }

    @Override
    public void onLocationChanged(Location location) {
        emitJSEventMessage("维度：" + location.getLatitude() +"\n"
                + "经度：" + location.getLongitude());
    }

    @Override
    public void onStatusChanged(String s, int i, Bundle bundle) {

    }

    @Override
    public void onProviderEnabled(String s) {

    }

    @Override
    public void onProviderDisabled(String s) {

    }
}
