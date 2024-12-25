import type { Struct, Schema } from '@strapi/strapi';

export interface MenuMLink extends Struct.ComponentSchema {
  collectionName: 'components_menu_m_links';
  info: {
    displayName: 'MenuLink';
    description: '';
  };
  attributes: {
    title: Schema.Attribute.String;
    card: Schema.Attribute.Component<'menu.card', true>;
  };
}

export interface MenuDropdown extends Struct.ComponentSchema {
  collectionName: 'components_menu_dropdowns';
  info: {
    displayName: 'Dropdown';
  };
  attributes: {
    title: Schema.Attribute.String;
    menu_link: Schema.Attribute.Relation<
      'oneToOne',
      'api::menu-link.menu-link'
    >;
  };
}

export interface MenuCard extends Struct.ComponentSchema {
  collectionName: 'components_menu_cards';
  info: {
    displayName: 'card';
    description: '';
  };
  attributes: {
    title: Schema.Attribute.String;
    description: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images'>;
    price: Schema.Attribute.Integer;
  };
}

export interface LayoutHeader extends Struct.ComponentSchema {
  collectionName: 'components_layout_headers';
  info: {
    displayName: 'Header';
    description: '';
  };
  attributes: {
    logoLink: Schema.Attribute.Component<'elements.logo-link', false>;
    links: Schema.Attribute.Component<'elements.link', true>;
    headerImage: Schema.Attribute.Media<'images'>;
    address: Schema.Attribute.Component<'elements.text', false>;
    workTime: Schema.Attribute.Component<'elements.text', false>;
  };
}

export interface LayoutFooter extends Struct.ComponentSchema {
  collectionName: 'components_layout_footers';
  info: {
    displayName: 'footer';
    description: '';
  };
  attributes: {
    logoLink: Schema.Attribute.Component<'elements.logo-link', false>;
    links: Schema.Attribute.Component<'elements.link', true>;
    phoneNumber: Schema.Attribute.Component<'elements.text', false>;
    privacyPolicy: Schema.Attribute.Component<'elements.link', false>;
  };
}

export interface ElementsText extends Struct.ComponentSchema {
  collectionName: 'components_elements_texts';
  info: {
    displayName: 'Text';
  };
  attributes: {
    text: Schema.Attribute.Text;
  };
}

export interface ElementsLogoLink extends Struct.ComponentSchema {
  collectionName: 'components_elements_logo_links';
  info: {
    displayName: 'Logo link';
  };
  attributes: {
    image: Schema.Attribute.Media<'images'>;
    text: Schema.Attribute.String;
    href: Schema.Attribute.String;
  };
}

export interface ElementsLink extends Struct.ComponentSchema {
  collectionName: 'components_elements_links';
  info: {
    displayName: 'Link';
    description: '';
  };
  attributes: {
    href: Schema.Attribute.String;
    text: Schema.Attribute.String;
    external: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    slug: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'menu.m-link': MenuMLink;
      'menu.dropdown': MenuDropdown;
      'menu.card': MenuCard;
      'layout.header': LayoutHeader;
      'layout.footer': LayoutFooter;
      'elements.text': ElementsText;
      'elements.logo-link': ElementsLogoLink;
      'elements.link': ElementsLink;
    }
  }
}
