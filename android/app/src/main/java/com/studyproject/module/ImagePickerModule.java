package com.studyproject.module;

import android.app.Activity;
import android.content.Intent;
import android.graphics.Bitmap;
import android.graphics.BitmapFactory;
import android.net.Uri;
import android.os.Environment;
import android.provider.MediaStore;
import android.util.Log;

import com.facebook.react.bridge.ActivityEventListener;
import com.facebook.react.bridge.BaseActivityEventListener;
import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

import java.io.File;
import java.text.SimpleDateFormat;
import java.util.Date;

/**
 * Created by canzhanbao on 2017/12/1 0001.
 */

public class ImagePickerModule extends ReactContextBaseJavaModule {

    private static final String MODULE_NAME = "ImagePickerModule";
    private static final int IMAGE_PICKER_REQUEST = 123456;
    private static final int REQUEST_TAKE_PHOTO = 123457;

    private Promise mActivityEventListenerPromise;

    private ActivityEventListener eventListener = new BaseActivityEventListener(){
        @Override
        public void onActivityResult(Activity activity, int requestCode, int resultCode, Intent data) {
//            super.onActivityResult(activity, requestCode, resultCode, data);
            if(mActivityEventListenerPromise == null)return;
            if(resultCode == Activity.RESULT_CANCELED){
                mActivityEventListenerPromise.reject("RESULT_CANCELED", "取消了选择");
                return;
            }

            if(resultCode != Activity.RESULT_OK) return;
            if(requestCode == REQUEST_TAKE_PHOTO){
                mActivityEventListenerPromise.resolve(photoUri.toString());
//                if (data != null) {
//                    if (data.hasExtra("data")) {
//                        Bitmap bitmap = data.getParcelableExtra("data");
//                    }
//                } else {
//                }
            }else if(requestCode == REQUEST_TAKE_PHOTO){
                Uri uri = data.getData();
                if(uri == null){
                    mActivityEventListenerPromise.reject("RESULT_DATA_NULL", "选择图片不存在");
                }else{
                    mActivityEventListenerPromise.resolve(uri.toString());
                }
            }
            mActivityEventListenerPromise = null;
        }
    };

    public ImagePickerModule(ReactApplicationContext reactContext) {
        super(reactContext);
        reactContext.addActivityEventListener(eventListener);
    }

    @Override
    public String getName() {
        return MODULE_NAME;
    }

    @ReactMethod
    public void pickImage(final Promise promise) {
        Activity currentActivity = getCurrentActivity();

        if (currentActivity == null) {
            promise.reject("ACTIVITY_DOES_NOT_EXIST", "Activity doesn't exist");
            return;
        }

        // Store the promise to resolve/reject when picker returns data
        mActivityEventListenerPromise = promise;

        try {
            final Intent galleryIntent = new Intent(Intent.ACTION_PICK);

            galleryIntent.setType("image/*");

            final Intent chooserIntent = Intent.createChooser(galleryIntent, "Pick an image");

            currentActivity.startActivityForResult(chooserIntent, IMAGE_PICKER_REQUEST);
        } catch (Exception e) {
            mActivityEventListenerPromise.reject("FAILED_TO_SHOW_PICKER", e);
            mActivityEventListenerPromise = null;
        }
    }
    public final int TYPE_TAKE_PHOTO = 1;//Uri获取类型判断

    public Uri getMediaFileUri(int type){
        File mediaStorageDir = new File(Environment.getExternalStoragePublicDirectory(Environment.DIRECTORY_PICTURES), "Take_Photo");
        if (!mediaStorageDir.exists()) {
            if (!mediaStorageDir.mkdirs()) {
                return null;
            }
        }
        //创建Media File
        String timeStamp = new SimpleDateFormat("yyyyMMdd_HHmmss").format(new Date());
        File mediaFile;
        if (type == TYPE_TAKE_PHOTO) {
            mediaFile = new File(mediaStorageDir.getPath() + File.separator + "IMG_" + timeStamp + ".jpg");
        } else {
            return null;
        }
        Log.d("ImagePickerModule", "getMediaFileUri: " + mediaFile.getAbsolutePath());
        return Uri.fromFile(mediaFile);
    }

    private Uri photoUri;
    @ReactMethod
    public void takePhoto(final Promise promise) {
        Activity currentActivity = getCurrentActivity();

        if (currentActivity == null) {
            promise.reject("ACTIVITY_DOES_NOT_EXIST", "Activity doesn't exist");
            return;
        }

        // Store the promise to resolve/reject when picker returns data
        mActivityEventListenerPromise = promise;

        try {
            final Intent takeIntent = new Intent(MediaStore.ACTION_IMAGE_CAPTURE);
            photoUri = getMediaFileUri(TYPE_TAKE_PHOTO);
            takeIntent.putExtra(MediaStore.EXTRA_OUTPUT, photoUri);

            currentActivity.startActivityForResult(takeIntent, REQUEST_TAKE_PHOTO);
        } catch (Exception e) {
            mActivityEventListenerPromise.reject("FAILED_TO_SHOW_PICKER", e);
            mActivityEventListenerPromise = null;
        }
    }
}
