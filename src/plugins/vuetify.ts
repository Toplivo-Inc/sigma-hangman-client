import { createVuetify } from "vuetify/framework";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import { aliases, mdi } from "vuetify/iconsets/mdi";
import { VFileUpload } from "vuetify/labs/VFileUpload";

export const catppuccinDarkTheme = {
  dark: true,
  colors: {
    background: '#1e1e2e',
    surface: '#181825',
    'surface-bright': '#313244',
    'surface-light': '#292c3c',
    'surface-variant': '#45475a',
    'on-surface-variant': '#cdd6f4',
    
    primary: '#cba6f7',
    'primary-darken-1': '#b4befe',
    secondary: '#89b4fa',
    'secondary-darken-1': '#74c7ec',
    
    error: '#f38ba8',
    info: '#89b4fa',
    success: '#a6e3a1',
    warning: '#fab387',
  },
  
  variables: {
    'border-color': '#45475a',
    'border-opacity': 0.35,
    
    'high-emphasis-opacity': 0.95,
    'medium-emphasis-opacity': 0.75,
    'disabled-opacity': 0.45,
    
    'idle-opacity': 0.08,
    'hover-opacity': 0.12,
    'focus-opacity': 0.16,
    'selected-opacity': 0.14,
    'activated-opacity': 0.18,
    'pressed-opacity': 0.18,
    'dragged-opacity': 0.12,
    
    'theme-kbd': '#313244',
    'theme-on-kbd': '#cdd6f4',
    'theme-code': '#181825',
    'theme-on-code': '#cdd6f4',
  }
}

export default createVuetify({
  components: {
    ...components,
    VFileUpload,
  },
  directives,
  theme: {
    defaultTheme: 'system',
    themes: {
      dark: catppuccinDarkTheme,
    },
  },
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi
    }
  }
})