import { common } from '@mui/material/colors';
import { alpha } from '@mui/material/styles';
import { error, mainpalette, info, neutral, blues, success, warning } from './colors';

export function createPalette() {
  return {
    action: {
      active: neutral[500],
      disabled: alpha(neutral[900], 0.38),
      disabledBackground: alpha(neutral[900], 0.12),
      focus: alpha(neutral[900], 0.16),
      hover: alpha(neutral[900], 0.04),
      selected: alpha(neutral[900], 0.12)
    },
    background: {
      default: common.white,
      paper: common.white
    },
    divider: '#F2F4F7',
    error,
    info,
    mode: 'light',
    neutral,
    primary: mainpalette,
    success,
    text: {
      primary: neutral[900],
      secondary: neutral[500],
      disabled: alpha(neutral[900], 0.38),
    },
    blues:{
      main: blues.main,
      highlight: blues.highlight,
      yellowhl: blues.yellowhl
    },
    warning,
  };
}
