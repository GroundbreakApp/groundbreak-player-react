import React from 'react';
import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { ValueOf } from '@mux/playback-core';
import { MuxPlayerProps } from './index';
interface MuxPlayerElement extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {
    nohotkeys?: boolean | undefined;
}
declare global {
    namespace JSX {
        interface IntrinsicElements {
            'mux-player': MuxPlayerElement;
        }
    }
}
type LoadingType = {
    PAGE: 'page';
    VIEWPORT: 'viewport';
};
declare const LoadingType: LoadingType;
interface MuxPlayerLazyProps extends MuxPlayerProps {
    loading?: ValueOf<LoadingType>;
}
declare const MuxPlayer: React.ForwardRefExoticComponent<MuxPlayerLazyProps & React.RefAttributes<import("@groundbreak/groundbreak-player/*").default>>;
export default MuxPlayer;
