import type { Schema, Struct } from '@strapi/strapi';

export interface SharedContact extends Struct.ComponentSchema {
  collectionName: 'components_shared_contacts';
  info: {
    displayName: 'Contact';
  };
  attributes: {
    Contact: Schema.Attribute.Text;
    Contactinfo: Schema.Attribute.Component<'shared.contactinfo', true>;
  };
}

export interface SharedContactinfo extends Struct.ComponentSchema {
  collectionName: 'components_shared_contactinfos';
  info: {
    description: '';
    displayName: 'Contactinfo';
  };
  attributes: {
    Icon: Schema.Attribute.Enumeration<
      ['home', 'Envelope', 'clock', 'mapMarkerAlt', 'phone']
    >;
    Property: Schema.Attribute.String;
    Propertyinfo: Schema.Attribute.String;
  };
}

export interface SharedEducation extends Struct.ComponentSchema {
  collectionName: 'components_shared_educations';
  info: {
    description: '';
    displayName: 'Education';
  };
  attributes: {
    Description: Schema.Attribute.Text;
    Header: Schema.Attribute.String;
    Icon: Schema.Attribute.Enumeration<
      [
        'home',
        'information-circle',
        'phone',
        'envelope',
        'calendar-days',
        'bolt',
        'trophy',
        'chart-bar',
        'user-group',
        'user',
        'identification',
        'clipboard-document-check',
        'credit-card',
        'clock',
        'map-pin',
        'globe-alt',
        'newspaper',
        'cog-6-tooth',
        'droplet',
        'water',
        'swimmer',
        'child',
      ]
    >;
    Price: Schema.Attribute.String;
  };
}

export interface SharedEmployees extends Struct.ComponentSchema {
  collectionName: 'components_shared_employees';
  info: {
    displayName: 'Employees';
  };
  attributes: {
    About: Schema.Attribute.String;
    Employeeavatar: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    Employeename: Schema.Attribute.String;
    Proffession: Schema.Attribute.String;
  };
}

export interface SharedFooter extends Struct.ComponentSchema {
  collectionName: 'components_shared_footers';
  info: {
    description: '';
    displayName: 'Footer';
  };
  attributes: {
    Email: Schema.Attribute.String;
    Phonenumber: Schema.Attribute.String;
    Sponsors: Schema.Attribute.Component<'shared.sponsors', true>;
  };
}

export interface SharedGallery extends Struct.ComponentSchema {
  collectionName: 'components_shared_galleries';
  info: {
    description: '';
    displayName: 'Gallery';
  };
  attributes: {
    Galleryheader: Schema.Attribute.String;
    Gallerytext: Schema.Attribute.Text;
    Image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
  };
}

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {
    file: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface SharedNavbar extends Struct.ComponentSchema {
  collectionName: 'components_shared_navbars';
  info: {
    displayName: 'Navbar';
  };
  attributes: {
    Logo: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface SharedQuote extends Struct.ComponentSchema {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    body: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedRichText extends Struct.ComponentSchema {
  collectionName: 'components_shared_rich_texts';
  info: {
    description: '';
    displayName: 'Rich text';
    icon: 'align-justify';
  };
  attributes: {
    body: Schema.Attribute.RichText;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'Seo';
    icon: 'allergies';
    name: 'Seo';
  };
  attributes: {
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
    shareImage: Schema.Attribute.Media<'images'>;
  };
}

export interface SharedSlider extends Struct.ComponentSchema {
  collectionName: 'components_shared_sliders';
  info: {
    description: '';
    displayName: 'Slider';
    icon: 'address-book';
  };
  attributes: {
    files: Schema.Attribute.Media<'images', true>;
  };
}

export interface SharedSponsors extends Struct.ComponentSchema {
  collectionName: 'components_shared_sponsors';
  info: {
    description: '';
    displayName: 'Sponsors';
  };
  attributes: {
    Sponsorimage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    Sponsorlink: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'/#home'>;
  };
}

export interface SharedTeam extends Struct.ComponentSchema {
  collectionName: 'components_shared_teams';
  info: {
    displayName: 'Team';
  };
  attributes: {
    Description: Schema.Attribute.String;
    Employees: Schema.Attribute.Component<'shared.employees', true>;
    Teamheader: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'shared.contact': SharedContact;
      'shared.contactinfo': SharedContactinfo;
      'shared.education': SharedEducation;
      'shared.employees': SharedEmployees;
      'shared.footer': SharedFooter;
      'shared.gallery': SharedGallery;
      'shared.media': SharedMedia;
      'shared.navbar': SharedNavbar;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
      'shared.sponsors': SharedSponsors;
      'shared.team': SharedTeam;
    }
  }
}
