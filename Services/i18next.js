import i18next from 'i18next';
import {initReactI18next} from 'react-i18next';
import English from '../LaguageFormats/English.json';
import Indonesian from '../LaguageFormats/Indonesian.json';
import Arabic from '../LaguageFormats/Arabic.json';
import Chinese from '../LaguageFormats/Chinese .json';
import Dutch from '../LaguageFormats/Dutch.json';
import French from '../LaguageFormats/French.json';
import German from '../LaguageFormats/German.json';
import Italian from '../LaguageFormats/Italian.json';
import Korean from '../LaguageFormats/Korean.json';
import Portuguese from '../LaguageFormats/Portuguese.json';
import Russian from '../LaguageFormats/Russian.json';
import Spanish from '../LaguageFormats/Spanish.json';


const LanguageResources = {
  en: { translation: English }, 
  id: { translation: Indonesian },
  ar: { translation: Arabic },
  zh: { translation: Chinese },
  nl: { translation: Dutch },
  fr: { translation: French },
  de: { translation: German },
  it: { translation: Italian },
  ko: { translation: Korean },
  pt: { translation: Portuguese },
  ru: { translation: Russian },
  es: { translation: Spanish }
};

i18next.use(initReactI18next).init({ 
    compatibilityJSON:'v3',
    lng: 'en',
    fallbackLng: 'en', 
    resources: LanguageResources, 
    interpolation: { 
      escapeValue: false 
    } 
  }); 
    
  export default i18next;