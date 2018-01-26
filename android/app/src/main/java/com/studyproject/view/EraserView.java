package com.studyproject.view;

import android.content.Context;
import android.graphics.Bitmap;
import android.graphics.BitmapFactory;
import android.graphics.Canvas;
import android.graphics.Color;
import android.graphics.Paint;
import android.graphics.Path;
import android.graphics.PorterDuff;
import android.graphics.PorterDuffXfermode;
import android.support.annotation.Nullable;
import android.util.AttributeSet;
import android.view.MotionEvent;
import android.view.View;

import com.studyproject.R;

/**
 * Created by canzhanbao on 2017/12/1 0001.
 */

public class EraserView extends View {
    private int mWidth;
    private int mHeight;

    private Bitmap mBitmap;

    private Paint mPaint;
    private Bitmap mDstBitmap;
    private Canvas mDstCanvas;
    private Path mDstPath;
    private Paint mBitmapPaint;

    public EraserView(Context context) {
        this(context, null);
    }

    public EraserView(Context context, @Nullable AttributeSet attrs) {
        this(context, attrs, 0);
    }

    public EraserView(Context context, @Nullable AttributeSet attrs, int defStyleAttr) {
        super(context, attrs, defStyleAttr);
        setLayerType(View.LAYER_TYPE_SOFTWARE, null);
        mPaint = new Paint(Paint.ANTI_ALIAS_FLAG);
        mBitmapPaint = new Paint(Paint.ANTI_ALIAS_FLAG);

        mBitmap = BitmapFactory.decodeResource(getResources(), R.drawable.img_5);
        mHeight = mBitmap.getHeight();
        mWidth = mBitmap.getWidth();
        mBitmapPaint.setStyle(Paint.Style.STROKE);
        mBitmapPaint.setStrokeWidth(30);
        mBitmapPaint.setStrokeCap(Paint.Cap.ROUND);
        mBitmapPaint.setStrokeJoin(Paint.Join.ROUND);
        mDstPath = new Path();
        drawSrcBitmap();
    }

    @Override
    protected void onMeasure(int widthMeasureSpec, int heightMeasureSpec) {
        super.onMeasure(widthMeasureSpec, heightMeasureSpec);
        setMeasuredDimension(mWidth, mHeight);
    }

    @Override
    public boolean onTouchEvent(MotionEvent event) {
        switch (event.getAction()){
            case MotionEvent.ACTION_DOWN:
                mDstPath.moveTo(event.getX(), event.getY());
                break;
            case MotionEvent.ACTION_MOVE:
                mDstPath.lineTo(event.getX(), event.getY());
                invalidate();
                break;
            case MotionEvent.ACTION_UP:
                break;
            default:
                break;
        }
        return true;
    }

    @Override
    protected void onDraw(Canvas canvas) {
        super.onDraw(canvas);
        drawDst(canvas);
        setSrcXferMode();
        drawSrc(canvas);
        resetSrcXferMode();
    }

    private void resetSrcXferMode() {
        mPaint.setXfermode(null);
    }

    private void drawDst(Canvas canvas) {
        mBitmapPaint.setColor(Color.BLUE);
        mDstCanvas.drawPath(mDstPath, mBitmapPaint);
        canvas.drawBitmap(mDstBitmap, 0, 0, mPaint);
    }

    private void setSrcXferMode() {
        mPaint.setXfermode(new PorterDuffXfermode(PorterDuff.Mode.SRC_OUT));
    }

    private void drawSrc(Canvas canvas) {
        canvas.drawBitmap(mBitmap, 0, 0, mPaint);
    }

    private void drawSrcBitmap() {
        mDstBitmap = Bitmap.createBitmap(mWidth, mHeight, Bitmap.Config.ARGB_8888);
        mDstCanvas = new Canvas(mDstBitmap);
    }
}
