import { WidgetAttributes } from "./index";
import React from 'react';
import MuxPlayerElement from "@mux/mux-player/*";
export declare const createGroundBreakWidget: (widget: WidgetAttributes) => React.JSX.Element | null;
export declare const GroundBreakOverlay: ({ widgets, ratio, muxRef }: {
    widgets: WidgetAttributes[] | undefined;
    ratio?: number | undefined;
    muxRef?: React.RefObject<MuxPlayerElement> | undefined;
}) => React.JSX.Element;
export declare const GroundBreakWidget: ({ widget, muxRef }: {
    widget: WidgetAttributes;
    muxRef?: React.RefObject<MuxPlayerElement> | undefined;
}) => React.JSX.Element;
