import { WidgetAttributes } from "./index";
import React, { useEffect, useMemo, useRef, useState } from 'react'
import { useWindowSize } from "./useWindowSize";
import MuxPlayerElement from "@mux/mux-player/*";
import { useCombinedRefs } from "./useCombinedRefs";

export const createGroundBreakWidget = (widget: WidgetAttributes) => {
  switch (widget.type) {
    case "TEXT":
      return <p style={widget.style}> {widget.label}</p>;
    default:
      return null;
  }
};

export const GroundBreakOverlay = (
  { widgets, ratio = 0.5625, muxRef }:
    {
      widgets: WidgetAttributes[] | undefined,
      ratio?: number | undefined,
      muxRef?: React.RefObject<MuxPlayerElement>
    }
) => {
  const size = useWindowSize();

  const width = useMemo(
    () => size.height ? `${size.height * ratio}px` : '100%'
    , [size])



  return (
    <div style=
      {{
        position: 'absolute',
        width,
        height: '100%',
        zIndex: 9999,
        left: 0,
        right: 0,
        margin: 'auto'
      }}>
      {widgets?.map((widget, index) => <React.Fragment key={index}>
        <GroundBreakWidget widget={widget} muxRef={muxRef} />
      </React.Fragment>)}
    </div>
  )
}

export const GroundBreakWidget = ({ widget, muxRef }:
  {
    widget: WidgetAttributes,
    muxRef?: React.RefObject<MuxPlayerElement>
  }) => {
  const [isShow, setShow] = useState(widget.spawnTime === 0 ? true : false)
  // useEventCallbackEffect('timeupdate', muxRef, (evt) => { console.log("evt", evt) })
  const dom = createGroundBreakWidget(widget);
  return <React.Fragment>{isShow && dom}</React.Fragment>
}