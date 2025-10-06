import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-2">
      <Button
        variant={language === 'en' ? 'default' : 'outline'}
        size="sm"
        onClick={() => setLanguage('en')}
        className="min-w-[50px]"
      >
        EN
      </Button>
      <Button
        variant={language === 'nl' ? 'default' : 'outline'}
        size="sm"
        onClick={() => setLanguage('nl')}
        className="min-w-[50px]"
      >
        NL
      </Button>
    </div>
  );
};

export default LanguageSwitcher;
