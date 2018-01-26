package com.studyproject.view;

import android.content.Context;
import android.support.annotation.NonNull;
import android.support.annotation.Nullable;
import android.util.AttributeSet;
import android.view.LayoutInflater;
import android.view.View;
import android.widget.FrameLayout;

import com.studyproject.R;

/**
 * Created by canzhanbao on 2017/12/1 0001.
 */

public class ToolBarView extends FrameLayout {
    public ToolBarView(@NonNull Context context) {
        this(context, null);
    }

    public ToolBarView(@NonNull Context context, @Nullable AttributeSet attrs) {
        this(context, attrs, 0);
    }

    public ToolBarView(@NonNull Context context, @Nullable AttributeSet attrs, int defStyleAttr) {
        super(context, attrs, defStyleAttr);

        LayoutInflater.from(context).inflate(R.layout.view_toolbar, this, true);
    }


}
