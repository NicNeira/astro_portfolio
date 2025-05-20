
export interface UIConfig {
  theme: string;
}

export interface Widget {
  id?: string;
  isDark?: boolean;
  bg?: string;
  classes?: Record<string, string | Record<string, string>>;
}


export interface CallToAction {
  href?: string;
  text: string;
  icon?: string;
  variant?: string;
  target?: '_blank' | '_self' | '_parent' | '_top';
  class?: string;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  classes?: string;
}

export interface Item {
  title?: string;
  description?: string;
  icon?: string;
  callToAction?: CallToAction;
  classes?: {
    panel?: string;
    title?: string;
    description?: string;
    icon?: string;
    actionClass?: string; 
  };
}
export interface ItemGrid {
  items?: Array<Item>;
  columns?: 2 | 3 | 4;
  defaultIcon?: string;
  classes?: {
    container?: string;
    panel?: string;
    title?: string;
    description?: string;
    icon?: string;
    action?: string;
  };
}

export interface Steps extends Omit<Headline, 'classes'>, Widget {
  items?: Array<Item>;
  callToAction?: string | CallToAction;
  image?: string | Image;
  isReversed?: boolean;
}

export interface Image {
  src: string;
  alt?: string;
}

export interface Video {
  src: string;
  type?: string;
}

export interface Headline {
  title?: string;
  subtitle?: string;
  tagline?: string;
  classes?: Record<string, string>;
}

export interface Features extends Omit<Headline, 'classes'>, Widget {
  image?: string | unknown;
  video?: Video;
  items?: Array<Item>;
  columns?: number;
  defaultIcon?: string;
  callToAction1?: CallToAction;
  callToAction2?: CallToAction;
  isReversed?: boolean;
  isBeforeContent?: boolean;
  isAfterContent?: boolean;
}

export interface MetaData {
  title?: string;
  ignoreTitleTemplate?: boolean;
  canonical?: string;
  robots?: MetaDataRobots;
  description?: string;
  twitter?: MetaDataTwitter;
}

export interface MetaDataRobots {
  index?: boolean;
  follow?: boolean;
}

export interface MetaDataTwitter {
  handle?: string;
  site?: string;
  cardType?: string;
}

